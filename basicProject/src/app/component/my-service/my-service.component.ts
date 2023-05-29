import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Service } from 'src/app/interface/Service';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-my-service',
  templateUrl: './my-service.component.html',
  styleUrls: ['./my-service.component.scss']
})
export class MyServiceComponent implements OnInit {
  ChosenId:any;
  Services: Array<Service>=[];
  subscription:Subscription= new Subscription;
  constructor(public route:Router,public http:HttpService) { }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  ngOnInit(): void {
    this.subscription=this.http.getAllServices().subscribe((data)=>{
      this.Services=data;
    },(err)=>{
      console.log("error");
    })
  }
  moreDetails(id:any){
    this.ChosenId=id;
    this.route.navigate(['/service/moreDetails/'+id])
  }
}
