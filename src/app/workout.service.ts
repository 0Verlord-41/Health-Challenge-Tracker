import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  constructor() { }

  private localStorageKey = 'workoutData';

  setWorkoutData(data: any) {
    let workoutData = this.getWorkoutData();
    workoutData.push(data);
    localStorage.setItem(this.localStorageKey, JSON.stringify(workoutData));
  }

  getWorkoutData() {
    return JSON.parse(localStorage.getItem(this.localStorageKey) || '[]');
  }

  clearWorkoutData() {
    localStorage.removeItem(this.localStorageKey);
  }
}
