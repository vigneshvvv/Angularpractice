import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  styleUrls: ['./childcomponent.component.css']
})
export class ChildcomponentComponent implements OnInit {

  date=new Date();
  myname="vignesh";
  mynumber=123456.558;
  mycurrency=1000.2;
  obj={Name:'vignesh', age:'10'};
  arr=[1,2,3,4,5,6,7,8];
  users=[{Name:'vignesh', age:'10'},{Name:'kumar', age:'20'},{Name:'gopi', age:'10'}];
  value="";
  @Input() nameofinput: string;

  // adduser(value: any){
  //   this.users.push({Name:value, age:'20'});
  // }

  adduser(value: any){
    this.users= [...this.users,{Name:value, age:'20'}];
  }

  constructor() { }

  ngOnInit(): void {
  }

}
