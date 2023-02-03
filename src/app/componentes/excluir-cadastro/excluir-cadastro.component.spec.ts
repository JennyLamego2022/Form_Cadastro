import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirCadastroComponent } from './excluir-cadastro.component';

describe('ExcluirCadastroComponent', () => {
  let component: ExcluirCadastroComponent;
  let fixture: ComponentFixture<ExcluirCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcluirCadastroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcluirCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
