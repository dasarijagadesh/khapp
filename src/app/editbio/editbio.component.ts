import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EditbioService} from '../editbioservice/editbio.service';


@Component({
  selector: 'app-editbio',
  templateUrl: './editbio.component.html',
  styleUrls: ['./editbio.component.css']
})
export class EditbioComponent implements OnInit {

  constructor(private editbios : EditbioService) { }

  editbioform = new FormGroup({
    bio: new FormControl('',Validators.required)
  })

  get bio() { return this.editbioform.get('bio') }

  submit(){
if(this.editbioform.valid){
this.editbios.posteditbioapi(this.editbioform.value).subscribe((res:any)=>{console.log(res)});
    }
    else{
      console.log('form not valid');
    }
  }

  ngOnInit(): void {
  }

}
