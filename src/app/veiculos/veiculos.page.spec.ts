import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VeiculosPage } from './veiculos.page';

describe('VeiculosPage', () => {
  let component: VeiculosPage;
  let fixture: ComponentFixture<VeiculosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VeiculosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
