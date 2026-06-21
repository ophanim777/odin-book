const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.sendRequest = async (req, res) => {

  try {

    const followingId = Number(req.params.id);

    if (followingId === req.user.id) {
      return res.status(400).json({
        message: "Cannot follow yourself"
      });
    }

    const existing = await prisma.follow.findUnique({
      where: {
        followerId_followingId: {
          followerId: req.user.id,
          followingId
        }
      }
    });

    if (existing) {
      return res.status(400).json({
        message: "Request already exists"
      });
    }

    const follow = await prisma.follow.create({
      data: {
        followerId: req.user.id,
        followingId
      }
    });

    res.status(201).json(follow);

  } catch (err) {

    res.status(500).json({
      message: "Server error"
    });

  }

};

exports.acceptRequest = async (req, res) => {

  try {

    const id = Number(req.params.id);

    const follow = await prisma.follow.update({
      where: {
        id
      },
      data: {
        status: "ACCEPTED"
      }
    });

    res.json(follow);

  } catch (err) {

    res.status(500).json({
      message: "Server error"
    });

  }

};

exports.rejectRequest = async (req, res) => {

  try {

    const id = Number(req.params.id);

    await prisma.follow.delete({
      where: {
        id
      }
    });

    res.json({
      message: "Request rejected"
    });

  } catch (err) {

    res.status(500).json({
      message: "Server error"
    });

  }

};