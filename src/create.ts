import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


const main = async () =>{
    // create one
    // const result = await prisma.post.create({
    //     data: {
    //         title : "This is Title...2!",
    //         content: "This is Content..2...",
    //         authorName : "Kamrul Hassan...2"
    //     }
    // })

// create meny
    const result = await prisma.post.createMany({
        data : [
            {
                title : "Title 1",
                content: "Content 1",
                authorName : "Name --1"
            },
            {
                title : "Title 2",
                content: "Content 2",
                authorName : "Name --2"
            },
            {
                title : "Title 3",
                content: "Content 3",
                authorName : "Name --3"
            },
            {
                title : "Title 4",
                content: "Content 4",
                authorName : "Name --4"
            }
        ]
    })

    console.log(result)
};
main();