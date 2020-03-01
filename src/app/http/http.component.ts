import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from '../models/user';
import { HttpService } from '../services/http.service';


@Component({
    selector: 'my-http',
    templateUrl: './http.component.html',
    providers: [HttpService]
})
export class HttpComponent implements OnInit{
    
    user: User;
    users: User[] = [];
    error: any;

    number1: number;
    number2: number;
    done: boolean = false;
    sum: number;

    constructor(private httpClient: HttpClient, private httpService: HttpService){}

    //вызывается при инициализации компонента 
    ngOnInit(): void {
        //this.httpClient.get('./assets/user.json').subscribe((data:User)=> this.user = data);
        this.httpService.getData().subscribe((data:User)=>this.user=data);
        this.httpService.getwrongArrData().subscribe(
            data => this.users = data,
            error => {this.error = error.message; console.log(this.error)});
    }

    submit(){
        let result = this.httpService.getSum(this.number1, this.number2);
        this.done = true;
        this.sum = result;
        console.log('sum=' + this.sum);
    }

}