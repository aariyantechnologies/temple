import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InaugurationPicsComponent } from './inauguration-pics.component';

describe('InaugurationPicsComponent', () => {
  let component: InaugurationPicsComponent;
  let fixture: ComponentFixture<InaugurationPicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InaugurationPicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InaugurationPicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
