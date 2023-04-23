import Image from "next/image";
import { ProjectGeneralInfo } from "../types/ProjectTypes";
import { Category } from "@prisma/client";
import Link from "next/link";

export default function ProjectCard({image,
                                    image_alt,
                                    title,
                                    description,
                                    category,
                                    technologies
                                    }: ProjectGeneralInfo)
{
  return (
    <Link href="/projects"
          className="border border-slate-300 rounded-lg overflow-hidden
                    sm:flex
                    lg:max-h-52">
      <div className="p-4 sm:inline-block
                      xl:w-fit xl:h-fit md:p-0 lg:min-w-max">
        <Image
          className="m-auto w-full"
          src={image}
          width={200}
          height={200}
          alt={image_alt}
        />
      </div>
      <div className="py-2 px-4 space-y-3 overflow-hidden
                      md:flex md:flex-col md:justify-between select-none">
        <div className="space-y-1 overflow-hidden">
          <h1 className="font-bold text-2xl text-center
                         xl:text-3xl">
            {title}
          </h1>
          <h2 className="text-sm text-justify hidden
                         lg:inline-block
                         xl:text-reg">
            {description}
          </h2>
        </div>
        <div className="text-sm
                        xl:text-reg">
          <h3>
            <b>Category:</b> {category}
          </h3>
          <span>
            <b>Technologies:</b> {showTechnologies(technologies)}
          </span>
        </div>
      </div>
    </Link>
  );
}

var showTechnologies = (technologies_list: Category[]) => {
    let technologiesString = "";
    technologies_list.map((technology, index) => {
        technologiesString += technology.name;
        if(index < technologies_list.length - 1)
            technologiesString += ", ";
    })
    technologiesString += ".";
    return technologiesString;
}