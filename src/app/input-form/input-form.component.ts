import { Component, Output, EventEmitter } from '@angular/core';
import { WorkoutService } from '../workout.service';
import { Workout } from '../workout';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrl: './input-form.component.css'
})

export class InputFormComponent {
  workout: Workout = {
    userName: '',
    workoutType: '',
    workoutMinutes: null
  };

  workoutTypes: string[] = ['Running', 'Swimming', 'Cycling', 'Yoga', 'Pushups', 'Lunges', 'Crunches', 'Weightlifting'];

  @Output() formSubmitted = new EventEmitter<void>();

  constructor(private workoutService: WorkoutService) {}

  onSubmit() {
    if (this.workout.workoutMinutes !== null) {
      this.workoutService.setWorkoutData(this.workout);
      this.workout = {
        userName: '',
        workoutType: '',
        workoutMinutes: null
      };
      this.formSubmitted.emit();
    }
  }
}
