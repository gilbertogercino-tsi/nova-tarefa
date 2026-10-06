import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MediaParcial } from './media-parcial';

describe('MediaParcial', () => {
  let component: MediaParcial;
  let fixture: ComponentFixture<MediaParcial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaParcial],
    }).compileComponents();

    fixture = TestBed.createComponent(MediaParcial);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
