import { Component, OnInit, AfterViewInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { DoctorService } from 'src/service/doctor.service';
import { Doctor } from 'src/service/doctor';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  doctors: Doctor[] = [];

  constructor(private doctorService: DoctorService) {}

  ngAfterViewInit(): void {
    this.createChart();
  }

  createChart(): void {
    const canvas: any = document.getElementById('chartCanvas');
    const ctx = canvas.getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          { label: 'Number of Patients', data: [65, 59, 80, 81, 56, 55, 40] },
          { label: 'Number of Appointments', data: [28, 48, 40, 19, 86, 27, 90] }
        ]
      },
      options: {
        responsive: true
      }
    });
  }

  ngOnInit(): void {
    this.fetchDoctorDetails();
    this.renderPieChart();
  }

  fetchDoctorDetails(): void {
    this.doctorService.getDoctorData().subscribe(
      (data: Doctor[]) => {
        this.doctors = data;
      },
      (error: any) => {
        console.log('Error fetching doctor details:', error);
      }
    );
  }
  

  renderPieChart(): void {
    // Pie chart data
    const pieChartData = {
      labels: ['Diseases', 'Antidotes', 'Patients', 'Deaths', 'Cured'],
      datasets: [{
        data: [40, 20, 30, 10, 50],
        backgroundColor: [
          '#F87171',
          '#FBBF24',
          '#60A5FA',
          '#9CA3AF',
          '#34D399',
        ],
      }],
    };

    // Pie chart options
    const pieChartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        position: 'bottom',
      },
    };

    // Get the canvas element
    const pieChartCanvas = document.getElementById('pieChart') as HTMLCanvasElement;

    // Create the pie chart
    const pieChart = new Chart(pieChartCanvas, {
      type: 'pie',
      data: pieChartData,
      options: pieChartOptions,
    });
  }
}
