const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.getProfile = async (req, res) => {

  const id = Number(req.params.id);

  const profile = await prisma.user.findUnique({

    where: {
      id
    },

    include: {

      posts: {

        include: {

          likes: true,

          comments: {
            include: {
              user: true
            }
          }

        },

        orderBy: {
          createdAt: "desc"
        }

      },

      followers: {
        where: {
          status: "ACCEPTED"
        }
      },

      following: {
        where: {
          status: "ACCEPTED"
        }
      }

    }

  });

  res.json(profile);

};

exports.updateBio = async (req, res) => {

  const { bio } = req.body;

  const user = await prisma.user.update({

    where: {
      id: req.user.id
    },

    data: {
      bio
    }

  });

  res.json(user);

};