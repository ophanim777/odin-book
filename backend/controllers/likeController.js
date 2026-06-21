const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.likePost = async (req, res) => {

  const postId = Number(req.params.postId);

  try {

    await prisma.like.create({

      data: {

        userId: req.user.id,

        postId

      }

    });

  } catch (err) {}

  res.json({
    message: "Post liked"
  });

};

exports.unlikePost = async (req, res) => {

  const postId = Number(req.params.postId);

  await prisma.like.delete({

    where: {

      userId_postId: {

        userId: req.user.id,

        postId

      }

    }

  });

  res.json({
    message: "Like removed"
  });

};