import { Component, OnInit } from '@angular/core';
import { CabecalhoComponent } from "../../componentes/cabecalho/cabecalho.component";
import { ConteudoRastreamentoComponent } from '../../componentes/conteudo-rastreamento/conteudo-rastreamento.component';
import { Router } from '@angular/router';


@Component({
    selector: 'app-rastreamento',
    standalone: true,
    templateUrl: './rastreamento.component.html',
    styleUrl: './rastreamento.component.css',
    imports: [CabecalhoComponent, ConteudoRastreamentoComponent]
})
export class RastreamentoComponent implements OnInit {
    
    

    constructor(private router: Router) { }   
    
  //verifica se usuário está autenticado, senão vai para a página de login
    ngOnInit(): void {        
      if (!sessionStorage.getItem('autenticado')) {
        this.router.navigate(['/login']); 
      }
    }



  }

