import { Pool } from 'mysql2/promise';
import User from '../interfaces/user.interface';

class UserModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public getAll = async (): Promise<User[]> => {
    const sql = 'SELECT * FROM TypeScriptExpress.Users';
    const [result] = await this.connection.query(sql);
    return result as User[];
  }
}

export default UserModel;