import { Component } from "@angular/core";

@Component({
    selector: 'pipe-comp',
    templateUrl: './pipe.component.html'
})
export class PipeComponent{

    name:string = "vasyl Uhryn";
    birthday = new Date(1988, 3, 15);
}