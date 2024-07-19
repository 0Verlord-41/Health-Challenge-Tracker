import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { InputFormComponent } from './input-form.component';
import { WorkoutService } from '../workout.service';
import { Workout } from '../workout';

describe('InputFormComponent', () => {
  let component: InputFormComponent;
  let fixture: ComponentFixture<InputFormComponent>;
  let workoutService: WorkoutService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputFormComponent],
      imports: [
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        BrowserAnimationsModule
      ],
      providers: [ WorkoutService ]
    })
    .compileComponents();

    workoutService = TestBed.inject(WorkoutService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an empty initial workout', () => {
    expect(component.workout.userName).toBe('');
    expect(component.workout.workoutType).toBe('');
    expect(component.workout.workoutMinutes).toBeNull();
  });

  it('should add workout on submit', () => {
    const workout: Workout = { userName: 'John', workoutType: 'Running', workoutMinutes: 30 };
    component.workout = workout;
    const setWorkoutDataSpy = spyOn(workoutService, 'setWorkoutData').and.callThrough();
    component.onSubmit();
    expect(setWorkoutDataSpy).toHaveBeenCalledWith(workout);
    expect(component.workout.userName).toBe('');
    expect(component.workout.workoutType).toBe('');
    expect(component.workout.workoutMinutes).toBeNull();
  });

  it('should emit formSubmitted event on submit', () => {
    const workout: Workout = { userName: 'John', workoutType: 'Running', workoutMinutes: 30 };
    component.workout = workout;
    spyOn(component.formSubmitted, 'emit');
    component.onSubmit();
    expect(component.formSubmitted.emit).toHaveBeenCalled();
  });
});
