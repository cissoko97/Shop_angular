import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Line } from '../app/models/line.entity';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  lines: Line[] = [
    new Line(1, 'ordinateur', 15000, 12),
    new Line(2, 'Souris', 2000, 5),
  ];

  productsSubject = new Subject<Line[]>();

  emitSubject() {
    this.productsSubject.next(this.lines.slice());
  }

  public addLine(line: Line) {
    line.id = this.lines.length + 1;
    this.lines.push(line);
    this.emitSubject();
  }

  public removeLine(id: number) {
    this.lines = this.lines.filter(line => line.id !== id);
    this.emitSubject();
  }


  constructor() { }
}
