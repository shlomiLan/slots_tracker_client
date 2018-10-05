import {Component} from '@angular/core';
import {ApiServiceProvider} from "../../providers/api-service/api-service";
import {Loading, LoadingController, ToastController} from "ionic-angular";
import 'chartjs-plugin-datalabels';


@Component({
  selector: 'page-report',
  templateUrl: 'report.html'
})

export class ReportPage {
  private charts_data: any;
  private loader: Loading;

  constructor(private api: ApiServiceProvider, public loadingCtrl: LoadingController, public toastCtrl: ToastController) {
    // Initialize data
    this.getChartsData();

    this.loader = this.loadingCtrl.create({
      content: 'Loading data'
    });

    this.loader.present();

    // Chart.defaults.global.plugins.datalabels.anchor = 'end';
    // Chart.defaults.global.plugins.datalabels.align = 'end';
    // Chart.defaults.global.legend.display = false;
    // Chart.defaults.global.title.display = true;

  }

  static get_title(): string {
    return 'Report';
  }

  static get_icon(): string {
    return 'stats';
  }

  getChartsData() {
    this.api.getChartsData().subscribe(response => {
      this.charts_data = response;
      this.loader.dismiss();
    }, err => {
      this.loader.dismiss();
      let error_msg = 'In getChartsData: ' + err.error;
      this.toastCtrl.create({
        message: error_msg,
        position: 'top',
        showCloseButton: true,
      }).present();
    });
  }


}
