import { ThemeProvider } from "next-themes";
import "tailwindcss/tailwind.css";
import "../styles/global.css";
import Sidebar from "../components/Sidebar";

import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <div className="grid grid-cols-12 gap-4 px-10 my-6 sm:px-16 md:px-24 lg:px-22">
        <div className="col-span-12 bg-white lg:col-span-3 dark:bg-black-light rounded-xl shadow-dark">
          <Sidebar />
        </div>
        <div className="flex flex-col col-span-12 overflow-hidden bg-white lg:col-span-9 dark:bg-black-light rounded-xl shadow-dark">
          <Navbar />
          <Component {...pageProps} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
