import ProjectCard from "../components/ProjectCard";

const projectsGeneralInfo = [
    {
        image: "/generic_project_pic.jpg",
        image_alt: "Vagrant project with multiple services",
        title: "Java application with services using Vagrant",
        description: "Java application hosted locally with Vagrant, using MySQL with Memcached, RabbitMQ, Tomcat server for the java app, and using Nginx as a load balancer of the application and end users.",
        category: "DevOps",
        technologies: ["Java", "Vagrant", "RabbitMQ", "Tomcat", "Memcached",
            "MySQL", "Nginx", "VirtualBox"]
    }
]

export default function Projects() {
  return (
    <div className="border border-black p-10 overflow-hidden space-y-4">
      {projectsGeneralInfo.map((project, index) => {
        return <ProjectCard  key={index}
                             image={project.image}
                             image_alt={project.image_alt}
                             title={project.title}
                             description={project.description}
                             category={project.category}
                             technologies={project.technologies}/>
      })
      }
    </div>
  );
}
