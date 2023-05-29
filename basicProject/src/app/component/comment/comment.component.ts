import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Comment } from 'src/app/interface/comment';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
comments:Array<Comment>=[];
subscription:Subscription= new Subscription;
  constructor(public route:Router,public http:HttpService) {

   }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
ngOnInit(): void {
    this.subscription=this.http.getAllComments().subscribe((data)=>{
      this.comments=data;
      },(err)=>{
      console.log("error");
    })
  }
  newCommentForm(){
    this.route.navigate(['/newComment'])
  }
  addLike(id:any){
    this.subscription=this.http.addLike(id).subscribe((data)=>{
      this.comments=data;
      },(err)=>{
      console.log("error");
    })
  }
  maxLike(){
    let max=0;
    this.comments.forEach(element => {
      if(element.like!=null&& element.like>max)
        max=element.like
    });
    return max;
  }
}
