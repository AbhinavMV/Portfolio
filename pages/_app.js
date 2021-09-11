import { ThemeProvider } from "next-themes";
import "tailwindcss/tailwind.css";
import "../styles/global.css";
import Sidebar from "../components/Sidebar";

import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <div className="grid grid-cols-12 gap-4 px-2 sm:px-12 md:px-16 lg:px-22 my-4">
        <div className="col-span-12 lg:col-span-3 bg-white dark:bg-black-light rounded-xl shadow-dark">
          <Sidebar />
        </div>
        <div className="flex flex-col overflow-hidden col-span-12 lg:col-span-9 bg-white dark:bg-black-light rounded-xl shadow-dark">
          <Navbar />
          <Component {...pageProps} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
