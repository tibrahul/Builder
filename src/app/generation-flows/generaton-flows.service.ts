import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import {flow,flow_component,generation_flow} from './generation-flows.model'

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const flowUrl = "http://localhost:3001/flow/getall";
const compUrl = "http://localhost:3001/flow_component/getall"
const addGenFlow ="http://localhost:3001/generation_flow/add"
const getGenFlow ="http://localhost:3001/generation_flow/getall"
// /flow_component/getbyid/:id
@Injectable({
  providedIn: 'root'
})
export class GeneratonFlowsService {
  constructor(private http: HttpClient) {
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

  addGenFlow (generation_flow): Observable<generation_flow> {
    console.log("i am in service")
    return this.http.post<generation_flow>(addGenFlow, generation_flow, httpOptions).pipe(
      tap((generation_flow: generation_flow) => console.log(`added project w/ id=${generation_flow}`)),
      catchError(this.handleError<generation_flow>('addGenFlow'))
      );
  }
  
  // getProject(id: number): Observable<project> {
  //   const url = `${apiUrl}/${id}`;
  //   return this.http.get<project>(url).pipe(
  //     tap(_ => console.log(`fetched project id=${id}`)),
  //     catchError(this.handleError<project>(`getproject id=${id}`))
  //   );
  // }
  
  
}