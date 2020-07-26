import {User} from '../../../model/user';

export class CreatePostPayload {
    postName: string;
    genreName?: string;
    url?: string;
    description: string;
    user: User;
}
