import Image from "next/image";
import { ProjectGeneralInfo } from "../types/ProjectTypes";

export default function ProjectCard({image,
                                    image_alt,
                                    title,
                                    description,
                                    category,
                                    technologies
                                    }: ProjectGeneralInfo)
{
  return (
    <div className="border border-slate-300 rounded-lg flex">
      <Image
        src={image}
        width={200}
        height={200}
        alt={image_alt}
      />
      <div className="py-2 px-4 space-y-3">
        <div className="space-y-1">
          <h1 className="font-bold text-2xl">
            {title}
          </h1>
          <h2>
            {description}
          </h2>
        </div>
        <div>
          <h3>
            <b>Category:</b> {category}
          </h3>
          <span>
            <b>Technologies:</b> {showTechnologies(technologies)}
          </span>
        </div>
      </div>
    </div>
  );
}

var showTechnologies = (technologies_list: string[]) => {
    let technologiesString = "";
    technologies_list.map((technology, index) => {
        technologiesString += technology;
        if(index < technologies_list.length)
            technologiesString += ", ";
    })
    technologiesString += ".";
    return technologiesString;
}