import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() supermessage: string;

  constructor() { }

  ngOnInit(): void {
  }

  // function handleSubmit(event: any) {

  //   event.preventDefault();
  //   const data = new FormData(event.target);

  //   const value = Object.fromEntries(data.entries());
  //   value.topic = data.getAll("topic");
  //   console.log({value});
    
  // }
  // submit() {
  //   let resource = JSON.stringify(this.form.value);
  
  //   console.log('Add Button clicked: ' + resource);
  
  //   this.service.create(resource)
  //     .subscribe(response => console.log(response));
  // }

}
