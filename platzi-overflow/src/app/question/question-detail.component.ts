import { Component} from '@angular/core';
import { Question} from './question.model'
@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent{
  question: Question = new Question(
    'Esta es una nueva pregunta sobre android',
    'Miren, tengo una duda con una aplicacion que estoy contruyendo para android',
    new Date,
    'devicon-android-plain'
  );
}
