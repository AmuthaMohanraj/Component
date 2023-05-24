import { Component,AfterViewInit, ViewChild} from '@angular/core';
import { ChildComponent } from './child/child.component';


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
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements AfterViewInit {

 
  title = 'componentIntraction';
  aboutBatchMembers=['roshine','saravanan','poonelen','raghulpriyan','vignesh','raju','selva','priya','rajesh','thagam','mohanraj','akash','aravind','divya','nethaji','raghul','kishore','haridha','karthikesan','ajith','singaram','gokul','muthu','saravanan','uma','mahalashmi','maruthu'];
  parentBgColor='';
  patientId:string='';
  name:string='';
  gender:string='';
  age:string='';
  details:string='';
  collage:any={collagename:'ucev',location:'villupuram'};

// AfterViewInitVariable
  message:string='';
  empDetails:EmpInterface[]=[];

  @ViewChild(ChildComponent) obj1:any;

  fun1(){
    this.parentBgColor='green'
  }

  fun2()
  {
    this.parentBgColor='#ffc107';
  }

  fun3()
  {
    this.parentBgColor='#007bff';
  }

  fun4()
  {
    this.parentBgColor='#6c757d';
  }

  
  captureChildMessage(event:any){
    this.patientId=event.id;
    this.name=event.name;
    this.gender=event.gender;
    this.age=event.age;
    this.details=event.details;
    console.log(event,'parent component')
  }

  //AfterViewForChildComponent
  ngAfterViewInit(): void {
    this.message = this.obj1.name;
    this.empDetails = this.obj1.EmployeePayRoll;
    console.warn('QQQQQ', this.empDetails);
  }

}
