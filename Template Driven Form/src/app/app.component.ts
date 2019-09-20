import { Component } from '@angular/core';
import { User} from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  topicHasError =true;
  submitted =false;
  errorMsg ='';
  topics = ['Angular','React','Vue','Blockchain'];
/* Here a properties is declared which contains object of the suer.ts class */
  userModel = new User('Kaushal','kaushal0888@gmail.com', 9599399506,'default','morning',true);

  constructor(private _enrollmentService: EnrollmentService){}

  validateTopic(value){
    if(value === 'default'){
      this.topicHasError=true;
    }
    else{
      this.topicHasError=false;
    }

  }

  onSubmit(userForm){

    console.log(userForm);
    

  //   this.submitted=true;
  //  this._enrollmentService.enroll(this.userModel)
  //  .subscribe(
  //    data => console.log('Success!', data),
  //    error => this.errorMsg = error.statusText)
  
  }


}
