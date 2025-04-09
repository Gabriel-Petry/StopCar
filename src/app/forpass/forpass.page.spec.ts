import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForpassPage } from './forpass.page';

describe('ForpassPage', () => {
  let component: ForpassPage;
  let fixture: ComponentFixture<ForpassPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ForpassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
