import { Routes } from '@angular/router';
import { LoginComponent} from './paginas/login/login.component'
import { RastreamentoComponent  } from './paginas/rastreamento/rastreamento.component';


export const routes: Routes = [
  
  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'rastreamento',
    component: RastreamentoComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }

];