import axios from "axios";

// If this is missing/undefined, every request below silently becomes a
// request to "undefined/api/..." which always fails. Make that obvious
// in the console instead of a generic toast, so it's easy to confirm
// whether BACKEND_API_BASE_URL is actually set in Vercel > Settings >
// Environment Variables (Production) for THIS project.
if (!process.env.BACKEND_API_BASE_URL && typeof window !== "undefined") {
  console.error(
    "[config] BACKEND_API_BASE_URL is not set. Forms and blog/service data will fail. " +
      "Check Vercel > Project Settings > Environment Variables (Production) and redeploy."
  );
}

export async function getSinglePost(slug) {
  try {
    const response = await axios({
      method: "GET",
      url: `${process.env.BACKEND_API_BASE_URL}/api/public/blog/${slug}`,
    });
    return response?.data?.data;
  } catch (error) {
    throw new Error(`Failed to fetch post: ${error}`);
  }
}

export async function getSingleService(slug) {
  try {
    const response = await axios({
      method: "GET",
      url: `${process.env.BACKEND_API_BASE_URL}/api/public/service/${slug}`,
    });
    return response?.data?.data || {};
  } catch (error) {
    throw new Error(`🛑 Failed to fetch service: ${error}`);
  }
}

export async function getServiceList() {
  try {
    const response = await axios({
      method: "GET",
      url: `${process.env.BACKEND_API_BASE_URL}/api/public/service/list`,
    });
    return response?.data?.data || [];
  } catch (error) {
    throw new Error(`🛑 Failed to fetch service list: ${error}`);
  }
}

export async function subscribeNewsletter(payload) {
  try {
    const response = await axios({
      method: "POST",
      data: payload,
      url: `${process.env.BACKEND_API_BASE_URL}/api/public/news-letter`,
    });
    return response?.data;
  } catch (error) {
    console.error(
      "Newsletter subscribe failed:",
      error?.response?.status,
      error?.response?.data || error.message
    );
    throw new Error(
      error?.response?.data?.message || `Failed to subscribe: ${error}`
    );
  }
}

export async function contactSubmit(payload) {
  try {
    const response = await axios({
      method: "POST",
      data: payload,
      url: `${process.env.BACKEND_API_BASE_URL}/api/public/query`,
    });
    return response?.data;
  } catch (error) {
    // Log the REAL reason (status code + backend message + whether the URL
    // was even valid) instead of hiding it behind a generic toast. Check
    // the browser console next time the form fails.
    console.error(
      "Contact form submit failed:",
      error?.response?.status,
      error?.response?.data || error.message,
      "Request URL was:",
      `${process.env.BACKEND_API_BASE_URL}/api/public/query`
    );
    throw new Error(
      error?.response?.data?.message || `Failed to submit: ${error}`
    );
  }
}
