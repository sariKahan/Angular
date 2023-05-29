import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { MyServiceComponent } from './component/my-service/my-service.component';
import { MoreDetailsComponent } from './component/more-details/more-details.component';
import {HttpClientModule} from '@angular/common/http';
import { CallUsComponent } from './component/call-us/call-us.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommentComponent } from './component/comment/comment.component';
import { NewCommentComponent } from './component/new-comment/new-comment.component';
import { NamePipe } from './pipes/name.pipe';
import { ColorDirective } from './directives/color.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyServiceComponent,
    MoreDetailsComponent,
    CallUsComponent,
    CommentComponent,
    NewCommentComponent,
    NamePipe,
    ColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
