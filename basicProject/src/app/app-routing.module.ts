import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallUsComponent } from './component/call-us/call-us.component';
import { CommentComponent } from './component/comment/comment.component';
import { HomeComponent } from './component/home/home.component';
import { MoreDetailsComponent } from './component/more-details/more-details.component';
import { MyServiceComponent } from './component/my-service/my-service.component';
import { NewCommentComponent } from './component/new-comment/new-comment.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"service",component:MyServiceComponent,children:[
    {path:"moreDetails/:id",component:MoreDetailsComponent},
  ]},
  {path:"callUs",component:CallUsComponent},
  {path:"comment",component:CommentComponent},
  {path:"newComment",component:NewCommentComponent},
  {path:"**",component:MyServiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
