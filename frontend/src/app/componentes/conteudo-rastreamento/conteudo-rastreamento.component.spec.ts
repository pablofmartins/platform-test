import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteudoRastreamentoComponent } from './conteudo-rastreamento.component';

describe('ConteudoRastreamentoComponent', () => {
  let component: ConteudoRastreamentoComponent;
  let fixture: ComponentFixture<ConteudoRastreamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConteudoRastreamentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConteudoRastreamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
