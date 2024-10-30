import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const result = await prisma.post.findMany();

//   const findFirst = await prisma.post.findFirstOrThrow({
//     where: {
//       authorName: true,
//     },
//   });

  const findUnipe = await prisma.post.findUniqueOrThrow({
    where : {
        id : 5
    }
  })

  console.log(findUnipe);
};
main();
