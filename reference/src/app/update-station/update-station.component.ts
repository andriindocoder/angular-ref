import { Component, OnInit } from '@angular/core';
import { Station } from '../station';
import { ActivatedRoute, Router } from '@angular/router';
import { StationServiceService } from '../station-service.service';

@Component({
  selector: 'app-update-station',
  templateUrl: './update-station.component.html',
  styleUrls: ['./update-station.component.css']
})
export class UpdateStationComponent implements OnInit {

  id: number;
  station: Station;
  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private stationService: StationServiceService) { }

  ngOnInit() {
    this.station = new Station();

    this.id = this.route.snapshot.params.id;

    this.stationService.getStation(this.id)
      .subscribe(data => {
        console.log(data);
        this.station = data;
      }, error => console.log(error));
  }

  updateStation() {
    this.stationService.updateStation(this.id, this.station)
      .subscribe(data => console.log(data), error => console.log(error));
    this.station = new Station();
    this.gotoList();
  }

  onSubmit() {
    this.updateStation();
  }

  gotoList() {
    this.router.navigate(['/stations']);
  }
}
