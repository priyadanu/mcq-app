import { Component, DoCheck, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  currentIndex = 0;
  answers!: any;
  score: number = 0;
  totalQuestions!: any;
  quizOver: Boolean = false;
  disabled!: any;
  timeLeft: any = 600;
  interval!: any;
  timer!: any;
  ngOnInit(): void {
    let timeLeft = localStorage.getItem('timer');
    if (timeLeft != 'undefined') {
      this.timeLeft = timeLeft;
      this.startTimer();
    } else {
      this.startTimer();
    }
  }

  goNext() {
    this.disabled = true;
    this.currentIndex++;
    this.updateScore();
    if (this.currentIndex === this.totalQuestions) {
      this.endQuiz();
    }
  }

  goPrevious() {
    this.currentIndex--;
  }
  receiveAnswers(receivedAnswers: any) {
    this.answers = receivedAnswers;
  }
  updateScore() {
    if (this.answers.user_answer === this.answers.correct_answer) {
      this.score++;
    }
  }
  getTotalQuestions(totalQuestions: number) {
    this.totalQuestions = totalQuestions;
  }
  getDisableValue(value: any) {
    this.disabled = value;
  }
  endQuiz() {
    localStorage.removeItem('timer');
    this.quizOver = true;
    alert('Quiz Over! Score is ' + this.score + '/ ' + this.totalQuestions);
  }
  restartQuiz() {
    this.timeLeft = 600;
    this.quizOver = false;
    this.score = 0;
    this.currentIndex = 0;
  }
  startTimer() {
    this.interval = setInterval(() => {
      localStorage.setItem('timer', this.timeLeft);
      this.timer = new Date(this.timeLeft * 1000).toISOString().slice(14, 19);
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 600;
      }
    }, 1000);
  }
  pauseTimer() {
    clearInterval(this.interval);
  }
}
