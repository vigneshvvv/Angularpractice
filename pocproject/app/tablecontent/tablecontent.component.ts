import { Component, OnInit } from '@angular/core';
import { Appservice } from '../app.service';

@Component({
  selector: 'app-tablecontent',
  templateUrl: './tablecontent.component.html',
  styleUrls: ['./tablecontent.component.css']
})
export class TablecontentComponent implements OnInit {

  details: any="";

  constructor(public appservice:Appservice) {
    this.appservice.settodo(2)
    .subscribe(data => this.details = data)
   }

  ngOnInit(): void {
  }

}
