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
import { DetectBrowserComponent } from './detect-browser/detect-browser.component';

// var option = { resGetPath: 'locales/__lng__/__ns__.json' };
const i18nextOptions = {
  whitelist: ['en','ta','es'],
  fallbackLng: 'en',
  debug: true, // set debug?
  returnEmptyString: false,
  ns: [
    'translation',
    'validation',
    'error'
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
      return 'assets/locales/{{lng}}/{{ns}}.json';
    }
   
  },
  detection: {
    order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
    
      // keys or params to lookup language from
      lookupQuerystring: 'lng',
      lookupCookie: 'i18next',
      lookupLocalStorage: 'i18nextLng',
      lookupFromPathIndex: 0,
      lookupFromSubdomainIndex: 0,
    
      // cache user language on
      caches: ['cookie'],
      excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)
    
      // optional expire and domain for set cookie
      cookieMinutes: 10,
      cookieDomain: 'myDomain',
    
      // optional htmlTag with lang attribute, the default is:
      htmlTag: document.documentElement
  }
};

export function appInit(i18next: ITranslationService) {
  return () => {
    console.log(i18nextLanguageDetector)
    let promise: Promise<I18NextLoadResult> = i18next
      .use(i18nextXHRBackend)
      .use(i18nextLanguageDetector)
      .init(i18nextOptions);
    return promise;
  };
}

export function localeIdFactory(i18next: ITranslationService)  {
  console.log("checkudhaya",i18next.language)
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
    HeaderLanguageComponent,
    DetectBrowserComponent
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
  constructor(public appRef: ApplicationRef) { }
 }
