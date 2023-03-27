import Image from "next/image";
import Link from "next/link";
import logo from "@public/favicon.svg";

const Header = () => {
  return (
    <header>
      <div className="inline-flex justify-center mx-auto text-center p-8 w-full  text-slate-900 my-6 rounded-md">
        <div className="text-7xl text-slate-700">&#123;</div>
        <div className="flex flex-col justify-center items-center mx-auto my-auto">
          <Image
            alt="logo"
            src={logo}
            width={32}
            className="bg-white rounded-full mx-auto"
          />
          <Link href={"/"}>
            <h1 className="text-3xl font-serif font-bold text-slate-800">
              Tobias Maneschijn
            </h1>
          </Link>
          <p className="text-slate-600">
            Software engineering, design, music and lots of beer drinking.
          </p>
        </div>
        <div className="text-7xl text-slate-700">&#125;</div>
      </div>
    </header>
  );
};

export default Header;
