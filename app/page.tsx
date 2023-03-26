import Image from "next/image"
import style from "./page.module.css";

export default function Home() {
  return (
    <div>
      <div className="flex flex-wrap justify-around mt-16 mx-20">
        <div className="m-0 w-1/2">
            <h1 className="text-7xl font-bold text-slate-900 leading-tight">Hey<br/>I'm Joel<br/>Software Developer</h1>
            <p className="mt-4 text-lg text-slate-500">I design, develop and maintain web applications in NextJS 13 and mostly with Python in the backend.
              My profile fits well with job positions like Full Stack Developer, Automation QA and DevOps with AWS.
            </p>
        </div>
        <div className="m-0">
          <Image
            className="rounded-full border-8 border-solid border-slate-50"
            width={400}
            height={400}
            src="/joel_elegante.png"
            alt="Profile picture of my portfolio"/>
        </div>
      </div>
    </div>
  )
}
