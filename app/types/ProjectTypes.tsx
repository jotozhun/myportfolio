export class ProjectGeneralInfo{
    image: string;
    image_alt: string;
    title: string;
    description: string;
    category: string;
    technologies: string[]

    constructor(image: string,
                image_alt: string,
                title: string,
                description: string,
                category: string,
                technologies: string[])
    {
        this.image = image;
        this.image_alt = image_alt;
        this.title = title;
        this.description = description;
        this.category = category;
        this.technologies = technologies;
    }
}