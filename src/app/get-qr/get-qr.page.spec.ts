import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GetQRPage } from './get-qr.page';

describe('GetQRPage', () => {
  let component: GetQRPage;
  let fixture: ComponentFixture<GetQRPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetQRPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GetQRPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
