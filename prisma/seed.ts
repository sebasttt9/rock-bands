import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

    async function main() {
    const post1 = await prisma.rockBands.upsert({
  where: { name: "Foo" }, 
        update: {},
        create: {  
        name: "Foo Fighters",
        members: "Dave Grohl, Pat Smear, Nate Mendel, Chris Shiflett, Rami Jaffee, Josh Freese" ,
        cityfundation: "Seattle, Washington, United States",
        tour: "US STADIUMS",
        bestsellingalbum: "WASTING LIGHT"
        },
    });  

    const post2 = await prisma.rockBands.upsert({
        where: { name: "Pink" }, 
        update: {},
        create: {  
        name: "Pink Floyd",
        members: "David Gilmour, Nick Mason" ,
        cityfundation: "London",
        tour: "Spain, Madrid",
        bestsellingalbum: "The dark side of the moon"
        },
    });
    console.log({ post1, post2});
}
main()
.catch((e) => {
    console.error(e);
    process.exit(1);
})
.finally(async () =>    {
    await prisma.$disconnect();
})