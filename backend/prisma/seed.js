const bcrypt = require("bcryptjs");
const { faker } = require("@faker-js/faker");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {

  const password =
    await bcrypt.hash("123456",10);

  for(let i=0;i<20;i++){

    await prisma.user.create({

      data:{

        firstName:
        faker.person.firstName(),

        lastName:
        faker.person.lastName(),

        email:
        faker.internet.email(),

        password,

        bio:
        faker.person.bio()

      }

    });

  }

}

main()
.then(async()=>{

await prisma.$disconnect();

})
.catch(async(err)=>{

console.log(err);

await prisma.$disconnect();

});

await prisma.user.create({

data:{

firstName:"Guest",

lastName:"User",

email:"guest@test.com",

password:hashedPassword

}

});