import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, observable, Subscriber } from 'rxjs';
import { Appservice } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'myapp';
  count=0;
  details: any=null;
  newtitle = 'angular';
  parentmessage = "hithisisparentclass";
  countnew=0;

  

  constructor(public router:Router, public appservice:Appservice){
    this.appservice.settodo(2)
    .subscribe(data => this.details = data)

    // this.appservice.posttodo({
    //   "userId": 1,
    //   "id": 3,
    //   "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    //   "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligend"})
    // .subscribe(data  => console.log(data))


    //using of the observable is given below
    const test$ = new Observable(subscriber => {
      subscriber.next("1");
      subscriber.next('2');
      subscriber.next('3');
      subscriber.complete();
      subscriber.next('4');
    });

    test$.subscribe(
      x => {console.log(x);
      },

      // complete =>{console.log(complete)}
    )

    test$.subscribe(x => {console.log('2nd' , x)})

  }

  print(event: any ){

    console.log(event)
    this.title=event.value;
  }

  loadtest(){
    this.router.navigateByUrl('child')
  }

  loadlogin(){
    this.router.navigateByUrl('login')
  }

  increasecount(){
    this.count++;

  }

  decreasecount()
  {
    this.count--;
  }

  updatecount(countervalue: number)
  {
    this.countnew=countervalue;
  }
}


