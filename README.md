# SearchRepository

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.6.

Description:
  1. Provided an input with search button 
  2. Enter the repository search string and click of search
  3. On click of search, pass the search string and make an http request to the provided url
          `https://api.github.com/search/repositories?q=`
  4. Get the response array json of the repositories and pick the values 'Full Name', 'Avatar Url', 'Url', 'Score' and 'Description' from the array objects and bind it to html
  
Screenshot 1

![search repo screenshot](https://user-images.githubusercontent.com/15166401/51087042-0770f800-1774-11e9-9b0d-0c9f072f7f2f.PNG)
  
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
