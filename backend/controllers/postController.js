const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.getTimeline = async (req, res) => {

  try {

    const posts = await prisma.post.findMany({

      include: {

        author: true,

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

    });

    res.json(posts);

  } catch (err) {

    res.status(500).json({
      message: "Server error"
    });

  }

};

exports.createPost = async (req, res) => {

  try {

    const { content } = req.body;

    const post = await prisma.post.create({

      data: {
        content,
        userId: req.user.id
      }

    });

    res.status(201).json(post);

  } catch (err) {

    res.status(500).json({
      message: "Server error"
    });

  }

};

exports.getPost = async (req, res) => {

  const id = Number(req.params.id);

  const post = await prisma.post.findUnique({

    where: {
      id
    },

    include: {

      author: true,

      likes: true,

      comments: {
        include: {
          user: true
        }
      }

    }

  });

  res.json(post);

};


exports.deletePost = async (req, res) => {

  const id = Number(req.params.id);

  await prisma.post.delete({

    where: {
      id
    }

  });

  res.json({
    message: "Post deleted"
  });

};