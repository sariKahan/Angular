import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/interface/person';

@Component({
  selector: 'app-call-us',
  templateUrl: './call-us.component.html',
  styleUrls: ['./call-us.component.scss']
})
export class CallUsComponent implements OnInit {
  person:Person={};
  constructor() { }

  ngOnInit(): void {
  }
onSubmit(){
  alert("ההודעה נשלחה בהצלחה")
}
}
