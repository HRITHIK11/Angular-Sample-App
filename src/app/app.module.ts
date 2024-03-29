import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { BikeComponent } from './component/bike/bike.component';
import { StarRatingComponent } from '../app/component/star-rating/star-rating.component';
import { LoginComponent } from './component/login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StarRatingComponent,
    BikeComponent,
    LoginComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
