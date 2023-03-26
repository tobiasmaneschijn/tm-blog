import Image from "next/image";
import Link from "next/link";
import logo from "@public/favicon.svg";

const Header = () => {

return (

    <header>
        <div className="text-center p-8 w-full bg-slate-900 text-white my-6 rounded-md">
            <Image alt="logo" src={logo} width={32} className="bg-white rounded-full mx-auto"/>
            <Link href={'/'}>
                <h1 className="text-3xl font-bold text-green-800"
                >Toby&apos;s Blog</h1>
            </Link>
            <p className="text-slate-300">My thoughts on the world of Tech</p>
        </div>
    </header>
    )
}

export default Header;