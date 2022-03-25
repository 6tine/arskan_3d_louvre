import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireApiComponent } from './formulaire-api.component';

describe('FormulaireApiComponent', () => {
  let component: FormulaireApiComponent;
  let fixture: ComponentFixture<FormulaireApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
