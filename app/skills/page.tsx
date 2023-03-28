import SkillsContainer from "../components/SkillsContainer";
import { SkillsContainerInfo, SkillInfo } from "../types/skillsTypes";

const fullStackTechnologies = [
  {
    title: "Frontend | Backend | Automation QA | DevOps",
    technologyList: [
      {
        technology: "HTML/CSS/JS",
        experience: 4,
        description: "Web responsive design used with Angular and NextJS.",
        image: "/basicfront-logo.jpg",
        image_alt: "HTML, CSS and Javascript Logos",
      },
      {
        technology: "React/NextJS",
        experience: 1.5,
        description:
          "Dynamic web pages using hooks, e-commerce and lading pages. This page is made in NextJS ;)",
        image: "/nextjs-logo.png",
        image_alt: "React and NextJS Logos",
      },
      {
        technology: "Django",
        experience: 2,
        description:
          "Created RestAPIs, authentication, middlewares. I have used DjangoRestFramework.",
        image: "/django-logo.png",
        image_alt: "Django Logo",
      },
      {
        technology: "FastAPI",
        experience: 1.5,
        description:
          "Created RestAPIs, asynchronous requests. I had implemented microservices with Dependency Injection pattern and IOC.",
        image: "/fastapi-logo.png",
        image_alt: "FastAPI Logo",
      },
      {
        technology: "MySQL",
        experience: 4,
        description:
          "Created DML, DDL, DCL. Databases schemas, triggers and applied normalization rules. Used in most of my projects.",
        image: "/mysql-logo.jpg",
        image_alt: "MySQL Logo",
      },
      {
        technology: "PostgreSQL",
        experience: 2,
        description:
          "Used mostly in projects that need more data than usual, for example data science projects.",
        image: "/postgresql-logo.png",
        image_alt: "PostgreSQL Logo",
      },
    ]
  }
];

export default function Skills() {
  return (
    <div>
      <h1 className="mb-6 text-center text-5xl font-bold">
        Checkout my skills in each role
      </h1>
      {fullStackTechnologies.map((fullStackTechnology, index) => {
        let listOfCards = new Array<SkillInfo>();
        fullStackTechnology.technologyList.forEach((technology) => {
          let tmpcard = new SkillInfo(
            technology.technology,
            technology.experience,
            technology.description,
            technology.image,
            technology.image_alt
          );
          listOfCards.push(tmpcard);
        });
        return (
          <SkillsContainer
            key={index}
            title={fullStackTechnology.title}
            skillsInfoList={listOfCards}
          />
        );
      })}
    </div>
  );
}
