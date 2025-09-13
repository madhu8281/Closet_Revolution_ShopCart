import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopsypageComponent } from './shopsypage.component';

describe('ShopsypageComponent', () => {
  let component: ShopsypageComponent;
  let fixture: ComponentFixture<ShopsypageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopsypageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopsypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
