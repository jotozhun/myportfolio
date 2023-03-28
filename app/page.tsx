import Image from "next/image"

export default function Home() {
  return (
    <div>
      <div className="flex flex-wrap justify-between xl:justify-center">
        <div className="m-0 w-full lg:w-1/2">
            <h1 className="text-7xl font-bold text-slate-900 leading-tight">Hey<br/>I'm Joel<br/>Software Developer</h1>
            <p className="mt-6 text-lg text-slate-500">I design, develop and maintain web applications in NextJS 13 and mostly with Python in the backend.
              My profile fits well with job positions like Full Stack Developer, Automation QA and DevOps with AWS.
            </p>
            <div className="flex mt-8 space-x-4 text-xl">
              <button className="w-40 rounded-md py-2 px-4 border-black border-2 bg-white text-black hover:shadow-lg hover:text-blue-800">Contact me</button>
              <button className="w-40 rounded-md py-2 px-4 bg-black text-white hover:text-yellow-400">See my projects</button>
            </div>
        </div>
        <div className="m-0 hidden lg:inline-block">
          <Image
            className="rounded-full border-8 border-solid border-slate-50 hover:border-slate-300 hover:cursor-pointer md:flex-wrap-reverse"
            width={400}
            height={400}
            src="/joel_elegante.png"
            alt="Profile picture of my portfolio"/>
        </div>
      </div>
    </div>
  )
}
