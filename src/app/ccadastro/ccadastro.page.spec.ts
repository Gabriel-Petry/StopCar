import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CcadastroPage } from './ccadastro.page';

describe('CcadastroPage', () => {
  let component: CcadastroPage;
  let fixture: ComponentFixture<CcadastroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CcadastroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
