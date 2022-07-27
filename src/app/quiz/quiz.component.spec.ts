import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { QuizComponent } from './quiz.component';

describe('QuizComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        QuizComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(QuizComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
