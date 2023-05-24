import { Component,EventEmitter,Input,OnChanges,Output} from '@angular/core';


interface Address{
  city:string,
  pincode:number,
  street:string
}

interface EmpInterface{
  empNo:number,
  empName:string,
  dob:string,
  address:Address,
  phone:number,
  salary:number,

}

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})

export class ChildComponent implements OnChanges{

EmployeePayRoll:EmpInterface[]=[{empNo:124,empName:'mohanraj',dob:'23/04/2002',address:{city:'thiruttani',pincode:631208,street:'60,ThangaSalai Street'},phone:7448462762,salary:10000},
{empNo:73,empName:'ragul',dob:'02/09/2000',address:{city:'Poothottam',pincode:605602,street:'20C,Muthuvel layout Street'},phone:7397064249,salary:50000}];

  patientData={
    id:'',
    name:'',
    gender:'',
    age:'',
    details:''
  }

  bx6:string='';
  name:string='mohanraj';
  
  selectCity:string='';




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
