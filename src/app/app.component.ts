import { Component } from '@angular/core';
import { ListaComponent } from './components/lista/lista.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListaComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ListProductos';
}
