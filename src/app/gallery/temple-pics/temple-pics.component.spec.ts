import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplePicsComponent } from './temple-pics.component';

describe('TemplePicsComponent', () => {
  let component: TemplePicsComponent;
  let fixture: ComponentFixture<TemplePicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplePicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplePicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
