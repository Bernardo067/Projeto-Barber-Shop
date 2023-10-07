import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaInicialUsuarioComponent } from './pagina-inicial-usuario.component';

describe('PaginaInicialUsuarioComponent', () => {
  let component: PaginaInicialUsuarioComponent;
  let fixture: ComponentFixture<PaginaInicialUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaInicialUsuarioComponent]
    });
    fixture = TestBed.createComponent(PaginaInicialUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
