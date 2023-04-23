import type { NextApiRequest, NextApiResponse } from "next";
import {PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
type Data = {
    name: string
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
){
    await prisma.skill.deleteMany();
    await prisma.project.deleteMany();
    await prisma.category.deleteMany();

    await prisma.category.createMany({
        data: [
            { name: "DevOps" },{ name: "Automation" },{ name: "Web Development" },
            { name: "Game Development" },
        ]
    })

    await prisma.skill.createMany({
        data: [
            { name: "Python" },{ name: "C#" },{ name: "Java" },{ name: "JavaScript" },
            { name: "TypeScript" },{ name: "ReactJS" },{ name: "NextJS" },{ name: "FastAPI" },
            { name: "Django" },{ name: "TailwindCSS" },{ name: "Unity" },{ name: "AWS" },
            { name: "Vagrant" },{ name: "Terraform" },{ name: "Ansible" },{ name: "Jenkins" },
            { name: "Docker" },{ name: "Kubernetes" },{ name: "Github Actions" },
            { name: "Cloudformation" },{ name: "CI" },{ name: "CD" },{ name: "Selenium" },
            { name: "Cypress" },{ name: "Appium" },{ name: "RPA" },{ name: "Bash Script" },
            { name: "MySQL" },{ name: "PostgreSQL" },{ name: "SQLite" },{ name: "MongoDB" },
            { name: "RabbitMQ" },{ name: "Tomcat" },{ name: "Memcached" },{ name: "Nginx" },
            { name: "VirtualBox" },{ name: "Azure" },{ name: "Google Cloud" }
        ]
    })

    const categories = await prisma.category.findMany();
    const skills = await prisma.skill.findMany();

    const devopsId = categories.find((category) => category.name === "DevOps")?.id || 1;
    const automationId = categories.find((category) => category.name === "Automation")?.id || 1;
    const webId = categories.find((category) => category.name === "Web Development")?.id || 1;
    const gameId = categories.find((category) => category.name === "Game Development")?.id || 1;

    const pythonId = skills.find((skill) => skill.name == "Python")?.id || 1;
    const csharpId = skills.find((skill) => skill.name == "C#")?.id || 1;
    const javaId = skills.find((skill) => skill.name == "Java")?.id || 1;
    const javascriptId = skills.find((skill) => skill.name == "JavaScript")?.id || 1;
    const typescriptId = skills.find((skill) => skill.name == "TypeScript")?.id || 1;
    const reactjsId = skills.find((skill) => skill.name == "ReactJS")?.id || 1;
    const nextjsId = skills.find((skill) => skill.name == "NextJS")?.id || 1;
    const fastapiId = skills.find((skill) => skill.name == "FastAPI")?.id || 1;
    const djangoId = skills.find((skill) => skill.name == "Django")?.id || 1;
    const tailwindcssId = skills.find((skill) => skill.name == "TailwindCSS")?.id || 1;
    const unityId = skills.find((skill) => skill.name == "Unity")?.id || 1;
    const awsId = skills.find((skill) => skill.name == "AWS")?.id || 1;
    const vagrantId = skills.find((skill) => skill.name == "Vagrant")?.id || 1;
    const terraformId = skills.find((skill) => skill.name == "Terraform")?.id || 1;
    const ansibleId = skills.find((skill) => skill.name == "Ansible")?.id || 1;
    const jenkinsId = skills.find((skill) => skill.name == "Jenkins")?.id || 1;
    const dockerId = skills.find((skill) => skill.name == "Docker")?.id || 1;
    const kubernetesId = skills.find((skill) => skill.name == "Kubernetes")?.id || 1;
    const githubactionsId = skills.find((skill) => skill.name == "Github Actions")?.id || 1;
    const cloudformationId = skills.find((skill) => skill.name == "Cloudformation")?.id || 1;
    const ciId = skills.find((skill) => skill.name == "CI")?.id || 1;
    const cdId = skills.find((skill) => skill.name == "CD")?.id || 1;
    const seleniumId = skills.find((skill) => skill.name == "Selenium")?.id || 1;
    const cypressId = skills.find((skill) => skill.name == "Cypress")?.id || 1;
    const appiumId = skills.find((skill) => skill.name == "Appium")?.id || 1;
    const rpaId = skills.find((skill) => skill.name == "RPA")?.id || 1;
    const bashscriptId = skills.find((skill) => skill.name == "Bash Script")?.id || 1;
    const mysqlId = skills.find((skill) => skill.name == "MySQL")?.id || 1;
    const postgresqlId = skills.find((skill) => skill.name == "PostgreSQL")?.id || 1;
    const sqliteId = skills.find((skill) => skill.name == "SQLite")?.id || 1;
    const mongodbId = skills.find((skill) => skill.name == "MongoDB")?.id || 1;
    const rabbitmqId = skills.find((skill) => skill.name == "RabbitMQ")?.id || 1;
    const tomcatId = skills.find((skill) => skill.name == "Tomcat")?.id || 1;
    const memcachedId = skills.find((skill) => skill.name == "Memcached")?.id || 1;
    const nginxId = skills.find((skill) => skill.name == "Nginx")?.id || 1;
    const virtualboxId = skills.find((skill) => skill.name == "MongoDB")?.id || 1;
    const azureId = skills.find((skill) => skill.name == "Azure")?.id || 1;
    const googlecloudId = skills.find((skill) => skill.name == "Google Cloud")?.id || 1;

    await prisma.project.create({
        data: {
                image: "https://thumbs2.imgbox.com/60/c6/6tuiQjhQ_t.png",
                image_alt: "Vagrant project with multiple services",
                title: "Java application with services using Vagrant",
                description: "Java application hosted locally with Vagrant, using MySQL with Memcached, RabbitMQ, Tomcat server for the java app, and using Nginx as a load balancer of the application and end users.",
                category_id: devopsId,
                skill: {
                    connect: [
                        { id: javaId },
                        { id: vagrantId },
                        { id: rabbitmqId },
                        { id: tomcatId },
                        { id: memcachedId },
                        { id: mysqlId },
                        { id: nginxId },
                        { id: virtualboxId }
                    ]
                }
            },
            include: {
                skill: true,
            }
    })

    await prisma.project.create({
        data: {
            image: "https://thumbs2.imgbox.com/f1/36/GcQ6MkUV_t.png",
            image_alt: "NextJS 13 project with client and server side rendering",
            title: "NextJS 13 Portfolio for a Software Developer profile",
            description: "NextJS 13 application that uses client and server side rendering hosted in Vercel. This is my portfolio webpage, I'm using TailwindCSS and its responsive! I have a PostgreSQL database hosted in elephantSQL.com.",
            category_id: webId,
            skill: {
                connect: [
                    { id: nextjsId },
                    { id: postgresqlId },
                    { id: tailwindcssId },
                ]
            }
        },
            include: {
                skill: true,
            }
    })

    await prisma.project.create({
        data: {
            image: "https://thumbs2.imgbox.com/c8/36/S6ZNtqPm_t.png",
            image_alt: "Automation Tool to Pre Scale testing with groups, applications for Azure",
            title: "Automation Tool to prepare Azure workspace for scale testing",
            description: "Automation tool that prepares a workspace in Azure with thousands of groups, randomly assign users to groups and create applications and get their key-secret values in a csv. If you want to do scale testing in Azure, this tool can help you set up all of that in just a few hours. This tools uses python requests combined with multithreading.",
            category_id: automationId,
            skill: {
                connect: [
                    { id: azureId },
                    { id: pythonId },
                ]
            }
        },
            include: {
                skill: true,
            }
    })

    res.status(200).json({ name: "nice" })
}