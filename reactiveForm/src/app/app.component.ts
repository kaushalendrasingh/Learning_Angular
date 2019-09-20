import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validator, Validators } from '@angular/forms';
import { forbiddenNameValidator } from './shared/user-name.validator';
import { passwordValidator } from './shared/password.validator';
import { ConnectionService} from './connection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {

  constructor(private fb:FormBuilder,public conn:ConnectionService){}

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

  get userName(){
    return this.registrationForm.get('userName');
  }
   get password(){
     return this.registrationForm.get('password');
   }

   
  registrationForm = this.fb.group({
    //forbiddenNameValidator is a custom form validator inside shared folder
    userName: ["", [Validators.required, Validators.minLength(3), forbiddenNameValidator(/password/)]],
    email:['',Validators.required],
    subscribe:['false',Validators.required],
    password: ["", [Validators.required, Validators.minLength(4)]],
    confirmPassword: ["",[Validators.required, Validators.minLength(4)]],

    address:this.fb.group({

      city :["",Validators.required],
      state: ["",Validators.required],
      postalCode: ["",Validators.required],

    })
    },
    {validator : passwordValidator});

// registrationForm = new FormGroup({
//   userName: new FormControl('Kaushal'),
//   password: new FormControl(''),
//   confirmPassword: new FormControl(''),

//   address: new FormGroup({
//     city: new FormControl(''),
//     state: new FormControl(''),
//     postalCode: new FormControl('')

//   })

// });

loadApiData(){
this.registrationForm.setValue({

  userName:'radhe singh' ,
  email:'kaushal0888@gmail.com',
  subscribe: false,
  password: 'anything',
  confirmPassword:'anything' ,

  address: {
    city: 'Agra',
    state: 'Uttar Pradesh',
    postalCode: 231231

}
});

}

submit() {
  // var main_url =   "user";
  // var body = "Utkarsh"
  // this.conn.postMethod(main_url,body).subscribe(function(data) {
  //   console.log(data)
  // })
  console.log(this.registrationForm.value);
  
}
}
