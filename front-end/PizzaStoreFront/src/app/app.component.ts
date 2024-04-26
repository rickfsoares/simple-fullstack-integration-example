import { Component, OnInit } from '@angular/core';
import { Pizza } from '../models/pizza';
import { PizzaService } from '../services/pizza.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PizzaStore';

  pizzaList: Array<Pizza> = []
  constructor(private pizzaService: PizzaService) {

  }

  ngOnInit() {
    this.showPizzas()
    this.pizzaService.getAll().subscribe(pizzas => {
      console.log('Pizzas:', pizzas);
      this.pizzaList = pizzas;
    });
  }

  showPizzas() {
    this.pizzaService.getAll().subscribe({
      next: (pizzas) => {
        this.pizzaList = pizzas;
      },
      error: (err) => {
        console.error("Faild to load pizzas", err);
      }
    });
  }
}
