import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UploadeddataPage } from './uploadeddata.page';

describe('UploadeddataPage', () => {
  let component: UploadeddataPage;
  let fixture: ComponentFixture<UploadeddataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadeddataPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UploadeddataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
