import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="lg:mt-8">
      <div className="flex flex-wrap justify-between xl:justify-center">
        <div className="m-0 w-full lg:w-1/2">
          <h1 className="text-3xl font-bold text-slate-900 leading-tight text-center
                        sm:text-4xl
                        lg:text-5xl
                        xl:text-start">
            Hey
            <br />
            I'm Joel
            <br />
            Software Developer
          </h1>
          <div className="text-center pt-4 lg:hidden">
            <Image
              className="rounded-full m-auto border-4 border-solid border-slate-50 hover:border-slate-300 hover:cursor-pointer md:flex-wrap-reverse"
              width={200}
              height={200}
              src="/joel_elegante.png"
              alt="Profile picture of my portfolio"
            />
          </div>
          <p className="mt-6 text-reg text-slate-500
                        sm:text-lg
                        lg:text-2xl">
            I design, develop and maintain web applications in NextJS 13 and
            mostly with Python in the backend. My profile fits well with job
            positions like <b className="text-black">Full Stack Developer</b>,
            <b className="text-black"> Automation QA</b> and <b className="text-black">DevOps</b>.
          </p>
          <div className="flex mt-8 space-x-4 text-sm justify-center text-center
                          sm:text-reg
                          xl:text-lg">
            <Link href="/contact"
                  className="w-40 rounded-md py-2 px-4 border-black border-2 bg-white text-black hover:shadow-lg hover:text-blue-800
                               ">
              Contact me
            </Link>
            <Link href="projects"
                  className="w-40 rounded-md py-2 px-4 bg-black text-white hover:text-yellow-400">
              See my projects
            </Link>
          </div>
        </div>
        <div className="m-0 hidden lg:inline-block">
          <Image
            className="rounded-full border-8 border-solid border-slate-50 hover:border-slate-300 hover:cursor-pointer md:flex-wrap-reverse"
            width={400}
            height={400}
            src="/joel_elegante.png"
            alt="Profile picture of my portfolio"
          />
        </div>
      </div>
    </div>
  );
}
