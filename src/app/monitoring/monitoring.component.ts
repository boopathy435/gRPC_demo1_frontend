import { Component, OnInit } from '@angular/core';
import { MonitoringServiceClient } from '../../protos/monitoring_pb_service';
import { MonitoringRequest, MonitoringData } from '../../protos/monitoring_pb';
import { grpc } from '@improbable-eng/grpc-web';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-monitoring',
  templateUrl: './monitoring.component.html',
  imports: [RouterModule,CommonModule],
})
export class MonitoringComponent implements OnInit {
  monitoringData: MonitoringData[] = [];
  client: MonitoringServiceClient;

  constructor() {
    this.client = new MonitoringServiceClient('http://localhost:9998');
  }

  ngOnInit(): void {
    this.fetchMonitoringData();
  }

  fetchMonitoringData() {
    const request = new MonitoringRequest();
    request.setStarttime('2024-01-01T00:00:00Z');
    request.setEndtime('2024-01-02T00:00:00Z');

    const stream = this.client.getMonitoringData(request);
    stream.on('data', (data: MonitoringData) => {
      this.monitoringData.push(data);
    });

    stream.on('end', () => {
      console.log('Data stream ended.');
    });
  }
}
