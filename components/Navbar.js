import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
const Navitem = ({ active, route, name }) => {
  return active !== name ? (
    <Link href={route}>
      <a>
        <span className="mr-1 text-lg md:mr-3 md:text-2xl hover:text-blue-light">{name}</span>
      </a>
    </Link>
  ) : null;
};
function Navbar() {
  const router = useRouter();
  const [active, setActive] = useState("");

  useEffect(() => {
    if (router.pathname === "/") setActive("About");
    else if (router.pathname === "/projects") setActive("Projects");
    else if (router.pathname === "/resume") setActive("Resume");
  }, [router]);

  return (
    <div className="flex items-center justify-between mx-4 my-4">
      <span className="text-3xl font-bold border-b-4 border-blue-light">{active}</span>
      <div>
        <Navitem active={active} route="/" name="About" />
        <Navitem active={active} route="/projects" name="Projects" />
        <Navitem active={active} route="/resume" name="Resume" />
      </div>
    </div>
  );
}

export default Navbar;
