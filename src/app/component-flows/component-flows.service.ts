import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
// import {flow,flow_component,generation_flow,micro_flow} from '../generation-flows/generation-flows.model'
import { IFlow } from '../flow-manager/interface/flow';
import { IFlowComponent } from './interface/flowComponents';
// import { IGenerateFlow } from '../flow-manager/interface/generationFlow';
import { IMicroFlow } from './interface/microFlow';
import { IGenerateFlow } from '../flow-manager/interface/generationFlow';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const getMFByName = 'http://localhost:3002/microflow/getbycomp';
const addFlowComp = 'http://localhost:3001/flow_component/save';
const updateFlow = "http://localhost:3001/flow/update";
const updateFlowComp = "http://localhost:3001/flow_component/";
const addGenFlow = "http://localhost:3001/generation_flow/update";
const addMFlow = "http://localhost:3002/microflow/save";

@Injectable({
  providedIn: 'root'
})

export class ComponentFlowsService {
  private messageSource = new BehaviorSubject('');
  currentMessage = this.messageSource.asObservable();
  constructor(private http: HttpClient) {

  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  changeMessage(message: string) {
    this.messageSource.next(message);
  }

  getMicroFlowByName(name: string): Observable<IMicroFlow> {
    const url = `${getMFByName}/${name}`;
    return this.http.get<IMicroFlow>(url).pipe(
      tap(_ => console.log(`fetched project flow component=${name}`)),
      catchError(this.handleError<IMicroFlow>(`getFlowComp name=${name}`))
    );
  }

  updateFlow(flowObject: IFlow): Observable<any> {
    return this.http.put(updateFlow + 'update', flowObject);
  }
  updateFlowComp(flowObject: IFlowComponent): Observable<any> {
    return this.http.put(updateFlowComp + 'update', flowObject);
  }

  addFlowComp(flowObject): Observable<IFlowComponent> {
    console.log('i am in service');
    return this.http.post<IFlowComponent>(addFlowComp, flowObject, httpOptions).pipe(
      tap((tapFlowObject: IFlowComponent) => console.log(`added project w/ id=${tapFlowObject}`)),
      catchError(this.handleError<IFlowComponent>('addGenFlow'))
    );
  }
  addGenFlow(flowObject): Observable<IGenerateFlow> {
    console.log('i am in service');
    return this.http.put<IGenerateFlow>(addGenFlow, flowObject, httpOptions).pipe(
      tap((tapFlowObject: IGenerateFlow) => console.log(`added project w/ id=${tapFlowObject}`)),
      catchError(this.handleError<IGenerateFlow>('addGenFlow'))
    );
  }

  addMicroFlow(flowObject): Observable<IFlowComponent> {
    return this.http.post<IFlowComponent>(addMFlow, flowObject, httpOptions).pipe(
      tap((tapFlowObject: IFlowComponent) => console.log(`added project w/ id=${tapFlowObject}`)),
      catchError(this.handleError<IFlowComponent>('addGenFlow'))
    );
  }
}
