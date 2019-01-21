import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  display: any;
  createProject: FormGroup;
  submitted: false;
  sub: Subscription = <Subscription>{
    name: "",
    label: "",
    appContext: "",
    description: "",
    primaryLanguage: "",
    secondaryLanguage: "",
  };
  constructor(private formBuilder: FormBuilder) {
    console.log(this.createProject)
  }


  ngOnInit() {
    this.createProject = this.formBuilder.group({
      name: '',
      label: '',
      appContext: '',
      description: '',
      primaryLanguage: '',
      secondaryLanguage: '',
    });
  }
  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }
  projectCreate() {
    console.log("test", this.createProject.value)
    this.sub.name = this.createProject.value.name;
    this.sub.label = this.createProject.value.label;
    this.sub.appContext = this.createProject.value.appContext;
    this.sub.description = this.createProject.value.description;
    this.sub.primaryLanguage = this.createProject.value.primaryLanguage;
    this.sub.secondaryLanguage = this.createProject.value.secondaryLanguage;

    localStorage.setItem("project", JSON.stringify(this.sub));
  }
}

export interface Subscription {
  name: string,
  label: string,
  appContext: string,
  description: string,
  primaryLanguage: string,
  secondaryLanguage: string,
}