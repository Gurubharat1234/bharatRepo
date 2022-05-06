import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
regForm;
posts;
  constructor(private fb:FormBuilder,
    private bt:DataService) { }

  ngOnInit(): void {
this.regForm=this.fb.group({
  fName:[],
  lName:[],
  dob:[],
  doj:[],
  dept:[]

})
this.bt.getData().subscribe((res)=>{
  console.log(res);
  this.posts=res
  
})
  }
onSubmit(){
  console.log(this.regForm.value);
  this.bt.postData(this.regForm.value).subscribe((res)=>{
    console.log(res);
    
    
  })
  
}
}
