import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Injectable } from '@angular/core';
import { AppComponentService } from '../app.component.service'
import { ProjectsService } from '../projects/projects.service';
import { project } from '../projects/project.model'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
@Injectable()
export class ProjectsComponent implements OnInit {
  private projectInterface : project = {
    name: '',
    label: '',
    description: '',
    default_module_id: '',
    default_module_label: '',
    notes: '',
    created_by: '',
    created_any: '',
    last_modified_by: '',
    last_modified_any: '',
    client_os_types: '',
    client_device_types: '',
    client_dev_languages: '',
    client_dev_frameworks: '',
    client_widget_frameworks: '',
    mobile_css_framework: '',
    desktop_css_framework: '',
    app_ui_template: '',
    client_code_pattern: '',
    server_code_pattern: '',
    server_dev_lang: '',
    server_dev_framework: '',
    server_run_time: '',
    server_os: '',
    server_dbms: '',
    server_deployment_environment: '',
    global_extensions: '',
    ui_navigation_styles: '',
    supported_browsers: '',
    default_human_language: '',
    other_human_languages: '',
    entity: '',
    enforce_documentation: '',
    widget_count: '',
    generation_type: '',
    authorization_type: '',
    authorizations: '',
    communication_protocal: '',
    stand_alone_app: '',
    application_type: '',
    lotus_notes_enabled: '',
    extra_project_info: '',
    lotus_notes_cred_enabled: '',
    user_deployment_target: '',
    server_deployment_target: '',
  }
  message: string;
  messageSub: string;
  name: any;
  display: any;
  description: any;
  project = false;
  projectData: any;
  createProject: FormGroup;
  languageSelect: any;
  userLang: string;
  languages: string[] = ['English', 'Tamil', 'Spanish'];

  submitted = false;
  constructor(private formBuilder: FormBuilder, private data: AppComponentService, private projectsService: ProjectsService) { }

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
    this.display = 'block';
  }
  onCloseHandled() {
    this.display = 'none';
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
    console.log(this.createProject.value.name)
    console.log(this.projectInterface)
    this.projectInterface.name = this.createProject.value.name;
    this.projectInterface.label = this.createProject.value.label;
    this.projectInterface.extra_project_info = this.createProject.value.appContext;
    this.projectInterface.description = this.createProject.value.description;
    this.projectInterface.default_human_language = this.createProject.value.primaryLanguage;
    this.projectInterface.other_human_languages = this.createProject.value.secondaryLanguage;
    console.log("hello udhaya",this.projectInterface)
    this.projectsService.addProject(this.projectInterface).subscribe(data => {
      console.log("data", data);
    },
    error => {
      console.log('Check the browser console to see more info.','Error!');
    });
    localStorage.setItem('project', JSON.stringify(this.projectInterface));
    this.onCloseHandled();
    this.projectDetails();
  }
  projectDetails() {
    this.projectData = localStorage.getItem('project');
    if (this.projectData !== null) {
      this.project = true;
    } else {
      this.project = false;
    }
    if (this.projectData !== null) {
      const data = JSON.parse(this.projectData);
      this.description = data.description;
      this.name = data.name;
    }
  }
}
