import Image from "next/image";

export default function SkillCard({technology,
                                   experience,
                                   description,
                                   image,
                                   image_alt}: SkillInfo)
{
    return (
        <div className="text-slate-50 w-52 h-64 p-4 bg-gradient-to-br from-slate-900 to-slate-500 rounded-lg border border-solid border-black overflow-hidden mr-10 mb-6 hover:overflow-visible hover:relative hover:p-8">
            <p className="text-center text-2xl font-bold">{technology}</p>
            <Image className="rounded-2xl py-2"
                   src={image}
                   width={200}
                   height={100}
                   alt={image_alt}/>
            <div className="flex justify-between font-bold text-lg">
                <p className="">Experience:</p>
                <p className="text-yellow-400">{experience}</p>
                <p className="">years</p>
            </div>
            <p className="text-md">{description}</p>
        </div>
    );
}

type SkillInfo = {
    technology: string;
    experience: number;
    description: string;
    image: string;
    image_alt: string;
};