import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4core from "@amcharts/amcharts4/core";
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements  AfterViewInit {
  name = 'Angular';
  type: any = 'XYChart';
  data: any[];
  axisX: am4charts.CategoryAxis;
  columnSeriesOne: am4charts.ColumnSeries;
  columnSeriesTwo: am4charts.ColumnSeries;
  axisY: am4charts.ValueAxis;
  series: am4charts.Series[] = [];
  @ViewChild('charRef') charRef: ElementRef | undefined;
  private chart: am4charts.Chart;


  constructor() {
    this.data = [{
      "country": "Lithuania",
      "litres": 501.9,
      "food": 600
    }, {
      "country": "Czech Republic",
      "litres": 301.9,
      "food": 500
    }, {
      "country": "Ireland",
      "litres": 201.1,
      "food": 300
    }, {
      "country": "Germany",
      "litres": 165.8,
      "food": 200
    }, {
      "country": "Australia",
      "litres": 139.9,
      "food": 200
    }, {
      "country": "Austria",
      "litres": 128.3,
      "food": 400
    }, {
      "country": "UK",
      "litres": 99,
      "food": 200
    }, {
      "country": "Belgium",
      "litres": 60,
      "food": 150
    }, {
      "country": "The Netherlands",
      "litres": 50,
      "food": 100
    }];
    this.axisX = new am4charts.CategoryAxis();
    this.axisX.dataFields.category = "country";
    this.axisY = new am4charts.ValueAxis();
    //series 1
    this.columnSeriesOne = new am4charts.ColumnSeries();
    this.columnSeriesOne.dataFields.valueY = "litres";
    this.columnSeriesOne.dataFields.categoryX = "country";
    this.columnSeriesOne.stacked = true;
    //series 2
    this.columnSeriesTwo = new am4charts.ColumnSeries();
    this.columnSeriesTwo.dataFields.valueY = "litres";
    this.columnSeriesTwo.dataFields.categoryX = "country";
    this.columnSeriesTwo.stacked = true;
    this.series.push(this.columnSeriesOne);
    this.series.push(this.columnSeriesTwo);
  }

  ngAfterViewInit() {
    const chart: am4charts.XYChart = am4core.create(this.charRef?.nativeElement, am4charts['XYChart']);
    chart.xAxes.push(this.axisX);
    chart.yAxes.push(this.axisY);
    this.series.forEach((s: any) => chart.series.push(s));
    chart.data = this.data;
    this.chart = chart;
  }

  public changeSeriesOneColor(color: string = "#ff0000"): void {
    this.columnSeriesOne.columns.template.stroke = am4core.color(color); // red outline
    this.columnSeriesOne.columns.template.fill = am4core.color(color);
  }

  public changeSeriesTwoColor(color: string = "#ff0000"): void {
    this.columnSeriesTwo.columns.template.stroke = am4core.color(color); // red outline
    this.columnSeriesTwo.columns.template.fill = am4core.color(color);
  }
}
