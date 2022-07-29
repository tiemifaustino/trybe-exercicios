import { Request, Response } from "express";
import UserService from "../services/user.service";

class UserController {
  private service: UserService;

  constructor() {
    this.service = new UserService();
  }
}