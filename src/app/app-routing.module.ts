import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {QuizComponent} from './quiz/quiz.component';
import {DesignComponent} from './design-demo/design-demo.component'


const routes: Routes = [
  {path: 'quiz', component: QuizComponent},
  {path: 'design', component: DesignComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
