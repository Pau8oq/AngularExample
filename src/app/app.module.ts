import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TmpComponent } from './tmp/tmp.component';
import { HttpComponent } from './http/http.component';
import { AboutComponent } from './about/about.component';


const  appRoutes: Routes = [
   {path: '', component: AppComponent},
   {path: 'about', component: AboutComponent},
   {path: 'tmp/:id', component:TmpComponent},
   {path: '**', redirectTo: '/'}
];
//як правило в кінці  вказуєм  шлях до сторінки 404


@NgModule({
   declarations: [
      AppComponent,
      TmpComponent,
      HttpComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      RouterModule.forRoot(appRoutes)
   ],
      providers: [],
      bootstrap: [
         AppComponent
      ]
})
export class AppModule { }
