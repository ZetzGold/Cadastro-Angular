import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TCCCadastroComponent } from './tcc-cadastro.component';

describe('TCCCadastroComponent', () => {
  let component: TCCCadastroComponent;
  let fixture: ComponentFixture<TCCCadastroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TCCCadastroComponent]
    });
    fixture = TestBed.createComponent(TCCCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
