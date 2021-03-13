import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TestBeanService} from "../../service/data/test-bean.service";
import {Operation} from "../../item/operation";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  operationFormGroup: FormGroup;
  myMessage: any;
  myOperation: Operation;

  constructor(
    private formBuilder: FormBuilder,
    private testService: TestBeanService,) {

  }

  ngOnInit(): void {
    this.operationFormGroup= this.formBuilder.group({
        senderNumber: ['', [Validators.required,
                            Validators.pattern("^[0-9]*$"),
                            Validators.minLength(16),
                            Validators.maxLength(19),]],
        senderDateMonth: ['', ],
        senderDateYear: ['', ],
        senderCvc2: ['', [Validators.required,
                          Validators.maxLength(3)]],
        id: [''],
        senderAmount: ['', [Validators.required,
                            Validators.maxLength(10)]],
        receiverNumber: ['', [Validators.required,
                              Validators.pattern("^[0-9]*$"),
                              Validators.minLength(16),
                              Validators.maxLength(19),]],
        receiverAmount: [''],
        senderFee: [''],
        receiverFee: [''],
        phone: [''],
        receiverNotification: [false],
        email: [false]
    });
  }

  getTestBean() {
    //console.log("test the button");
    //console.log(this.testService.providerTestBean());
    this.testService.providerTestBean().subscribe(
        response => this.processTestInformation(response)

    );
  }
  processTestInformation(response){
    this.myMessage = response.senderAmount;
  }

  onSubmit() {

    let myOperation = new Operation();
    myOperation.senderNumber=this.operationFormGroup.controls['senderNumber'].value;
    myOperation.senderDate=this.operationFormGroup.controls['senderDateMonth'].value+this.operationFormGroup.controls['senderDateYear'].value;
    myOperation.senderCvc2=this.operationFormGroup.controls['senderCvc2'].value;
    myOperation.senderAmount=this.operationFormGroup.controls['senderAmount'].value;
    myOperation.receiverNumber=this.operationFormGroup.controls['receiverNumber'].value;
    myOperation.receiverNotification=this.operationFormGroup.controls['receiverNotification'].value;
    myOperation.email=this.operationFormGroup.controls['email'].value;
    myOperation.phone=this.operationFormGroup.controls['phone'].value;

    console.log(myOperation);
    this.testService.senderOperation(myOperation).subscribe(
      response => console.log(response)
    )
  }
}
