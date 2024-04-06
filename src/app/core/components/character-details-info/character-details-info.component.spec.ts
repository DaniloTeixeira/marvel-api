import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterDetailsInfoComponent } from './character-details-info.component';

describe('CharacterDetailsInfoComponent', () => {
  let component: CharacterDetailsInfoComponent;
  let fixture: ComponentFixture<CharacterDetailsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterDetailsInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharacterDetailsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
