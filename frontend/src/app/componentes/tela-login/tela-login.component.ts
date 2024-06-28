import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';  
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tela-login',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent {
  private api_url = 'http://localhost:5000/api';

  cpf_cnpj: string = '';
  senha: string = '';
  erro_login: string = '';

  constructor( private router: Router, private http: HttpClient) {}

  verifica_login(cpf_cnpj: string, senha: string): Observable<any> {
    return this.http.post<any>(`${this.api_url}/login`, { cpf_cnpj, senha });
  } 
 
  
  login() {
    this.verifica_login(this.cpf_cnpj, this.senha).subscribe({
      next: (resposta) => {  
        sessionStorage.setItem('autenticado', 'true');    
        sessionStorage.setItem('id', resposta.id);          
        this.router.navigate(['/rastreamento']);
      },
      error: () => {
        this.erro_login = 'Credenciais inválidas, tente novamente';        
      }
    });
  
  }
}






