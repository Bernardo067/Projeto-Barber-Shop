import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaDoBarbeiroComponent } from './tela-do-barbeiro.component';

describe('TelaDoBarbeiroComponent', () => {
  let component: TelaDoBarbeiroComponent;
  let fixture: ComponentFixture<TelaDoBarbeiroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelaDoBarbeiroComponent]
    });
    fixture = TestBed.createComponent(TelaDoBarbeiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
