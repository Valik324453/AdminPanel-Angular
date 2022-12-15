import { Component, Input, OnInit } from '@angular/core';
import { ChartType, ChartData, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
//import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss']
})
export class DoughnutChartComponent implements OnInit {
  
  doughnutChartType: ChartType = 'doughnut';

  doughnutChartLabels: BaseChartDirective["labels"] = ['SPD', 'CDU', 'Grüne', "Linke", "FDP", "AFD", "Andere"];

  doughnutChartData: ChartData<"doughnut">[] = [
    {
      labels: this.doughnutChartLabels,
      datasets:
      [
        {
          data:[55,25,20],
          backgroundColor: "red",
          hoverBackgroundColor: "green"
        },
        {
          data:[55,25,20],
          backgroundColor: "pink",
          hoverBackgroundColor: "blue"
        }
      ]
    },
    // {
    //   label: 'Dataset A',
    //   data: [33, 21, 9, 9, 11, 13, 5 ],
    // }, {
    //   label: 'Dataset B',
    //   data: [35, 20, 10, 10, 15, 15, 10 ],
    // }, {
    //   label: 'Dataset C',
    //   data: [40, 15, 5, 15, 20, 5, 20 ],
    // }    
  ];

  doughnutChartOption: ChartOptions = {}    

  ngOnInit() {console.log("ok");
    // this.doughnutChartData.forEach(ds => {
    //   ds.backgroundColor = ['red', 'black', 'green', "purple", "yellow", "blue", "grey"];
    //   ds.hoverBackgroundColor = ["lightgrey", "grey", "lightgrey", "grey","lightgrey", "grey", "lightgrey"];
    // });
  }
}