import axios from "axios";

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
    throw new Error(`Failed to subscribe: ${error}`);
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
    throw new Error(`Failed to subscribe: ${error}`);
  }
}
