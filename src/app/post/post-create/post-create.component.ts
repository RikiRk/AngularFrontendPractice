import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Post} from "../post.model";
import { FormControl, FormGroup } from '@angular/forms';
import {PostService} from "../post.service";


@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent implements OnInit {
  
  @Output() postCreated = new EventEmitter<Post>();
  
  todoForm !: FormGroup ;

  onAddpost() {
    // console.log();
   
    this.postService.addpost(this.todoForm.value.title, this.todoForm.value.content)
    
  }
  constructor(private postService: PostService) {}

  ngOnInit(): void {

    this.todoForm = new FormGroup(
      {
        title: new FormControl(null),
        content: new FormControl(null)
      }
    );
  }
}
