import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChabgeNumberComponent } from './chabge-number.component';

describe('ChabgeNumberComponent', () => {
  let component: ChabgeNumberComponent;
  let fixture: ComponentFixture<ChabgeNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChabgeNumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChabgeNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
