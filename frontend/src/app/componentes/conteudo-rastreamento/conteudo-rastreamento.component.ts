import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-conteudo-rastreamento',
  standalone: true,
  imports: [CommonModule, FormsModule, GoogleMapsModule],
  templateUrl: './conteudo-rastreamento.component.html',
  styleUrl: './conteudo-rastreamento.component.css'
})
export class ConteudoRastreamentoComponent implements OnInit {  
  posicao_inicial: google.maps.LatLngLiteral = { lat: -18.91972694916957, lng: -48.275004432814875 }; // coordenadas da webrota
  zoom = 14;
  posicoes_no_mapa: google.maps.LatLngLiteral[] = [];
  rota: google.maps.LatLngLiteral[] = [];
  erro_arquivo: string = '';  
  nome: string = ''; 
  cpf_cnpj: string = ''; 
  private api_url = 'http://localhost:5000/api/clientes';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    const id_string: string | null = sessionStorage.getItem('id');
    const id_int: number = id_string ? parseInt(id_string, 10) : 0;

    this.requisicao_dados_cliente(id_int).subscribe({
      next: (dados) => {        
        this.nome = dados.nome;
        this.cpf_cnpj = dados.cpf_cnpj;        
      },
      error: (error) => {
        console.error('Erro ao obter dados do cliente:', error);
      }
    });
  }

 
  requisicao_dados_cliente(id: any): Observable<any> {    
    return this.http.get<any>(`${this.api_url}/${id}`);
  }

  ler_arquivo(event: any) { 
    const arquivo = new FileReader();
    arquivo.readAsText(event.target.files[0]);
    
    arquivo.onload = (e: any) => {
      const dados = e.target.result; 
  
      try {
        const json = JSON.parse(dados); 
        this.posicoes_no_mapa = json.data.map((posicao: any) => ({
          lat: parseFloat(posicao.latitude), 
          lng: parseFloat(posicao.longitude)
        }));
        this.rota = this.posicoes_no_mapa;
      } catch (error: any) {        
        console.error('Erro ao ler o arquivo:', error);        
        this.erro_arquivo = 'Arquivo inválido';
      }
    };  
  }
}

