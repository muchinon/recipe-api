import { UserModel } from "../models/user.js";
import bcrypt from "bcrypt";

export const register = async (req, res, next) => {
  try {
    // Hash user password
    const hashPassword = bcrypt.hashSync(req.body.password, 10);
    // Create a new user
    const registeredUser = await UserModel.create({
      ...req.body,
      password: hashPassword,
    });

    // Generate a session
    req.session.user = { id: registeredUser.id };
    // Return Response
    res.status(201).json("User has registered succesfully");
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  // FInd user using unique identfier
  const loginUser = await UserModel.findOne({
    email: req.body.email,
  });
  //   if (!loginUser) {
  //     return res.status(401).json("No user found");
  //   }
  if (!loginUser) {
    res.status(401).json("No user found");
  } else {
    // Verify their password
    const correctPassword = bcrypt.compareSync(
      req.body.password,
      loginUser.password
    );
    if (!correctPassword) {
      res.status(401).json("Invalid Credentials");
    } else {
      // Generate a session
      req.session.user = { id: loginUser.id };
      // Return response
      res.status(200).json("Login succcessful");
    }
  }
};

export const logout = async (req, res, next) => {
  try {
    // Destroy your session
    await req.session.destroy();
    // Return response
    res.status(200).json("Logout successful");
  } catch (error) {
    next(error);
  }
};

export const profile = async (req, res, next) => {
  try {
    // Find a user by id
    const user = await UserModel.findById(req.session.user.id).select({
      password: false,
    });
    // Return response
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
