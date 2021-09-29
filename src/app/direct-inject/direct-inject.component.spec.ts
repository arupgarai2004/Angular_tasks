import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectInjectComponent } from './direct-inject.component';

describe('DirectInjectComponent', () => {
  let component: DirectInjectComponent;
  let fixture: ComponentFixture<DirectInjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectInjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectInjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
