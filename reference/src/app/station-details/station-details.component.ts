import { Station } from '../station';
import { Component, OnInit, Input } from '@angular/core';
import { StationServiceService } from '../station-service.service';
import { StationListComponent } from '../station-list/station-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-station-details',
  templateUrl: './station-details.component.html',
  styleUrls: ['./station-details.component.css']
})
export class StationDetailsComponent implements OnInit {

  id: number;
  station: Station;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private stationService: StationServiceService) { }

  ngOnInit() {
    this.station = new Station();

    this.id = this.route.snapshot.params.id;

    this.stationService.getStation(this.id)
      .subscribe(data => {
        this.station = data;
      }, error => console.log(error));
  }

  list() {
    this.router.navigate(['stations']);
  }
}
