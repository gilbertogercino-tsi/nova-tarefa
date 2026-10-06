import { Component } from '@angular/core';
import { Situacao } from './situacao';

@Component({
  selector: 'app-media-parcial',
  standalone: true,
  imports: [], // Mantive vazio como estava no seu código
  templateUrl: './media-parcial.html',
  styleUrl: './media-parcial.scss',
})
export class MediaParcial {
  mediaParcial: number | undefined;
  situacao: Situacao;
  mensagemSituacao: string = ''; // Variável para mostrar o texto na tela

  constructor() {
    this.mediaParcial = undefined;
    this.situacao = 'CURSANDO';
  }

  calcularMediaParcial(bim1: number, bim2: number) {
    if (bim1 >= 0 && bim2 >= 0) {
      this.mediaParcial = (bim1 * 2 + bim2 * 3) / 5;
      
      if (this.mediaParcial >= 60) {
        this.situacao = 'APROVADO';
        this.mensagemSituacao = 'Aprovado(a)';
      } else if (this.mediaParcial >= 10) {
        this.situacao = 'AVALIACAO_FINAL';
        this.mensagemSituacao = 'Avaliação final';
      } else {
        this.situacao = 'REPROVADO';
        this.mensagemSituacao = 'Reprovado(a)';
      }
    } else {
      this.mediaParcial = undefined;
      this.situacao = 'CURSANDO';
      this.mensagemSituacao = '';
    }
  }
}