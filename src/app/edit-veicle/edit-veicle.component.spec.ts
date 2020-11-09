import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVeicleComponent } from './edit-veicle.component';

describe('EditVeicleComponent', () => {
  let component: EditVeicleComponent;
  let fixture: ComponentFixture<EditVeicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditVeicleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditVeicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
