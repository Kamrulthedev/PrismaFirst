import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const result = await prisma.post.create({
    data: {
      title: "This is Title...2!",
      content: "This is Content..2...",
      authorName: "Kamrul Hassan...2",
    },
  });
  console.log(result);
};
main();
