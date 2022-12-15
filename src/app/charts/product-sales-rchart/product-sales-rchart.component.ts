import { Component } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-product-sales-rchart',
  templateUrl: './product-sales-rchart.component.html',
  styleUrls: ['./product-sales-rchart.component.scss']
})
export class ProductSalesRchartComponent {

 // Radar
 public radarChartOptions: ChartConfiguration['options'] = {
  responsive: true,
};
public radarChartLabels: string[] = [ 'Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running' ];

public radarChartData: ChartData<'radar'> = {
  labels: this.radarChartLabels,
  datasets: [
    { data: [ 65, 59, 90, 81, 56, 55, 40 ], label: 'Series A' },
    { data: [ 28, 48, 40, 19, 96, 27, 100 ], label: 'Series B' }
  ]
};
public radarChartType: ChartType = 'radar';

// events
public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
  console.log(event, active);
}

public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
  console.log(event, active);
}

}
