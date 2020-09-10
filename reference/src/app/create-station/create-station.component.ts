import { Component, OnInit } from '@angular/core';
import { Station } from '../station';
import { StationServiceService } from '../station-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-station',
  templateUrl: './create-station.component.html',
  styleUrls: ['./create-station.component.css']
})
export class CreateStationComponent implements OnInit {
  station: Station = new Station();
  submitted = false;

  constructor(
    private stationService: StationServiceService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  newStation(): void {
    this.submitted = false;
    this.station = new Station();
  }

  save() {
    this.stationService.createStations(this.station)
      .subscribe(data => console.log(data), error => console.log(error));
    this.station = new Station();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/stations']);
  }

}
