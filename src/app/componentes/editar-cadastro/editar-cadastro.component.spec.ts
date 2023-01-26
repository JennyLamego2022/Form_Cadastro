import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCadastroComponent } from './editar-cadastro.component';

describe('EditarCadastroComponent', () => {
  let component: EditarCadastroComponent;
  let fixture: ComponentFixture<EditarCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarCadastroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
