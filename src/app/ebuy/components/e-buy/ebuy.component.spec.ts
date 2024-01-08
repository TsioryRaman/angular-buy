import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EbuyComponent } from './ebuy.component';

describe('EbuyComponent', () => {
  let component: EbuyComponent;
  let fixture: ComponentFixture<EbuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EbuyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EbuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
