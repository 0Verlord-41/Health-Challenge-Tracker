# HealthChallengeTracker

✅ This is the hosted application [Link](https://0verlord-41.github.io/Health-Challenge-Tracker/)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test --code-coverage` to execute the unit tests via [Karma](https://karma-runner.github.io).

## 100% code Coverage for the Component input-form and service workout

![Code-Coverage](https://github.com/user-attachments/assets/89215235-693e-493f-85e2-cbfee3e38658)

![Coverage100](https://github.com/user-attachments/assets/5375a5ec-f3de-4444-8b69-0b11b2fbe985)

- input-form
![component](https://github.com/user-attachments/assets/cfe76de2-c292-4076-8c33-203d43468e18)

- workout service
![service](https://github.com/user-attachments/assets/b5dd09bb-d670-45a0-adfc-c1fd9d923c46)

## Edge Cases

1. __Empty Inputs__: The input-form uses Angular Material form fields with required attributes, ensuring that the form cannot be submitted with empty fields.
2. __Duplicate Entries__: The aggregateData method in the display component combines workouts for the same user, updating the workout count and total minutes.
3. __Case Sensitivity__: The getFilteredData method converts the user name to lowercase, ensuring case-insensitive search.
4. __Invalid Data Types__: The form ensures workout minutes are a number using the number type input.
