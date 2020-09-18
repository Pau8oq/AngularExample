import { Component } from "@angular/core";
import { User } from '../models/user';
import { HttpService } from '../services/http.service';

@Component({
    selector: 'pipe-comp',
    templateUrl: './pipe.component.html',
    providers: [HttpService]
})
export class PipeComponent{

    da:any;
    users: User[] = [];
    name:string = "vasyl Uhryn";
    birthday = new Date(1988, 3, 15);

    constructor(private httpService: HttpService){

    }

    changeName():void{

        this.httpService.getUser().subscribe(data=>{
            this.users = data;
            this.name = data[0].name;
            console.log(this.users);
        });
        //this.name =  'uhryn Stepan';
    }
}