import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectedEventPage } from './selected-event.page';

describe('SelectedEventPage', () => {
  let component: SelectedEventPage;
  let fixture: ComponentFixture<SelectedEventPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedEventPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectedEventPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
