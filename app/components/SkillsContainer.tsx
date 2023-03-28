import { SkillsContainerInfo, SkillInfo } from "../types/skillsTypes";
import SkillCard from "./SkillCard";

export default function SkillsContainer({title, skillsInfoList}: (SkillsContainerInfo))
{
    return (
        <div className="w-full rounded-lg border-slate-400 border-dotted border-2 mt-4">
          <div className="mx-10 my-8">
          <h1 className="text-3xl font-bold text-center lg:text-start">{title}</h1>
          <div className="mt-6 flex flex-wrap justify-center lg:justify-start">
            {skillsInfoList.map((stackTechnology, index) => {
              return <SkillCard key={index}
                                technology={stackTechnology.technology}
                                experience={stackTechnology.experience}
                                description={stackTechnology.description}
                                image={stackTechnology.image}
                                image_alt={stackTechnology.image_alt}
              />
            })}
          </div>
          </div>
        </div>
    );
}

