import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterDetailsModalComponent } from './character-details-modal.component';

describe('CharacterDetailsModalComponent', () => {
  let component: CharacterDetailsModalComponent;
  let fixture: ComponentFixture<CharacterDetailsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterDetailsModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharacterDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
