import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { InputFormComponent } from './input-form/input-form.component';
import { WorkoutListComponent } from './workout-list/workout-list.component';
import { WorkoutService } from './workout.service';

import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        InputFormComponent,
        WorkoutListComponent
      ],
      imports: [
        RouterModule.forRoot([]),
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        BrowserAnimationsModule,
        TableModule,
        PaginatorModule
      ],
      providers: [WorkoutService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'your-app-title'`, () => {
    expect(component.title).toEqual('Health-Challenge-Tracker');
  });

});
