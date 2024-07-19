import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../workout.service';

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrl: './workout-list.component.css'
})
export class WorkoutListComponent implements OnInit {
  workoutData: any[] = [];
  aggregatedData: any[] = [];
  searchUserName: string = '';
  filterWorkoutType: string = '';
  paginatedData: any[] = [];
  rowsPerPage: number = 5;
  first: number = 0;

  constructor(private workoutService: WorkoutService) {}

  // ngOnInit(): void {
  //   this.workoutData = this.workoutService.getWorkoutData();
  // }

  ngOnInit(): void {
    this.refreshData();
  }

  refreshData(): void {
    this.workoutData = this.workoutService.getWorkoutData();
    this.aggregateData();
    this.paginate({ first: 0, rows: this.rowsPerPage });
  }

  aggregateData(): void {
    const groupedData = this.workoutData.reduce((acc, workout) => {
      if (!acc[workout.userName]) {
        acc[workout.userName] = { ...workout, count: 1 };
      } else {
        acc[workout.userName].count++;
        acc[workout.userName].workoutType += `, ${workout.workoutType}`;
        acc[workout.userName].workoutMinutes += workout.workoutMinutes;
      }
      return acc;
    }, {});
    this.aggregatedData = Object.values(groupedData);
  }

  getFilteredData() {
    return this.aggregatedData.filter(item => {
      return (
        (!this.searchUserName || item.userName.toLowerCase().includes(this.searchUserName.toLowerCase())) &&
        (!this.filterWorkoutType || item.workoutType.toLowerCase().includes(this.filterWorkoutType.toLowerCase()))
      );
    });
  }

  paginate(event: any) {
    const filteredData = this.getFilteredData();
    this.paginatedData = filteredData.slice(event.first, event.first + event.rows);
  }
}
