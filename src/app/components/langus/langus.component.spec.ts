import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LangusComponent } from './langus.component';

describe('LangusComponent', () => {
  let component: LangusComponent;
  let fixture: ComponentFixture<LangusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LangusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LangusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
