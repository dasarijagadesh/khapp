import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostserviceService } from '../services/postservice.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private formService: PostserviceService) { }


  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    num: new FormControl('', [Validators.required, Validators.minLength(10)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirm_password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  get f() {
    return this.form.controls;
  }

  submit() {
    if (this.form.valid) {
      this.formService.signupdataApi(this.form.value).subscribe((res: any) => { console.log(res) });
      this.form.reset();
    }
    else {
      console.log(`form not valid`)
    }
  }

  ngOnInit(): void {
  }

}


