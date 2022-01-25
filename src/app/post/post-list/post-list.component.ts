import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Post } from "../post.model";
import {PostService } from "../post.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  @Input() posts: Post[] = [];
  private postSub = new Subscription();
  // postService: PostService;

  constructor(public postService: PostService) {}
   ngOnInit(){ 
     this.posts=this.postService.getPosts();
     this.postService.getPostUpdate().subscribe((post: Post[])=>{

      this.posts = post;

     });
   }
   
   ngOnDestroy(){
     this.postSub.unsubscribe();
   }
}
 