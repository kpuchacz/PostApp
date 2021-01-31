import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import {AppComponent} from './app.component';
import { PostItemComponent } from './component/post-item/post-item.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PostItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
