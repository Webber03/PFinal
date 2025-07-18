import { Routes } from '@angular/router';
import { JogadorList } from './components/jogador-list/jogador-list';
import { Login } from './components/login/login';
import { CadastroComponent } from './components/cadastro/cadastro';

export const routes: Routes = [
{ path: '', redirectTo: 'login', pathMatch: 'full' },
{ path: 'login', component: Login },
{ path: 'home', component: JogadorList },
{ path: 'cadastro', component: CadastroComponent }


];
