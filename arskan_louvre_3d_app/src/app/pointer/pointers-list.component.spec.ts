import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointersListComponent } from './pointers-list.component';

describe('PointerComponent', () => {
  let component: PointersListComponent;
  let fixture: ComponentFixture<PointersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PointersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
