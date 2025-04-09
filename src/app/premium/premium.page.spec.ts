import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { PremiumPage } from './premium.page';

describe('PremiumPage', () => {
  let component: PremiumPage;
  let fixture: ComponentFixture<PremiumPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PremiumPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PremiumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});