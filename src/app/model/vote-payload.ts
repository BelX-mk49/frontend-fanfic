import {VoteType} from './vote-type';
import {User} from './user';

export class VotePayload {
    voteType: VoteType;
    postId: number;
    user: User;
}
