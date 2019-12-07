import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { HttpClientModule } from '@angular/common/http';
import { PostHeaderComponent } from './post-header/post-header.component';


@NgModule({
  declarations: [PostsComponent, PostHeaderComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    HttpClientModule
  ]
})
export class PostsModule { }
