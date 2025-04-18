# MyWebsite

# General Info
Angular 14 application with Scully for pre-rendering and ngx-translate for translations.
Highly optimized for performance, SEO, accessibility and best practice. 
Website deployed in aruba cloud server.
Https connection validated by Let'sEncrypt.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.13.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# NGX TRANSLATE
Run `npm install @ngx-translate/core@14.0.0 @ngx-translate/http-loader@7.0.0` to install ngx trnaslate

# SCULLY
/**NOTE**/
You can run the progect without scully, totally compatible.

Run ` ng add @scullyio/init ` to install scully
  -> add these to your package.json scripts: {
    "scully": "scully --project MyWebsite",
    "scully:serve": "scully serve",
    "scully:build": "npm run build && npm run scully"
  }
  -> make sure a scully.MyWebsite.config.ts file is created in the root and set `outDir: './dist' `
