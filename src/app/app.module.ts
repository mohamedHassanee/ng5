import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HeroesComponent } from './heroes/heroes.component';
import { SecurityComponent } from './security/security.component';
import { HttpClientModule } from '@angular/common/http';
import {SecurityService} from './security/security.service';
import {XhrInterceptor} from './xhr-interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CheckboxGroupComponent } from './checkbox-group/checkbox-group.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrationComponent,
    LoginComponent,
    HeroesComponent,
    SecurityComponent,
    CheckboxGroupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, ReactiveFormsModule
  ],
  providers: [SecurityService, { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
