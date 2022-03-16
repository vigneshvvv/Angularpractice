import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http"

@Injectable()

export  class Appservice{

    constructor(public http: HttpClient){

    }

    // settodo(todoid : number=2){
    //     return this.http.get(`https://jsonplaceholder.typicode.com/todos/${todoid}`);
    // }
//to get all the data from the api 
    settodo(data : any){
        return this.http.get(`https://jsonplaceholder.typicode.com/todos/`,data);
    }
    posttodo(data : any){
        return this.http.post(`https://jsonplaceholder.typicode.com/todos`, data);
    }

}   