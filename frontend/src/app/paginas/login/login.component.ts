import { Component } from '@angular/core';
import { RodapeComponent } from "../../componentes/rodape/rodape.component";
import { CabecalhoComponent } from '../../componentes/cabecalho/cabecalho.component';
import { TelaLoginComponent } from '../../componentes/tela-login/tela-login.component';

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
    imports: [RodapeComponent, CabecalhoComponent, TelaLoginComponent]
})
export class LoginComponent {

}
