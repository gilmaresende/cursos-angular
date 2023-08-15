import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FisrtComponentComponent } from './fisrt-component.component';

describe('FisrtComponentComponent', () => {
  let component: FisrtComponentComponent;
  let fixture: ComponentFixture<FisrtComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FisrtComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FisrtComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
