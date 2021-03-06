import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {VotePayload} from '../../model/vote-payload';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  constructor(private http: HttpClient) { }

  vote(votePayload: VotePayload): Observable<any> {
    return this.http.post('https://backend-fanfic.herokuapp.com/api/votes/', votePayload);
  }
}
