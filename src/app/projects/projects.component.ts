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

  displayModel: String = 'none';
  createProject: FormGroup;
  languages: string[] = ['English', 'Tamil', 'Spanish'];
  submitted = false;
  myAllProjects: Array<Object> = [
    {
      "client_os_types": [
        ""
      ],
      "client_device_types": [
        ""
      ],
      "_id": "5c5af1713d785f2a263ab599",
      "name": "nbnbnbn",
      "label": "b",
      "description": "bn",
      "default_module_id": "",
      "default_module_label": "",
      "notes": "",
      "created_by": "",
      "last_modified_by": "",
      "client_dev_languages": "",
      "client_dev_frameworks": "",
      "client_widget_frameworks": "",
      "mobile_css_framework": "",
      "desktop_css_framework": "",
      "app_ui_template": "",
      "client_code_pattern": "",
      "server_code_pattern": "",
      "server_dev_lang": "",
      "server_dev_framework": "",
      "server_run_time": "",
      "server_os": "",
      "server_dbms": "",
      "server_deployment_environment": "",
      "global_extensions": "",
      "ui_navigation_styles": "",
      "supported_browsers": "",
      "default_human_language": "english",
      "other_human_languages": "Tamil",
      "entity": "",
      "enforce_documentation": "",
      "widget_count": "",
      "generation_type": "",
      "authorization_type": "",
      "authorizations": "",
      "communication_protocal": "",
      "stand_alone_app": "",
      "application_type": "",
      "lotus_notes_enabled": "",
      "extra_project_info": "nbnbn",
      "lotus_notes_cred_enabled": "",
      "user_deployment_target": "",
      "server_deployment_target": "",
      "created_date": "2019-02-06T14:38:41.894Z",
      "last_modified_date": "2019-02-06T14:38:41.894Z",
      "__v": 0
    },
    {
      "client_os_types": [
        ""
      ],
      "client_device_types": [
        ""
      ],
      "_id": "5c5af1713d785f2a263ab599",
      "name": "nbnbnbn",
      "label": "b",
      "description": "bn",
      "default_module_id": "",
      "default_module_label": "",
      "notes": "",
      "created_by": "",
      "last_modified_by": "",
      "client_dev_languages": "",
      "client_dev_frameworks": "",
      "client_widget_frameworks": "",
      "mobile_css_framework": "",
      "desktop_css_framework": "",
      "app_ui_template": "",
      "client_code_pattern": "",
      "server_code_pattern": "",
      "server_dev_lang": "",
      "server_dev_framework": "",
      "server_run_time": "",
      "server_os": "",
      "server_dbms": "",
      "server_deployment_environment": "",
      "global_extensions": "",
      "ui_navigation_styles": "",
      "supported_browsers": "",
      "default_human_language": "english",
      "other_human_languages": "Tamil",
      "entity": "",
      "enforce_documentation": "",
      "widget_count": "",
      "generation_type": "",
      "authorization_type": "",
      "authorizations": "",
      "communication_protocal": "",
      "stand_alone_app": "",
      "application_type": "",
      "lotus_notes_enabled": "",
      "extra_project_info": "nbnbn",
      "lotus_notes_cred_enabled": "",
      "user_deployment_target": "",
      "server_deployment_target": "",
      "created_date": "2019-02-06T14:38:41.894Z",
      "last_modified_date": "2019-02-06T14:38:41.894Z",
      "__v": 0
    },
    {
      "client_os_types": [
        ""
      ],
      "client_device_types": [
        ""
      ],
      "_id": "5c5af1713d785f2a263ab599",
      "name": "nbnbnbn",
      "label": "b",
      "description": "bn",
      "default_module_id": "",
      "default_module_label": "",
      "notes": "",
      "created_by": "",
      "last_modified_by": "",
      "client_dev_languages": "",
      "client_dev_frameworks": "",
      "client_widget_frameworks": "",
      "mobile_css_framework": "",
      "desktop_css_framework": "",
      "app_ui_template": "",
      "client_code_pattern": "",
      "server_code_pattern": "",
      "server_dev_lang": "",
      "server_dev_framework": "",
      "server_run_time": "",
      "server_os": "",
      "server_dbms": "",
      "server_deployment_environment": "",
      "global_extensions": "",
      "ui_navigation_styles": "",
      "supported_browsers": "",
      "default_human_language": "english",
      "other_human_languages": "Tamil",
      "entity": "",
      "enforce_documentation": "",
      "widget_count": "",
      "generation_type": "",
      "authorization_type": "",
      "authorizations": "",
      "communication_protocal": "",
      "stand_alone_app": "",
      "application_type": "",
      "lotus_notes_enabled": "",
      "extra_project_info": "nbnbn",
      "lotus_notes_cred_enabled": "",
      "user_deployment_target": "",
      "server_deployment_target": "",
      "created_date": "2019-02-06T14:38:41.894Z",
      "last_modified_date": "2019-02-06T14:38:41.894Z",
      "__v": 0
    },
    {
      "client_os_types": [
        ""
      ],
      "client_device_types": [
        ""
      ],
      "_id": "5c5af1713d785f2a263ab599",
      "name": "nbnbnbn",
      "label": "b",
      "description": "bn",
      "default_module_id": "",
      "default_module_label": "",
      "notes": "",
      "created_by": "",
      "last_modified_by": "",
      "client_dev_languages": "",
      "client_dev_frameworks": "",
      "client_widget_frameworks": "",
      "mobile_css_framework": "",
      "desktop_css_framework": "",
      "app_ui_template": "",
      "client_code_pattern": "",
      "server_code_pattern": "",
      "server_dev_lang": "",
      "server_dev_framework": "",
      "server_run_time": "",
      "server_os": "",
      "server_dbms": "",
      "server_deployment_environment": "",
      "global_extensions": "",
      "ui_navigation_styles": "",
      "supported_browsers": "",
      "default_human_language": "english",
      "other_human_languages": "Tamil",
      "entity": "",
      "enforce_documentation": "",
      "widget_count": "",
      "generation_type": "",
      "authorization_type": "",
      "authorizations": "",
      "communication_protocal": "",
      "stand_alone_app": "",
      "application_type": "",
      "lotus_notes_enabled": "",
      "extra_project_info": "nbnbn",
      "lotus_notes_cred_enabled": "",
      "user_deployment_target": "",
      "server_deployment_target": "",
      "created_date": "2019-02-06T14:38:41.894Z",
      "last_modified_date": "2019-02-06T14:38:41.894Z",
      "__v": 0
    },
    {
      "client_os_types": [
        ""
      ],
      "client_device_types": [
        ""
      ],
      "_id": "5c5af1713d785f2a263ab599",
      "name": "nbnbnbn",
      "label": "b",
      "description": "bn",
      "default_module_id": "",
      "default_module_label": "",
      "notes": "",
      "created_by": "",
      "last_modified_by": "",
      "client_dev_languages": "",
      "client_dev_frameworks": "",
      "client_widget_frameworks": "",
      "mobile_css_framework": "",
      "desktop_css_framework": "",
      "app_ui_template": "",
      "client_code_pattern": "",
      "server_code_pattern": "",
      "server_dev_lang": "",
      "server_dev_framework": "",
      "server_run_time": "",
      "server_os": "",
      "server_dbms": "",
      "server_deployment_environment": "",
      "global_extensions": "",
      "ui_navigation_styles": "",
      "supported_browsers": "",
      "default_human_language": "english",
      "other_human_languages": "Tamil",
      "entity": "",
      "enforce_documentation": "",
      "widget_count": "",
      "generation_type": "",
      "authorization_type": "",
      "authorizations": "",
      "communication_protocal": "",
      "stand_alone_app": "",
      "application_type": "",
      "lotus_notes_enabled": "",
      "extra_project_info": "nbnbn",
      "lotus_notes_cred_enabled": "",
      "user_deployment_target": "",
      "server_deployment_target": "",
      "created_date": "2019-02-06T14:38:41.894Z",
      "last_modified_date": "2019-02-06T14:38:41.894Z",
      "__v": 0
    },
    {
      "client_os_types": [
        ""
      ],
      "client_device_types": [
        ""
      ],
      "_id": "5c5af1713d785f2a263ab599",
      "name": "nbnbnbn",
      "label": "b",
      "description": "bn",
      "default_module_id": "",
      "default_module_label": "",
      "notes": "",
      "created_by": "",
      "last_modified_by": "",
      "client_dev_languages": "",
      "client_dev_frameworks": "",
      "client_widget_frameworks": "",
      "mobile_css_framework": "",
      "desktop_css_framework": "",
      "app_ui_template": "",
      "client_code_pattern": "",
      "server_code_pattern": "",
      "server_dev_lang": "",
      "server_dev_framework": "",
      "server_run_time": "",
      "server_os": "",
      "server_dbms": "",
      "server_deployment_environment": "",
      "global_extensions": "",
      "ui_navigation_styles": "",
      "supported_browsers": "",
      "default_human_language": "english",
      "other_human_languages": "Tamil",
      "entity": "",
      "enforce_documentation": "",
      "widget_count": "",
      "generation_type": "",
      "authorization_type": "",
      "authorizations": "",
      "communication_protocal": "",
      "stand_alone_app": "",
      "application_type": "",
      "lotus_notes_enabled": "",
      "extra_project_info": "nbnbn",
      "lotus_notes_cred_enabled": "",
      "user_deployment_target": "",
      "server_deployment_target": "",
      "created_date": "2019-02-06T14:38:41.894Z",
      "last_modified_date": "2019-02-06T14:38:41.894Z",
      "__v": 0
    },
    {
      "client_os_types": [
        ""
      ],
      "client_device_types": [
        ""
      ],
      "_id": "5c5af1713d785f2a263ab599",
      "name": "nbnbnbn",
      "label": "b",
      "description": "bn",
      "default_module_id": "",
      "default_module_label": "",
      "notes": "",
      "created_by": "",
      "last_modified_by": "",
      "client_dev_languages": "",
      "client_dev_frameworks": "",
      "client_widget_frameworks": "",
      "mobile_css_framework": "",
      "desktop_css_framework": "",
      "app_ui_template": "",
      "client_code_pattern": "",
      "server_code_pattern": "",
      "server_dev_lang": "",
      "server_dev_framework": "",
      "server_run_time": "",
      "server_os": "",
      "server_dbms": "",
      "server_deployment_environment": "",
      "global_extensions": "",
      "ui_navigation_styles": "",
      "supported_browsers": "",
      "default_human_language": "english",
      "other_human_languages": "Tamil",
      "entity": "",
      "enforce_documentation": "",
      "widget_count": "",
      "generation_type": "",
      "authorization_type": "",
      "authorizations": "",
      "communication_protocal": "",
      "stand_alone_app": "",
      "application_type": "",
      "lotus_notes_enabled": "",
      "extra_project_info": "nbnbn",
      "lotus_notes_cred_enabled": "",
      "user_deployment_target": "",
      "server_deployment_target": "",
      "created_date": "2019-02-06T14:38:41.894Z",
      "last_modified_date": "2019-02-06T14:38:41.894Z",
      "__v": 0
    },
    {
      "client_os_types": [
        ""
      ],
      "client_device_types": [
        ""
      ],
      "_id": "5c5af1713d785f2a263ab599",
      "name": "nbnbnbn",
      "label": "b",
      "description": "bn",
      "default_module_id": "",
      "default_module_label": "",
      "notes": "",
      "created_by": "",
      "last_modified_by": "",
      "client_dev_languages": "",
      "client_dev_frameworks": "",
      "client_widget_frameworks": "",
      "mobile_css_framework": "",
      "desktop_css_framework": "",
      "app_ui_template": "",
      "client_code_pattern": "",
      "server_code_pattern": "",
      "server_dev_lang": "",
      "server_dev_framework": "",
      "server_run_time": "",
      "server_os": "",
      "server_dbms": "",
      "server_deployment_environment": "",
      "global_extensions": "",
      "ui_navigation_styles": "",
      "supported_browsers": "",
      "default_human_language": "english",
      "other_human_languages": "Tamil",
      "entity": "",
      "enforce_documentation": "",
      "widget_count": "",
      "generation_type": "",
      "authorization_type": "",
      "authorizations": "",
      "communication_protocal": "",
      "stand_alone_app": "",
      "application_type": "",
      "lotus_notes_enabled": "",
      "extra_project_info": "nbnbn",
      "lotus_notes_cred_enabled": "",
      "user_deployment_target": "",
      "server_deployment_target": "",
      "created_date": "2019-02-06T14:38:41.894Z",
      "last_modified_date": "2019-02-06T14:38:41.894Z",
      "__v": 0
    },
    {
      "client_os_types": [
        ""
      ],
      "client_device_types": [
        ""
      ],
      "_id": "5c5af1713d785f2a263ab599",
      "name": "nbnbnbn",
      "label": "b",
      "description": "bn",
      "default_module_id": "",
      "default_module_label": "",
      "notes": "",
      "created_by": "",
      "last_modified_by": "",
      "client_dev_languages": "",
      "client_dev_frameworks": "",
      "client_widget_frameworks": "",
      "mobile_css_framework": "",
      "desktop_css_framework": "",
      "app_ui_template": "",
      "client_code_pattern": "",
      "server_code_pattern": "",
      "server_dev_lang": "",
      "server_dev_framework": "",
      "server_run_time": "",
      "server_os": "",
      "server_dbms": "",
      "server_deployment_environment": "",
      "global_extensions": "",
      "ui_navigation_styles": "",
      "supported_browsers": "",
      "default_human_language": "english",
      "other_human_languages": "Tamil",
      "entity": "",
      "enforce_documentation": "",
      "widget_count": "",
      "generation_type": "",
      "authorization_type": "",
      "authorizations": "",
      "communication_protocal": "",
      "stand_alone_app": "",
      "application_type": "",
      "lotus_notes_enabled": "",
      "extra_project_info": "nbnbn",
      "lotus_notes_cred_enabled": "",
      "user_deployment_target": "",
      "server_deployment_target": "",
      "created_date": "2019-02-06T14:38:41.894Z",
      "last_modified_date": "2019-02-06T14:38:41.894Z",
      "__v": 0
    },
    {
      "client_os_types": [
        ""
      ],
      "client_device_types": [
        ""
      ],
      "_id": "5c5af1713d785f2a263ab599",
      "name": "nbnbnbn",
      "label": "b",
      "description": "bn",
      "default_module_id": "",
      "default_module_label": "",
      "notes": "",
      "created_by": "",
      "last_modified_by": "",
      "client_dev_languages": "",
      "client_dev_frameworks": "",
      "client_widget_frameworks": "",
      "mobile_css_framework": "",
      "desktop_css_framework": "",
      "app_ui_template": "",
      "client_code_pattern": "",
      "server_code_pattern": "",
      "server_dev_lang": "",
      "server_dev_framework": "",
      "server_run_time": "",
      "server_os": "",
      "server_dbms": "",
      "server_deployment_environment": "",
      "global_extensions": "",
      "ui_navigation_styles": "",
      "supported_browsers": "",
      "default_human_language": "english",
      "other_human_languages": "Tamil",
      "entity": "",
      "enforce_documentation": "",
      "widget_count": "",
      "generation_type": "",
      "authorization_type": "",
      "authorizations": "",
      "communication_protocal": "",
      "stand_alone_app": "",
      "application_type": "",
      "lotus_notes_enabled": "",
      "extra_project_info": "nbnbn",
      "lotus_notes_cred_enabled": "",
      "user_deployment_target": "",
      "server_deployment_target": "",
      "created_date": "2019-02-06T14:38:41.894Z",
      "last_modified_date": "2019-02-06T14:38:41.894Z",
      "__v": 0
    },
    {
      "client_os_types": [
        ""
      ],
      "client_device_types": [
        ""
      ],
      "_id": "5c5af1713d785f2a263ab599",
      "name": "nbnbnbn",
      "label": "b",
      "description": "bn",
      "default_module_id": "",
      "default_module_label": "",
      "notes": "",
      "created_by": "",
      "last_modified_by": "",
      "client_dev_languages": "",
      "client_dev_frameworks": "",
      "client_widget_frameworks": "",
      "mobile_css_framework": "",
      "desktop_css_framework": "",
      "app_ui_template": "",
      "client_code_pattern": "",
      "server_code_pattern": "",
      "server_dev_lang": "",
      "server_dev_framework": "",
      "server_run_time": "",
      "server_os": "",
      "server_dbms": "",
      "server_deployment_environment": "",
      "global_extensions": "",
      "ui_navigation_styles": "",
      "supported_browsers": "",
      "default_human_language": "english",
      "other_human_languages": "Tamil",
      "entity": "",
      "enforce_documentation": "",
      "widget_count": "",
      "generation_type": "",
      "authorization_type": "",
      "authorizations": "",
      "communication_protocal": "",
      "stand_alone_app": "",
      "application_type": "",
      "lotus_notes_enabled": "",
      "extra_project_info": "nbnbn",
      "lotus_notes_cred_enabled": "",
      "user_deployment_target": "",
      "server_deployment_target": "",
      "created_date": "2019-02-06T14:38:41.894Z",
      "last_modified_date": "2019-02-06T14:38:41.894Z",
      "__v": 0
    },
    {
      "client_os_types": [
        ""
      ],
      "client_device_types": [
        ""
      ],
      "_id": "5c5af1713d785f2a263ab599",
      "name": "nbnbnbn",
      "label": "b",
      "description": "bn",
      "default_module_id": "",
      "default_module_label": "",
      "notes": "",
      "created_by": "",
      "last_modified_by": "",
      "client_dev_languages": "",
      "client_dev_frameworks": "",
      "client_widget_frameworks": "",
      "mobile_css_framework": "",
      "desktop_css_framework": "",
      "app_ui_template": "",
      "client_code_pattern": "",
      "server_code_pattern": "",
      "server_dev_lang": "",
      "server_dev_framework": "",
      "server_run_time": "",
      "server_os": "",
      "server_dbms": "",
      "server_deployment_environment": "",
      "global_extensions": "",
      "ui_navigation_styles": "",
      "supported_browsers": "",
      "default_human_language": "english",
      "other_human_languages": "Tamil",
      "entity": "",
      "enforce_documentation": "",
      "widget_count": "",
      "generation_type": "",
      "authorization_type": "",
      "authorizations": "",
      "communication_protocal": "",
      "stand_alone_app": "",
      "application_type": "",
      "lotus_notes_enabled": "",
      "extra_project_info": "nbnbn",
      "lotus_notes_cred_enabled": "",
      "user_deployment_target": "",
      "server_deployment_target": "",
      "created_date": "2019-02-06T14:38:41.894Z",
      "last_modified_date": "2019-02-06T14:38:41.894Z",
      "__v": 0
    },
    {
      "client_os_types": [
        ""
      ],
      "client_device_types": [
        ""
      ],
      "_id": "5c5af1713d785f2a263ab599",
      "name": "nbnbnbn",
      "label": "b",
      "description": "bn",
      "default_module_id": "",
      "default_module_label": "",
      "notes": "",
      "created_by": "",
      "last_modified_by": "",
      "client_dev_languages": "",
      "client_dev_frameworks": "",
      "client_widget_frameworks": "",
      "mobile_css_framework": "",
      "desktop_css_framework": "",
      "app_ui_template": "",
      "client_code_pattern": "",
      "server_code_pattern": "",
      "server_dev_lang": "",
      "server_dev_framework": "",
      "server_run_time": "",
      "server_os": "",
      "server_dbms": "",
      "server_deployment_environment": "",
      "global_extensions": "",
      "ui_navigation_styles": "",
      "supported_browsers": "",
      "default_human_language": "english",
      "other_human_languages": "Tamil",
      "entity": "",
      "enforce_documentation": "",
      "widget_count": "",
      "generation_type": "",
      "authorization_type": "",
      "authorizations": "",
      "communication_protocal": "",
      "stand_alone_app": "",
      "application_type": "",
      "lotus_notes_enabled": "",
      "extra_project_info": "nbnbn",
      "lotus_notes_cred_enabled": "",
      "user_deployment_target": "",
      "server_deployment_target": "",
      "created_date": "2019-02-06T14:38:41.894Z",
      "last_modified_date": "2019-02-06T14:38:41.894Z",
      "__v": 0
    },
    {
      "client_os_types": [
        ""
      ],
      "client_device_types": [
        ""
      ],
      "_id": "5c5af1713d785f2a263ab599",
      "name": "nbnbnbn",
      "label": "b",
      "description": "bn",
      "default_module_id": "",
      "default_module_label": "",
      "notes": "",
      "created_by": "",
      "last_modified_by": "",
      "client_dev_languages": "",
      "client_dev_frameworks": "",
      "client_widget_frameworks": "",
      "mobile_css_framework": "",
      "desktop_css_framework": "",
      "app_ui_template": "",
      "client_code_pattern": "",
      "server_code_pattern": "",
      "server_dev_lang": "",
      "server_dev_framework": "",
      "server_run_time": "",
      "server_os": "",
      "server_dbms": "",
      "server_deployment_environment": "",
      "global_extensions": "",
      "ui_navigation_styles": "",
      "supported_browsers": "",
      "default_human_language": "english",
      "other_human_languages": "Tamil",
      "entity": "",
      "enforce_documentation": "",
      "widget_count": "",
      "generation_type": "",
      "authorization_type": "",
      "authorizations": "",
      "communication_protocal": "",
      "stand_alone_app": "",
      "application_type": "",
      "lotus_notes_enabled": "",
      "extra_project_info": "nbnbn",
      "lotus_notes_cred_enabled": "",
      "user_deployment_target": "",
      "server_deployment_target": "",
      "created_date": "2019-02-06T14:38:41.894Z",
      "last_modified_date": "2019-02-06T14:38:41.894Z",
      "__v": 0
    },
    {
      "client_os_types": [
        ""
      ],
      "client_device_types": [
        ""
      ],
      "_id": "5c5af1713d785f2a263ab599",
      "name": "nbnbnbn",
      "label": "b",
      "description": "bn",
      "default_module_id": "",
      "default_module_label": "",
      "notes": "",
      "created_by": "",
      "last_modified_by": "",
      "client_dev_languages": "",
      "client_dev_frameworks": "",
      "client_widget_frameworks": "",
      "mobile_css_framework": "",
      "desktop_css_framework": "",
      "app_ui_template": "",
      "client_code_pattern": "",
      "server_code_pattern": "",
      "server_dev_lang": "",
      "server_dev_framework": "",
      "server_run_time": "",
      "server_os": "",
      "server_dbms": "",
      "server_deployment_environment": "",
      "global_extensions": "",
      "ui_navigation_styles": "",
      "supported_browsers": "",
      "default_human_language": "english",
      "other_human_languages": "Tamil",
      "entity": "",
      "enforce_documentation": "",
      "widget_count": "",
      "generation_type": "",
      "authorization_type": "",
      "authorizations": "",
      "communication_protocal": "",
      "stand_alone_app": "",
      "application_type": "",
      "lotus_notes_enabled": "",
      "extra_project_info": "nbnbn",
      "lotus_notes_cred_enabled": "",
      "user_deployment_target": "",
      "server_deployment_target": "",
      "created_date": "2019-02-06T14:38:41.894Z",
      "last_modified_date": "2019-02-06T14:38:41.894Z",
      "__v": 0
    },
    {
      "client_os_types": [
        ""
      ],
      "client_device_types": [
        ""
      ],
      "_id": "5c5af1713d785f2a263ab599",
      "name": "nbnbnbn",
      "label": "b",
      "description": "bn",
      "default_module_id": "",
      "default_module_label": "",
      "notes": "",
      "created_by": "",
      "last_modified_by": "",
      "client_dev_languages": "",
      "client_dev_frameworks": "",
      "client_widget_frameworks": "",
      "mobile_css_framework": "",
      "desktop_css_framework": "",
      "app_ui_template": "",
      "client_code_pattern": "",
      "server_code_pattern": "",
      "server_dev_lang": "",
      "server_dev_framework": "",
      "server_run_time": "",
      "server_os": "",
      "server_dbms": "",
      "server_deployment_environment": "",
      "global_extensions": "",
      "ui_navigation_styles": "",
      "supported_browsers": "",
      "default_human_language": "english",
      "other_human_languages": "Tamil",
      "entity": "",
      "enforce_documentation": "",
      "widget_count": "",
      "generation_type": "",
      "authorization_type": "",
      "authorizations": "",
      "communication_protocal": "",
      "stand_alone_app": "",
      "application_type": "",
      "lotus_notes_enabled": "",
      "extra_project_info": "nbnbn",
      "lotus_notes_cred_enabled": "",
      "user_deployment_target": "",
      "server_deployment_target": "",
      "created_date": "2019-02-06T14:38:41.894Z",
      "last_modified_date": "2019-02-06T14:38:41.894Z",
      "__v": 0
    },
    {
      "client_os_types": [
        ""
      ],
      "client_device_types": [
        ""
      ],
      "_id": "5c5af1713d785f2a263ab599",
      "name": "nbnbnbn",
      "label": "b",
      "description": "bn",
      "default_module_id": "",
      "default_module_label": "",
      "notes": "",
      "created_by": "",
      "last_modified_by": "",
      "client_dev_languages": "",
      "client_dev_frameworks": "",
      "client_widget_frameworks": "",
      "mobile_css_framework": "",
      "desktop_css_framework": "",
      "app_ui_template": "",
      "client_code_pattern": "",
      "server_code_pattern": "",
      "server_dev_lang": "",
      "server_dev_framework": "",
      "server_run_time": "",
      "server_os": "",
      "server_dbms": "",
      "server_deployment_environment": "",
      "global_extensions": "",
      "ui_navigation_styles": "",
      "supported_browsers": "",
      "default_human_language": "english",
      "other_human_languages": "Tamil",
      "entity": "",
      "enforce_documentation": "",
      "widget_count": "",
      "generation_type": "",
      "authorization_type": "",
      "authorizations": "",
      "communication_protocal": "",
      "stand_alone_app": "",
      "application_type": "",
      "lotus_notes_enabled": "",
      "extra_project_info": "nbnbn",
      "lotus_notes_cred_enabled": "",
      "user_deployment_target": "",
      "server_deployment_target": "",
      "created_date": "2019-02-06T14:38:41.894Z",
      "last_modified_date": "2019-02-06T14:38:41.894Z",
      "__v": 0
    }
  ]

  constructor(private formBuilder: FormBuilder, private data: AppComponentService, private projectsService: ProjectsService) { }

  ngOnInit() {
    this.getAllMyProjects();
    this.createProject = this.formBuilder.group({
      name: ['', Validators.required],
      label: ['', Validators.required],
      appContext: '',
      description: '',
      primaryLanguage: ['', Validators.required],
      secondaryLanguage: [''],
    });
  }
  openModal() {
    this.displayModel = 'block';
  }
  onCloseHandled() {
    this.displayModel = 'none';
    this.submitted = false;
    this.createProject.clearValidators();
    this.createProject.reset();
  }

  get form_control() { return this.createProject.controls; }

  projectCreate() {
    this.submitted = true;
    if (this.createProject.invalid) {
      return;
    }
    let dataToSave = {
      name: this.createProject.value.name,
      label: this.createProject.value.label,
      description: this.createProject.value.description,
      default_module_id: null,
      default_module_label: null,
      notes: null,
      created_by: null,
      created_any: null,
      last_modified_by: null,
      last_modified_any: null,
      client_os_types: null,
      client_device_types: null,
      client_dev_languages: null,
      client_dev_frameworks: null,
      client_widget_frameworks: null,
      mobile_css_framework: null,
      desktop_css_framework: null,
      app_ui_template: null,
      client_code_pattern: null,
      server_code_pattern: null,
      server_dev_lang: null,
      server_dev_framework: null,
      server_run_time: null,
      server_os: null,
      server_dbms: null,
      server_deployment_environment: null,
      global_extensions: null,
      ui_navigation_styles: null,
      supported_browsers: null,
      default_human_language: this.createProject.value.primaryLanguage,
      other_human_languages: this.createProject.value.secondaryLanguage,
      entity: null,
      enforce_documentation: null,
      widget_count: null,
      generation_type: null,
      authorization_type: null,
      authorizations: null,
      communication_protocal: null,
      stand_alone_app: null,
      application_type: null,
      lotus_notes_enabled: null,
      extra_project_info: this.createProject.value.appContext,
      lotus_notes_cred_enabled: null,
      user_deployment_target: null,
      server_deployment_target: null,
    }

    this.projectsService.addProject(dataToSave).subscribe(data => {
      console.log("data", data);
      this.getAllMyProjects();
    }, error => {
      console.log('Check the browser console to see more info.', 'Error!');
    });
    this.onCloseHandled();
    this.getAllMyProjects();
  }
  getAllMyProjects() {
    this.projectsService.getMyAllProjects().subscribe(data => {
      // this.myAllProjects = data
      console.log("data", this.myAllProjects);
    }, error => {
      console.log('Check the browser console to see more info.', 'Error!');
    });
  }
}
