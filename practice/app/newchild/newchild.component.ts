import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-newchild',
  templateUrl: './newchild.component.html',
  styleUrls: ['./newchild.component.css']
})
export class NewchildComponent implements OnInit {
  message="newchild message"

  @Input() childmessage: string;

  constructor() { }

  countervalue: any=0;
   @Output() countervaluechanged: EventEmitter<number> = new EventEmitter()

  ngOnInit(): void {
  }

  increasecount(){
    this.countervalue++;
    this.countervaluechanged.emit(this.countervalue)

  }

  decreasecount()
  {
    this.countervalue--;
    this.countervaluechanged.emit(this.countervalue)
  }

}
