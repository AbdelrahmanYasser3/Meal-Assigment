import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MealsComponent } from './meals/meals.component';
import { TeamComponent } from './team/team.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SeafoodComponent } from './seafood/seafood.component';
import { PastaComponent } from './pasta/pasta.component';
import { BreakfastComponent } from './breakfast/breakfast.component';

export const routes: Routes = [
    {path:'', redirectTo:'Home', pathMatch:'full'},
    {path:'Home', component:HomeComponent , title:'Home'},
    {path:'About', component:AboutComponent , title:'About'},
    {path:'Contact', component:ContactComponent , title:'Contact'},
    {path:'Meals', component:MealsComponent , title:'Meals'},
    {path:'Team', component:TeamComponent , title:'Team'},
    {path:'Meals/Seafood', component:SeafoodComponent , title:'Seafood'},
    {path:'Meals/Pasta', component:PastaComponent , title:'Pasta'},
    {path:'Meals/Braekfast', component:BreakfastComponent , title:'Braekfast'},
    {path:'**', component:NotfoundComponent , title:'NotFound'}
];