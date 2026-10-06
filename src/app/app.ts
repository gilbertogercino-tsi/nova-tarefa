import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MediaParcial } from './media-parcial/media-parcial';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MediaParcial],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  title = 'projeto-media';
}