import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FeedbackService } from '../feedbackservice/feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor(private feedbackservice : FeedbackService) { }

  feedbackform = new FormGroup({
feedback: new FormControl ('',Validators.required)
  });

  get feedback() {return this.feedbackform.get('feedback');}

   submit(){
   if(this.feedbackform.valid){
this.feedbackservice.postfeedbackapi(this.feedbackform.value).subscribe((res:any)=>{console.log(res)});
    }
    else{
      console.log('form not valid');
    }
  }


  ngOnInit(): void {
    
  }

}
