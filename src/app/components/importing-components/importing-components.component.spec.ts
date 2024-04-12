import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportingComponentsComponent } from './importing-components.component';

describe('ImportingComponentsComponent', () => {
  let component: ImportingComponentsComponent;
  let fixture: ComponentFixture<ImportingComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImportingComponentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImportingComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
