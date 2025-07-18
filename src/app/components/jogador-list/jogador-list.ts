
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

interface Jogador {
  _id?: string; 
  nome: string;
  posicao: string;
  clube: string; 
  numeroCamisa?: number; // Número do jogador (opcional)
  foto: string; // Foto do jogador (opcional, pode vir como URL ou ser um placeholder)
}

@Component({
  selector: 'jogador-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './jogador-list.html',
  styleUrls: ['./jogador-list.css'] // Adicione esta linha para vincular o CSS
})
export class JogadorList implements OnInit {
  jogadores: Jogador[] = []; // O array de jogadores diretamente da API

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Jogador[]>('http://localhost:4000/jogadores') // Supondo que a API retorna um array de Jogador
      .subscribe({
        next: (res) => {
          this.jogadores = res;
          // console.log('Jogadores carregados:', this.jogadores); // Para depuração
        },
        error: (err) => console.error('Erro ao carregar jogadores:', err)
      });
  }
}