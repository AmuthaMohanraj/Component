import { Component,EventEmitter,Input,OnChanges,Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})

export class ChildComponent implements OnChanges{

  patientData={
    id:'',
    name:'',
    gender:'',
    age:'',
    details:''
  }

  bx6:string='';
  name:string='mohanraj';


// get values from parent
  @Input() public batchMembers:any; 
  memberName:string='';
  memberIndex:number=0;

  @Input() public colorOfDiv:any;
   bgColor:string=''

   @Input() public university:any;
   

  //give a values for parent
  @Output() public data=new EventEmitter();


    ngOnChanges(): void {
      this.bgColor = this.colorOfDiv;
    }


  OpenMember() {
    if (this.memberIndex < this.batchMembers.length) {
        this.memberName = this.batchMembers[this.memberIndex];
        this.memberIndex++;
    }
  }

CloseMember() {
    if (this.memberIndex > 0) {
        this.memberIndex--;
        this.memberName = this.batchMembers[this.memberIndex];
    }
  }


  throwDataFromParent(){
    this.data.emit(this.patientData)
    console.log(this.data,'child component');
    console.log(this.patientData,'patient data');
    
  }
  

  selectedGender: string = '';

  onGenderSelect(value: string) {
  this.selectedGender = value;
  console.log('Selected Gender:', this.selectedGender);
}


 }
