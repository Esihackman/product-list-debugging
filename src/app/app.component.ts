import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DessertService, Dessert } from './services/dessert.service';
import { AddToCartComponent } from './components/add-to-cart/add-to-cart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AddToCartComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  desserts: Dessert[] = [];

  constructor(private dessertService: DessertService) {}

  ngOnInit(): void {
    this.dessertService.getDesserts().subscribe(data => {
      this.desserts = data;
    });
  }
}
