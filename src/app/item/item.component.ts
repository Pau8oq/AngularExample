import { Component } from "@angular/core";
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'item',
    template: `<h2>Item {{id}} </h2> 
            <router-outlet></router-outlet>`
})
export  class ItemComponent{

    id:number;

    private routeSubscription: Subscription;

    constructor(private route: ActivatedRoute) {
        this.routeSubscription = route.params.subscribe(params=> this.id=params['id']);
    }

}