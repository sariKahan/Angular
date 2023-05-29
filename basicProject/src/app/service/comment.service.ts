import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor() { }
  private title$:BehaviorSubject<string>=new BehaviorSubject("בהוספת תגובה תיהיה זכאי למתנה");
setTitle(title:string){
  this.title$.next(title);
}
getTitle(){
  return this.title$;
}
}
