import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownEntregaComponent } from './down-entrega.component';

describe('DownEntregaComponent', () => {
  let component: DownEntregaComponent;
  let fixture: ComponentFixture<DownEntregaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DownEntregaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownEntregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
