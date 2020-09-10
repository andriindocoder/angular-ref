import { Component, OnInit } from '@angular/core';
import { Station } from '../station';
import { StationServiceService } from '../station-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-station-list',
  templateUrl: './station-list.component.html',
  styleUrls: ['./station-list.component.css']
})
export class StationListComponent implements OnInit {
  stations: Station[];

  constructor(
    private stationService: StationServiceService,
    private router: Router
  ) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(): void {
    this.stationService.getStations()
      .subscribe((response) => {
        console.log(response);
        this.stations = response;
      }, (err) => {
        console.log(err);
      });
  }

  stationDetails(id: number) {
    this.router.navigate(['details-station', id]);
  }

  deleteStation(id: number) {
    this.stationService.deleteStation(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  updateStation(id: number) {
    this.router.navigate(['update-station', id]);
  }

}
