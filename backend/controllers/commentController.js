const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.createComment = async (req, res) => {

  const postId = Number(req.params.postId);

  const comment = await prisma.comment.create({

    data: {

      content: req.body.content,

      postId,

      userId: req.user.id

    }

  });

  res.status(201).json(comment);

};


exports.deleteComment = async (req, res) => {

  const id = Number(req.params.id);

  await prisma.comment.delete({

    where: {
      id
    }

  });

  res.json({
    message: "Comment deleted"
  });

};