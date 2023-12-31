import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PixComponent } from './pix.component';

describe('PixComponent', () => {
  let component: PixComponent;
  let fixture: ComponentFixture<PixComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PixComponent]
    });
    fixture = TestBed.createComponent(PixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
