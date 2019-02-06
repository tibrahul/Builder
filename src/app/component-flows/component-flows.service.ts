// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
// import { Observable, of, BehaviorSubject } from 'rxjs';
// import {flow,flow_component,generation_flow} from './generation-flows.model'

// @Injectable({
//   providedIn: 'root'
// })
// const getMFByName ="http://localhost:3002/microflow/getbycomp"

// export class ComponentFlowsService {
//   private messageSource = new BehaviorSubject('');
//   currentMessage = this.messageSource.asObservable();
//   constructor(private http: HttpClient) { 
    
//   }
//   changeMessage(message: string) {
//     this.messageSource.next(message)
//   }

//   getMicroFlowByName(name: string): Observable<generation_flow> {

//     const url = `${getMFByName}/${name}`;
//     return this.http.get<generation_flow>(url).pipe(
//       tap(_ => console.log(`fetched project flow component=${name}`)),
//       catchError(this.handleError<generation_flow>(`getFlowComp name=${name}`))
//     );
//   }
// }
