import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: 'project', component: ProjectsComponent },
  { path: '', redirectTo: 'project', pathMatch: 'full' },
  { path: '**', redirectTo: 'project', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
