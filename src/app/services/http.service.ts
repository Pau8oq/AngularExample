import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { map, catchError, filter } from 'rxjs/operators';
import { User } from '../models/user';


@Injectable()
export class HttpService{

    constructor(private http:HttpClient){}

    getData(){
        return this.http.get('./assets/user.json');
    }

    getUser(): Observable<User[]>{
        return this.http.get('./assets/user2.json').pipe(map(data=>{
            let userList = data['userList'];
            let tempUsers = userList.map(function(user:any){
                return {name: user.userName, age: user.userAge};
            });
            var data1:User[];
            data1 = tempUsers.filter(d=>d.age >= 30);
            return data1;
        }));
    }

    //data at user2.json are not fitable  for user (userAge, userName where in user class just name, age)
    //У результата метода get() мы 
    //можем вызвать метод pipe(), который 
    //позволяет обработать результаты запроса. Для 
    //этого метод pipe в качестве первого параметра
    // принимает функцию обработки данных запроса.
    // В данном случае в роли такой функции выступает
    // оператор map, который преобразует результаты запроса в новые объекты.
    getwrongArrData(): Observable<User[]>{
        return this.http.get('./assets/user2.json').pipe(map(data=>{
            let userList = data['userList'];
            return userList.map(function(user:any){
                return {name: user.userName, age: user.userAge};
            });
        }),
         catchError(err=>{
             console.log(err);
             return throwError(err);
         }));
    }

    getSum(num1: number, num2: number){
        //return this.http.get('тут  повинен бути шлях до url метода сервера який оброить дані'+ 
        //+ ' /sum?num1=' + num1 +'&num2=' + num2);

        // const params = new HttpParams()
        // .set('num1', num1.toString())
        // .set('num2', num2.toString());
        // return this.http.get('http://localhost:3000/sum', {params});

        return  num1 + num2;
    }

    //взагаліто можна було б і не вказувати явно  тип Кий  повертається  з меиоду 
    //але  для  наглядності я вказав
    postData(user:User): Observable<object> {

        const body = {name: user.name, age:user.age};

        //можна задати різні  заголовки  в запит 
        const myHeaders = new HttpHeaders().set('Authorization','my-auth-token');

        return this.http.post('path to httpPost method', body);
        //або так якщо нам  всі  дані потрібно вдправляти
        // return this.http.post('path to httpPost method', user);
    }


}