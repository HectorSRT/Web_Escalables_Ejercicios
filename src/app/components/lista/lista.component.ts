import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { DetallesComponent } from '../detalles/detalles.component';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule, DetallesComponent],
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Laptop',
      precio: 1200,
      disponibilidad: true,
      oferta: false,
      imagen:
        'https://www.costco.com.mx/medias/sys_master/products/h67/hbf/188081224646686.jpg',
    },
    {
      id: 2,
      name: 'Mouse',
      precio: 50,
      disponibilidad: true,
      oferta: true,
      imagen:
        'https://perfectchoice.me/cdn/shop/products/PC-045090_A02_1200x.png?v=1714779532',
    },
    {
      id: 3,
      name: 'Teclado',
      precio: 80,
      disponibilidad: false,
      oferta: false,
      imagen:
        'https://upload.wikimedia.org/wikipedia/commons/5/5a/Computer_keyboard_ES_layout.svg',
    },
    {
      id: 4,
      name: 'Monitor',
      precio: 250,
      disponibilidad: true,
      oferta: true,
      imagen:
        'https://tienda.ghia.com.mx/media/catalog/product/cache/a3b77e70e883b6269b66ce189da992d3/i/m/image-1731095377618.jpg',
    },
    {
      id: 5,
      name: 'Silla',
      precio: 300,
      disponibilidad: true,
      oferta: false,
      imagen:
        'https://i5.walmartimages.com/asr/dc6dbe4d-60a5-42ac-a8e2-c5f603c418d0.aff36093bf7825f187a2c49728977787.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
    },
    {
      id: 6,
      name: 'Webcam',
      precio: 90,
      disponibilidad: true,
      oferta: true,
      imagen:
        'https://dlcdnwebimgs.asus.com/gain/818d26a5-2d8b-49e3-8381-86fb5945d8cd/',
    },
    {
      id: 7,
      name: 'Disco Duro',
      precio: 120,
      disponibilidad: true,
      oferta: false,
      imagen:
        'https://cdn11.bigcommerce.com/s-lzp9z1nb0i/images/stencil/1280x1280/products/339/623/1B-DD2000__00775.1577202368.jpg?c=1',
    },
    {
      id: 8,
      name: 'Memoria RAM',
      precio: 150,
      disponibilidad: false,
      oferta: false,
      imagen:
        'https://uvn-brightspot.s3.amazonaws.com/assets/vixes/btg/tech.batanga.com/files/Porque-es-importante-la-memoria-RAM-2.jpg',
    },
    {
      id: 9,
      name: 'Fuente de Poder',
      precio: 200,
      disponibilidad: true,
      oferta: false,
      imagen:
        'https://sistemas.com/wp-content/uploads/ayudas/caract-Fuente-de-Poder.jpg',
    },
    {
      id: 10,
      name: 'Procesador',
      precio: 350,
      disponibilidad: true,
      oferta: true,
      imagen:
        'https://images.adsttc.com/media/images/55e6/7714/8450/b5e7/a600/08f4/medium_jpg/procesadores.jpg?1441167119',
    },
  ];

  selectedProduct: Product | null = null;

  selectProduct(product: Product) {
    this.selectedProduct = product;
  }
}
