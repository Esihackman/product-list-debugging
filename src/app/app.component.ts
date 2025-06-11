import { Component } from '@angular/core';
import dessertData from '../../public/data.json'; 
import { AddToCartComponent } from "./components/add-to-cart/add-to-cart.component";

// interfaces
interface Dessert {
  image: DessertImages;
  name: string;
  category: string;
  price: number;
}

interface DessertImages {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
}

@Component({
  selector: 'app-root',
  imports: [AddToCartComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] // <-- fixed plural
})
export class AppComponent {
  title = 'Product list';
  desserts: Dessert[] = dessertData as Dessert[];

  constructor() { }
}
