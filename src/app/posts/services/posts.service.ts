import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPosts } from './Iposts';
import { shareReplay, tap, filter } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  posts$ = this.http.get<IPosts[]>('https://jsonplaceholder.typicode.com/posts').pipe(
    tap((data) => console.log(data)),
    shareReplay(1)
  );


}
