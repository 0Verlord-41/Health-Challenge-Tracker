import { TestBed } from '@angular/core/testing';
import { WorkoutService } from './workout.service';
import { Workout } from './workout';

describe('WorkoutService', () => {
  let service: WorkoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkoutService);
    localStorage.clear(); // Clear local storage before each test
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set and get workout data', () => {
    const workout: Workout = { userName: 'John', workoutType: 'Running', workoutMinutes: 30 };
    service.setWorkoutData(workout);
    const data = service.getWorkoutData();
    expect(data.length).toBe(1);
    expect(data[0]).toEqual(workout);
  });

  it('should handle multiple workout data', () => {
    const workout1: Workout = { userName: 'John', workoutType: 'Running', workoutMinutes: 30 };
    const workout2: Workout = { userName: 'Jane', workoutType: 'Swimming', workoutMinutes: 45 };
    service.setWorkoutData(workout1);
    service.setWorkoutData(workout2);
    const data = service.getWorkoutData();
    expect(data.length).toBe(2);
    expect(data[0]).toEqual(workout1);
    expect(data[1]).toEqual(workout2);
  });

  it('should clear workout data', () => {
    const workout: Workout = { userName: 'John', workoutType: 'Running', workoutMinutes: 30 };
    service.setWorkoutData(workout);
    service.clearWorkoutData();
    const data = service.getWorkoutData();
    expect(data.length).toBe(0);
  });
});
