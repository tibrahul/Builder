import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import {flow, flow_component, generation_flow} from './generation-flows.model';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const flowUrl = 'http://localhost:3001/flow/getall';
const compUrl = 'http://localhost:3001/flow_component/getall';
const addGenFlow = 'http://localhost:3001/generation_flow/add';
const getGenFlow = 'http://localhost:3001/generation_flow/getall';
const getCompByName = 'http://localhost:3001/generation_flow/getbyname';
const getMFByName = 'http://localhost:3002/microflow/getbycomp';

// /flow_component/getbyid/:id
@Injectable({
  providedIn: 'root'
})
export class GeneratonFlowsService {
  private messageSource = new BehaviorSubject('');
  currentMessage = this.messageSource.asObservable();
  constructor(private http: HttpClient) {
   }
   changeMessage(message: string) {
    this.messageSource.next(message);
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
    getFlows (): Observable<flow[]> {
    return this.http.get<flow[]>(flowUrl)
      .pipe(
        tap(heroes => console.log('fetched projects')),
        catchError(this.handleError('getprojects', []))
      );
  }
  getFlowComponents (): Observable<flow_component[]> {
    return this.http.get<flow_component[]>(compUrl)
      .pipe(
        tap(heroes => console.log('fetched projects')),
        catchError(this.handleError('getprojects', []))
      );
  }

  getGenFlow (): Observable<generation_flow[]> {
    return this.http.get<generation_flow[]>(getGenFlow)
      .pipe(
        tap(heroes => console.log('fetched projects')),
        catchError(this.handleError('generation_flow', []))
      );
  }

  addGenFlow (flowObject): Observable<generation_flow> {
    console.log('i am in service');
    return this.http.post<generation_flow>(addGenFlow, flowObject, httpOptions).pipe(
      tap((tapFlowObject: generation_flow) => console.log(`added project w/ id=${tapFlowObject}`)),
      catchError(this.handleError<generation_flow>('addGenFlow'))
      );
  }

  getFlowComponentByName(name: string): Observable<generation_flow> {

    const url = `${getCompByName}/${name}`;
    return this.http.get<generation_flow>(url).pipe(
      tap(_ => console.log(`fetched project flow component=${name}`)),
      catchError(this.handleError<generation_flow>(`getFlowComp name=${name}`))
    );
  }

  getMicroFlowByName(name: string): Observable<generation_flow> {

    const url = `${getMFByName}/${name}`;
    return this.http.get<generation_flow>(url).pipe(
      tap(_ => console.log(`fetched project flow component=${name}`)),
      catchError(this.handleError<generation_flow>(`getFlowComp name=${name}`))
    );
  }
}
