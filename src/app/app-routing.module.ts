import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HeroesComponent } from './heroes/heroes.component';
import { RegistrationComponent } from './registration/registration.component';
import { SecurityComponent } from './security/security.component';
import { CheckboxGroupComponent } from './checkbox-group/checkbox-group.component';

const routes: Routes = [
{path:'', component:HomeComponent},
{path:'registration', component:RegistrationComponent},
{path:'login', component:LoginComponent},
{path:'heroes', component:HeroesComponent},
{path:'security', component:SecurityComponent},
{path:'ch', component:CheckboxGroupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
