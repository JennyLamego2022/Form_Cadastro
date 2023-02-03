import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCadastroComponent } from './listar-cadastro.component';

describe('ListarCadastroComponent', () => {
  let component: ListarCadastroComponent;
  let fixture: ComponentFixture<ListarCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarCadastroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
