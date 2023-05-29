import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Service } from 'src/app/interface/Service';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-more-details',
  templateUrl: './more-details.component.html',
  styleUrls: ['./more-details.component.scss']
})
export class MoreDetailsComponent implements OnInit {
  public ser:Service={};
  subscription:Subscription=new Subscription;
  constructor(public route : ActivatedRoute,public http:HttpService) {
    route.params.subscribe((p)=>{
      let id = p["id"];
      this.subscription=http.getServiceById(id).subscribe(service=>{
        this.ser=service;
      })
      }
    )
}
ngOnDestroy(): void {
  this.subscription.unsubscribe();
}
  ngOnInit(): void {
  }

}
