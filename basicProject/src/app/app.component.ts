import { Component } from '@angular/core';
import { CommentService } from './service/comment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'basicProject';
  myTitle:string='';
  constructor(public ser:CommentService){

  }
  ngOnInit(): void {

    //register to get a-synchronize value=subject;
   this.ser.getTitle().subscribe((t)=>{
    this.myTitle=t;
   })
}
}
