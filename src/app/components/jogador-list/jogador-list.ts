import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JogadorService, Jogador } from '../../services/jogador';

@Component({
  selector: 'jogador-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Lista de Jogadores</h2>
    <ul *ngIf="jogadores.length; else loading">
      <li *ngFor="let jogador of jogadores">
        <img [src]="jogador.foto" alt="{{ jogador.nome }}" width="100" style="border-radius: 8px; margin-right: 10px;">
        <strong>{{ jogador.nome }}</strong> - {{ jogador.posicao }} ({{ jogador.clube }})
      </li>
    </ul>
    <ng-template #loading>
      <p>Carregando jogadores...</p>
    </ng-template>
  `
})
export class JogadorList {
  jogadores: Jogador[] = [];
  private jogadorService = inject(JogadorService);

  constructor() {
    this.jogadorService.getJogadores().subscribe({
      next: (res: Jogador[]) => this.jogadores = res,
      error: (err: unknown) => {
        console.error('Erro ao carregar jogadores:', err);
        // Se quiser, pode adicionar mais tratamento aqui
      }
    });
  }
}
