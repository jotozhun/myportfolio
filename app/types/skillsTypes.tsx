export class SkillInfo{
    technology: string;
    experience: number;
    description: string;
    image: string;
    image_alt: string;

    constructor(technology: string,
                experience: number,
                description: string,
                image: string,
                image_alt: string) {
        this.technology = technology;
        this.experience = experience;
        this.description = description;
        this.image = image;
        this.image_alt = image_alt;
    }
};

export class SkillsContainerInfo{
    title: string;
    skillsInfoList: Array<SkillInfo>;

    constructor(title:string,
                skillsInfoList: Array<SkillInfo>){
        this.title = title;
        this.skillsInfoList = skillsInfoList;
    }
}