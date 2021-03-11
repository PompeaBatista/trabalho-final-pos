import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FornecedorDeleteComponent } from './fornecedor-delete.component';

describe('FornecedorDeleteComponent', () => {
  let component: FornecedorDeleteComponent;
  let fixture: ComponentFixture<FornecedorDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FornecedorDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FornecedorDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
