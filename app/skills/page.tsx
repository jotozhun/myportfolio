import SkillCard from "../components/SkillCard";

const fullStackTechnologies = [{
  "technology": "HTML/CSS/JS",
  "experience": 4,
  "description": "Web responsive design used with Angular and NextJS.",
  "image": "/basicfront-logo.jpg",
  "image_alt": "HTML, CSS and Javascript Logos"
}]

export default function Skills()
{
    return (
      <div>
        <h1 className="mb-4 text-center text-5xl font-bold">Checkout my skills in each role</h1>
        <div className="w-full rounded-lg border-slate-400 border-dotted border-2">
          <h1>Full Stack</h1>
          {fullStackTechnologies.map((stackTechnology, index) => {
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
    );
}