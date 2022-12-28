import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivasEsttuturaisComponent } from './diretivas-esttuturais.component';

describe('DiretivasEsttuturaisComponent', () => {
  let component: DiretivasEsttuturaisComponent;
  let fixture: ComponentFixture<DiretivasEsttuturaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiretivasEsttuturaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiretivasEsttuturaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
