import {User} from './user';

export class CommentPayload {
  postId: number;
  text: string;
  userName?: string;
  createdDate?: any;
  user: User;
}
