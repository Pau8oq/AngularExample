import {Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { isNumber } from 'util';

@Component({
    selector: 'tmp-comp',
    templateUrl: './tmp.component.html',
    styleUrls: ['./tmp.component.scss']
})
export class TmpComponent {

    id: number;
    price: number;
    title = "tmp-component form source";
    

    private routeSubscription: Subscription;
    //https://metanit.com/web/angular2/7.3.php
    private querySubscription: Subscription;

    constructor(private route: ActivatedRoute){
        //this.id = activeRoute.snapshot.params['id'];
        this.routeSubscription = route.params.subscribe(params=>this.id=params['id']);

        //The plus (+params['id']) you are referring to is a standard javaScript operator that
        //tells the interpreter to convert the param result from whatever type it is (string) into a number
        this.querySubscription = route.queryParams.subscribe(queryParams =>
            {
                //проблема тут щоо якщо +true = 1
                //this.price=+queryParams['price'];
                if(Number(queryParams['price'])){
                    this.price=queryParams['price'];
                }
                else{
                    this.price = -1;
                }
                
            });
    }
}