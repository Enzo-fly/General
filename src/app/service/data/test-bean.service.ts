import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Operation} from "../../item/operation";

@Injectable({
  providedIn: 'root'
})
export class TestBeanService {
  private testBeanUrl = 'http://localhost:8080/api/testOperation';
  private postOperationUrl = 'http://localhost:8080/api/CardOperations';

  constructor(private httpClient: HttpClient) { }

  providerTestBean(){
    return this.httpClient.get<Operation>(this.testBeanUrl);
    //console.log("Service is working");
  }
  senderOperation(operation: Operation){
    return this.httpClient.post<Operation>(this.postOperationUrl, operation);
  }
}
