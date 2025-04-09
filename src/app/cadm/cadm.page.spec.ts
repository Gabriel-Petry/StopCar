import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadmPage } from './cadm.page';

describe('CadmPage', () => {
  let component: CadmPage;
  let fixture: ComponentFixture<CadmPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CadmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
