import connection from "../models/connection";
import UserModel from "../models/user.model";
import User from "../interfaces/user.interface";

class UserService {
  public userModel: UserModel;

  constructor() {
    this.userModel = new UserModel(connection);
  }

  public async getAll(): Promise<User[]> {
    const users = await this.userModel.getAll();
    return users;
  }
}

export default UserService;