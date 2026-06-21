const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.getUsers = async (req, res) => {

  const users = await prisma.user.findMany({

    where: {

      NOT: {
        id: req.user.id
      }

    },

    select: {

      id: true,

      firstName: true,

      lastName: true,

      avatar: true,

      bio: true

    }

  });

  res.json(users);

};

exports.getUser = async (req, res) => {

  const id = Number(req.params.id);

  const user = await prisma.user.findUnique({

    where: {
      id
    },

    include: {

      posts: true,

      followers: true,

      following: true

    }

  });

  res.json(user);

};