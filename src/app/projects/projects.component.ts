import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Location} from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  name: any;
  display: any;
  description: any;
  project: boolean =false;
  projectData: any;
  createProject: FormGroup;
  languageSelect: any;
  userLang: string;
  languages: string[] = ['English', 'Tamil', 'Spanish'];

  submitted: boolean = false;
  sub: Subscription = <Subscription>{
    name: "",
    label: "",
    appContext: "",
    description: "",
    primaryLanguage: "",
    secondaryLanguage: "",
  };
  constructor(private formBuilder: FormBuilder){}


  ngOnInit() {
    this.projectDetails();
    this.createProject = this.formBuilder.group({
      name: ['', Validators.required],
      label: ['', Validators.required],
      // appContext: ['', Validators.required],
      appContext: '',
      // description: ['', Validators.required],
      description: '',
      primaryLanguage: ['', Validators.required],
      // secondaryLanguage: ['', Validators.required],
      secondaryLanguage: [''],
    });
  }
  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
    this.submitted = false;
    this.createProject.clearValidators();
    this.createProject.reset();
  }
  get f() { return this.createProject.controls; }
  projectCreate() {
    this.submitted = true;
    if (this.createProject.invalid) {
      return;
    }
    this.sub.name = this.createProject.value.name;
    this.sub.label = this.createProject.value.label;
    this.sub.appContext = this.createProject.value.appContext;
    this.sub.description = this.createProject.value.description;
    this.sub.primaryLanguage = this.createProject.value.primaryLanguage;
    this.sub.secondaryLanguage = this.createProject.value.secondaryLanguage;
    localStorage.setItem("project", JSON.stringify(this.sub));
    this.onCloseHandled();
    this.projectDetails()
  }
  
  projectDetails() {
    this.projectData = localStorage.getItem('project');
    if(this.projectData !== null){
      this.project = true;
    }else{
      this.project = false;
    }
    if(this.projectData!==null){
    var data = JSON.parse(this.projectData)
    this.description = data.description;
    this.name = data.name;
    }
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