import { Component, ViewChild} from '@angular/core';
import { WorkoutListComponent } from './workout-list/workout-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Health-Challenge-Tracker';

  @ViewChild(WorkoutListComponent) workoutListComponent!: WorkoutListComponent;

  onFormSubmitted() {
    this.workoutListComponent.refreshData();
  }
}
