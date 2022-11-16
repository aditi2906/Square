import { response } from "express";
import UserModel from "../models/userModel.js";
import bcrypt from "bcrypt";

export const getUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await UserModel.findById(id);
    if (user) {
      const { password, ...otherDetails } = user._doc;
      res.status(200).json(otherDetails);
    } else {
      res.status(404).json("no user found");
    }
  } catch (error) {
    response.status(500).json(error);
  }
};

export const updateUser = async (req, res) => {
  const id = req.params.id;
  // console.log("Data Received", req.body)
  const { curr, currentUserAdmin, password } = req.body;

  if (curr == id || currentUserAdmin) {
    try {
      if (password) {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(password, salt);
      }

      const user = await UserModel.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("access denied");
  }
};

// export const deleteUser = async (req, res) => {
//   const id = req.params.id;

//   const { currentUserId, currentUserAdmin } = req.body;

//   if (currentUserId == id || currentUserAdmin) {
//     try {
//       await UserModel.findByIdAndDelete(id);
//       res.status(200).json("User Deleted Successfully!");
//     } catch (error) {
//       res.status(500).json(err);
//     }
//   } else {
//     res.status(403).json("Access Denied!");
//   }
// };

// Follow a User
// changed
export const followUser = async (req, res) => {
  const id = req.params.id;
  const { currentUserId } = req.body;
  if (currentUserId == id) {
    res.status(403).json("you cannot follow yourself");
  } else {
    try {
      const followUser = await UserModel.findById(id);
      const followingUser = await UserModel.findById(currentUserId);

      if (!followUser.followers.includes(currentUserId)) {
        await followUser.updateOne({ $push: { followers: currentUserId } });
        await followingUser.updateOne({ $push: { following: id } });
        res.status(200).json("User followed!");
      } else {
        res.status(403).json("Already following!!");
      }
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }
};
export const unfollowUser = async (req, res) => {
  const id = req.params.id;
  const { _id } = req.body;

  if (_id === id) {
    res.status(403).json("Action Forbidden");
  } else {
    try {
      const unFollowUser = await UserModel.findById(id);
      const unFollowingUser = await UserModel.findById(_id);

      if (unFollowUser.followers.includes(_id)) {
        await unFollowUser.updateOne({ $pull: { followers: _id } });
        await unFollowingUser.updateOne({ $pull: { following: id } });
        res.status(200).json("Unfollowed Successfully!");
      } else {
        res.status(403).json("You are not following this User");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
};

export const getAllUsers = async (req, res) => {
  try {
    let users = await UserModel.find();
    users = users.map((user) => {
      const { password, ...otherDetails } = user._doc;
      return otherDetails;
    });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
};
