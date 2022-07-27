import {
  Component,
  DoCheck,
  OnInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit, DoCheck {
  questions!: any[];
  @Input() questionIndex!: number;
  currentQuestion!: string;
  currentOptions!: string;
  userAnswer!: any;
  correctAnswer!: any;
  answer: any;
  index: any;
  save_answer = new Map<any, any>();
  @Output() answers = new EventEmitter<{
    user_answer: string;
    correct_answer: string;
  }>();
  @Output() totalQuestions = new EventEmitter<number>();
  @Output() disable = new EventEmitter<Boolean>();

  ngOnInit(): void {
    this.answer = localStorage.getItem('user_ans');
    this.index = localStorage.getItem('user_ans_index');
    this.questions = [
      {
        question: 'What does AOT stand for?',
        options: [
          'Ahead-Of-Time-Compliation',
          'Angular Object Templates',
          'Authorization of template',
          'None of the above',
        ],
        answer: 'Ahead-Of-Time-Compliation',
      },
      {
        question: 'AngularJS is a ____?',
        options: [
          'Java Framework',
          'Javascript Framework',
          'HTML Framework',
          'Sql Framework',
        ],
        answer: 'Javascript Framework',
      },
      {
        question: 'Angular js is perfect for?',
        options: ['MPAs', 'DPAs', 'CPAs', 'SPAs'],
        answer: 'SPAs',
      },
      {
        question:
          'State whether true or false:  AngularJS provides reusable components',
        options: ['True', 'Flase'],
        answer: 'True',
      },
      {
        question: 'Choose the correct syntax for writing AngularJS expression.',
        options: [
          '[expression]',
          '{{expressions}}',
          '{{{expression}}}',
          '{expression}',
        ],
        answer: '{{expressions}}',
      },
      {
        question:
          'Choose the reactor which is used to bind the application data to the HTML view in AngularJS.',
        options: [
          'ng-bind directive',
          'ng-model directive',
          'ng-init directive',
          'ng-app directive',
        ],
        answer: 'ng-bind directive',
      },
      {
        question: 'Choose the correct statement about the lowercase filter.',
        options: [
          'that takes text as input',
          'the lowercase filter converts a text to lowercase text',
          'both a and b',
          'none of thye above',
        ],
        answer: 'the lowercase filter converts a text to lowercase text',
      },
      {
        question: 'Choose the advantage of Angular JS among the following.',
        options: [
          'provide reusable components',
          'use dependency injection',
          'none of the above',
          'both a and b',
        ],
        answer: 'both a and b',
      },
      {
        question: 'Choose the incorrect AngularJS filter.',
        options: ['orderby', 'email', 'currency', 'lowercase'],
        answer: 'email',
      },
      {
        question:
          'Choose the directive which is used to find the values of HTML controls to application data.',
        options: ['ng-model', 'ng-init', 'ng-app', 'ng-hide'],
        answer: 'ng-model',
      },
    ];

    this.totalQuestions.emit(this.questions.length);
    this.disable.emit(true);
  }

  ngDoCheck(): void {
    this.currentQuestion = this.questions[this.questionIndex].question;
    this.currentOptions = this.questions[this.questionIndex].options;
  }
  setUserAnswer(option: string, index: any) {
    this.save_answer.set(this.currentQuestion, option);
    this.userAnswer = option;
    localStorage.setItem('user_ans', this.userAnswer);
    localStorage.setItem('user_ans_index', index);
    this.correctAnswer = this.questions[this.questionIndex].answer;
    this.answers.emit({
      user_answer: this.userAnswer,
      correct_answer: this.correctAnswer,
    });
    this.disable.emit(false);
  }
  isChecked(option: any) {
    console.log('****')
    return this.save_answer.get(this.currentQuestion) === option;
  }
}
