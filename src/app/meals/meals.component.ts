import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { MealnavComponent } from "../mealnav/mealnav.component";

@Component({
  selector: 'app-meals',
  imports: [NavbarComponent, MealnavComponent],
  templateUrl: './meals.component.html',
  styleUrl: './meals.component.css'
})
export class MealsComponent {

}
