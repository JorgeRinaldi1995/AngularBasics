import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsBasicsComponent } from './components-basics.component';

describe('ComponentsBasicsComponent', () => {
  let component: ComponentsBasicsComponent;
  let fixture: ComponentFixture<ComponentsBasicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentsBasicsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentsBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
