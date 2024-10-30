import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


const Delete = async () =>{
    const res = await prisma.post.deleteMany({
        where : {
            title: "This is Title...2!"
        }
    })
};
Delete();