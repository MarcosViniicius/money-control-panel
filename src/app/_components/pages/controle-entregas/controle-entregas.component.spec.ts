import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleEntregasComponent } from './controle-entregas.component';

describe('ControleEntregasComponent', () => {
  let component: ControleEntregasComponent;
  let fixture: ComponentFixture<ControleEntregasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ControleEntregasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControleEntregasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
