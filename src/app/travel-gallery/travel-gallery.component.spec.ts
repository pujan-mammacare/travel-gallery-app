import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelGalleryComponent } from './travel-gallery.component';

describe('TravelGalleryComponent', () => {
  let component: TravelGalleryComponent;
  let fixture: ComponentFixture<TravelGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TravelGalleryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
