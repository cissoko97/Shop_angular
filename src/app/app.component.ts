import { Component, OnInit, OnDestroy } from '@angular/core';
import { nearer } from 'q';
import { Subscription } from 'rxjs';
import { Line } from './models/line.entity';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  lines: Line[] = [];
  line = new Line();
  productSubscription: Subscription;


  constructor(private productService: ProduitService) {}

  ngOnDestroy(): void {
    this.productSubscription.unsubscribe();
   }
   
   ngOnInit(): void {
     this.productSubscription = this.productService.productsSubject.subscribe(lines => {
       this.lines = lines;
     });
     this.productService.emitSubject();
   }

  public orderPrice(): number {
    let price = 0;
    this.lines.forEach(line => price += line.totalPrice());
    return price;
  }

  public addLine(line: Line) {
    this.productService.addLine(line);
  }

  public removeLine(id: number) {
    this.productService.removeLine(id);
  }
}
