import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppComponentService {
  private messageSource = new BehaviorSubject('default message');
  private messageSub = new Subject();
  currentMessage = this.messageSource.asObservable();
  currentSubject: any;
  constructor() {
    this.messageSub.next('i am in subject')
    this.currentSubject = this.messageSub.asObservable();
  }
  changeMessage(message: string) {
    this.messageSource.next(message)
  }
  changeSub(message: string) {
    console.log("i am in parent sub",message)
    this.messageSub.next(message)
  }
}
