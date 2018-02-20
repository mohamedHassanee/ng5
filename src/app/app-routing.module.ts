import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HeroesComponent } from './heroes/heroes.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
{path:'', component:HomeComponent},
{path:'registration', component:RegistrationComponent},
{path:'login', component:LoginComponent},
{path:'heroes', component:HeroesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
