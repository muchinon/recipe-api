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
    // Return Response
    res.status(201).json("User has registered succesfully");
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {};

const logout = async () => {};

const profile = async () => {};
