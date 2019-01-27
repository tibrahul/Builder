import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { I18NEXT_SERVICE, I18NextLoadResult, I18NextModule, ITranslationService, defaultInterpolationFormat, I18NEXT_NAMESPACE } from 'angular-i18next';
import { APP_INITIALIZER, ApplicationRef, LOCALE_ID } from '@angular/core';
import * as i18nextXHRBackend from 'i18next-xhr-backend';
import * as i18nextLanguageDetector from 'i18next-browser-languagedetector';
import { ValidationMessageModule } from 'angular-validation-message';
import { I18NextValidationMessageModule } from 'angular-validation-message-i18next';
import { HeaderLanguageComponent } from './header-controls/header.language.component';

// var option = { resGetPath: 'locales/__lng__/__ns__.json' };
const i18nextOptions = {
  whitelist: ['en', 'ru'],
  fallbackLng: 'en',
  debug: true, // set debug?
  returnEmptyString: false,
  ns: [
    'translation'
    // 'validation',
    // 'error',

    // 'feature.rich_form'
  ],
  interpolation: {
    format: I18NextModule.interpolationFormat(defaultInterpolationFormat)
  },
  //backend plugin options
  backend: {
    allowMultiLoading: true,
    loadPath: function(langs, ns) { 
      console.log(langs)
      console.log(ns)
      return 'locales/{{lng}}.{{ns}}.json';
    }
   
  },
  // load(languages, namespaces, callback) {
  //   this.prepareLoading(languages, namespaces, {}, callback);
  // },
  // lang detection plugin options
  detection: {
    // order and from where user language should be detected
    order: ['cookie'],

    // keys or params to lookup language from
    lookupCookie: 'lang',

    // cache user language on
    caches: ['cookie'],
  }
};

export function appInit(i18next: ITranslationService) {
  return () => {
    let promise: Promise<I18NextLoadResult> = i18next
      .use(i18nextXHRBackend)
      .use(i18nextLanguageDetector)
      .init(i18nextOptions);
    return promise;
  };
}

export function localeIdFactory(i18next: ITranslationService)  {
  return i18next.language;
}

export const I18N_PROVIDERS = [
  {
    provide: APP_INITIALIZER,
    useFactory: appInit,
    deps: [I18NEXT_SERVICE],
    multi: true
  },
  {
    provide: LOCALE_ID,
    deps: [I18NEXT_SERVICE],
    useFactory: localeIdFactory
  },
];

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    HeaderComponent,
    FooterComponent,
    HeaderLanguageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    I18NextModule.forRoot(),
    ValidationMessageModule,
    I18NextValidationMessageModule,
  ],
  providers: [
    I18N_PROVIDERS,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public appRef: ApplicationRef) {}
 }
