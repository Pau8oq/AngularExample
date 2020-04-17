import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemStatComponent } from './item.stat/item.stat.component';
import { TmpComponent } from './tmp/tmp.component';
import { HttpComponent } from './http/http.component';
import { AboutComponent } from './about/about.component';
import { ItemDetailComponent } from './item.detail/item.detail.component';
import { ItemComponent } from './item/item.component';


const itemRoutes: Routes= [
   { path: 'detail', component: ItemDetailComponent},
   { path: 'stat', component: ItemStatComponent}
];
const  appRoutes: Routes = [
   {path: '', component: AppComponent},
   {path: 'about', component: AboutComponent},
   {path: 'tmp/:id', component:TmpComponent},
   {path: 'item/:id', component: ItemComponent},
   {path: 'item/:id', component: ItemComponent, children: itemRoutes},
   {path: '**', redirectTo: '/'}
];
//як правило в кінці  вказуєм  шлях до сторінки 404


@NgModule({
   declarations: [
      AppComponent,
      TmpComponent,
      HttpComponent,
      ItemStatComponent,
      ItemDetailComponent,
      ItemComponent
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
