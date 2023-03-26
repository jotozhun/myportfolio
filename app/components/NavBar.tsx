import Link from "next/link";

export default function Navbar()
{
    return (
        <div className="w-full bg-gradient-to-r from-blue-900 to-blue-600">
            <div className="flex justify-end pl-4 pr-8">
                <div className="flex text-white font-bold">
                    <Link className="py-4 px-2 hover:bg-slate-700 hover:text-yellow-400" href="/">About Me</Link>
                    <Link className="py-4 px-2 hover:bg-slate-700 hover:text-yellow-400" href="/skills">Skills</Link>
                    <Link className="py-4 px-2 hover:bg-slate-700 hover:text-yellow-400" href="/projects">Projects</Link>
                    <Link className="py-4 px-2 hover:bg-slate-700 hover:text-yellow-400" href="/contact">Contact</Link>
                </div>
            </div>
        </div>
    );
}