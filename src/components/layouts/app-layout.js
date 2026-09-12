import { Footer } from "./footer";
import { Header } from "./heaader";

const AppLayout = ({ children }) => {
  return (
    <main className="w-full relative">
      <div className=" w-full z-[9999] fixed top-0 left-0  ">
        <Header />
      </div>
      {children}
      <Footer />
    </main>
  );
};

export default AppLayout;
