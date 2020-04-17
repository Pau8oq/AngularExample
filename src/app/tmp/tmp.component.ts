import {Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'tmp-comp',
    templateUrl: './tmp.component.html',
    styleUrls: ['./tmp.component.scss']
})
export class TmpComponent {

    id: number;
    title = "tmp-component form source"
    private subscription: Subscription;
    //https://metanit.com/web/angular2/7.3.php
    constructor(private activeRoute: ActivatedRoute){
        //this.id = activeRoute.snapshot.params['id'];
        this.subscription = activeRoute.params.subscribe(params=>this.id=params['id']);

    }
}