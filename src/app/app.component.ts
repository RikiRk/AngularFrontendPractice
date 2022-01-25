import { Component } from '@angular/core';
import {Post} from './post/post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Storedposts:Post[] = [];
  
  onAddpost(post:any){
    this.Storedposts.push(post);
  }
  constructor(public router: Router) {}
}

