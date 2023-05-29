import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Comment } from 'src/app/interface/comment';
import { CommentService } from 'src/app/service/comment.service';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.scss']
})
export class NewCommentComponent implements OnInit {
  comment:Comment={};
  subscription:Subscription= new Subscription;
  newComment!: FormGroup;
  constructor(public http:HttpService,public commentSer:CommentService) { }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  ngOnInit(): void {
    this.newComment=new FormGroup({
      name:new FormControl(),
      email:new FormControl(),
      tel:new FormControl(),
      yourComment:new FormControl()
    })

  }
  onSubmit(){
    this.comment=this.newComment.value;
    this.comment.name=this.newComment.controls['name'].value;
    this.comment.yourComment=this.newComment.controls['yourComment'].value;
      this.subscription=this.http.addComment(this.comment).subscribe((data)=>{
      },(err)=>{
        console.log("error");
      })
    alert("נוסף בהצלחה")
    this.commentSer.setTitle("תודה שהגבת ,הינך זכאי למתנה")

  }

}
