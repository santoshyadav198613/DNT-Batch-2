import { Component, OnInit, ViewChild, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { PostsService } from './services/posts.service';
import { Observable, EMPTY } from 'rxjs';
import { IPosts } from './services/Iposts';
import { catchError } from 'rxjs/operators';
import { PostHeaderComponent } from './post-header/post-header.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit, AfterViewInit {

  // @ViewChild(PostHeaderComponent, { static: true }) headerComponent: PostHeaderComponent;
  @ViewChildren(PostHeaderComponent) headerChildren: QueryList<PostHeaderComponent>;
  postList$: Observable<IPosts[]>;

  constructor(private postService: PostsService) { }

  ngOnInit() {
    // this.headerComponent.title = "Post List";
    this.postList$ = this.postService.posts$.pipe(
      catchError(err => {
        console.log(err);
        return EMPTY;
      }
      )
    );
  }


  ngAfterViewInit() {
    // this.headerChildren.changes.subscribe(data=> console.log(data));
    this.headerChildren.forEach(header => header.title = 'Post List');
  }

}
