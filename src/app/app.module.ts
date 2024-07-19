import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material Modules
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

// PrimeNG Modules
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { InputFormComponent } from './input-form/input-form.component';
import { WorkoutListComponent } from './workout-list/workout-list.component';
import { WorkoutService } from './workout.service';

@NgModule({
  declarations: [
    AppComponent,
    InputFormComponent,
    WorkoutListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    TableModule,
    PaginatorModule
  ],
  providers: [
    provideAnimationsAsync(),
    WorkoutService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
