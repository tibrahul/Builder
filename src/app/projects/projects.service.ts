import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { project } from '../projects/project.model'
import { SharedService } from 'src/shared/shared.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient, private restapi:SharedService) { }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getMyAllProjects(): Observable<project[]> {
    return this.http.get<project[]>(this.restapi.projbaseUrl+'/getall').pipe(
      tap(heroes => console.log('fetched projects')),
      catchError(this.handleError('getprojects', []))
    );
  }

  // getProject(id: number): Observable<project> {
  //   const url = `${apiUrl}/${id}`;
  //   return this.http.get<project>(url).pipe(
  //     tap(_ => console.log(`fetched project id=${id}`)),
  //     catchError(this.handleError<project>(`getproject id=${id}`))
  //   );
  // }

  addProject(project): Observable<project> {
    return this.http.post<project>(this.restapi.projbaseUrl+'/add', project, httpOptions).pipe(
      tap((project: project) => console.log(`added project w/ id=${project}`)),
      catchError(this.handleError<project>('addproject'))
    );
  }

  // updateProject (id, project): Observable<any> {
  //   const url = `${apiUrl}/${id}`;
  //   return this.http.put(url, project, httpOptions).pipe(
  //     tap(_ => console.log(`updated project id=${id}`)),
  //     catchError(this.handleError<any>('updateproject'))
  //   );
  // }

  deleteProject (id): Observable<project> {
    const url = `${this.restapi.projbaseUrl}/delete/${id}`;

    return this.http.delete<project>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted project id=${id}`)),
      catchError(this.handleError<project>('deleteproject'))
    );
  }
}
