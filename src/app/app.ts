import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JogadorList } from './components/jogador-list/jogador-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [JogadorList],
  template: `
    <h1></h1>
    <jogador-list></jogador-list>
  `
})
export class App {}
