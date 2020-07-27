import {Role} from './role';

export class User {
  userId: number;
  username: string="";
  password: string="";
  email: string="";
  role: Role;
  active: boolean;
  token: string="";
}
