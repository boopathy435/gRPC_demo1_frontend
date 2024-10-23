import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MonitoringComponent } from './monitoring/monitoring.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MonitoringComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'grpc-frontend';
}
