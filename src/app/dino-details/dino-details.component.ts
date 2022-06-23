import { Component, OnInit } from '@angular/core';
import { dino } from '../dinos';
import { era } from '../eras'
import { ActivatedRoute } from '@angular/router';
import { DinoService } from '../dino.service';
import { EraService } from '../era.service';

@Component({
  selector: 'app-dino-details',
  templateUrl: './dino-details.component.html',
  styleUrls: ['./dino-details.component.css'],
})


export class DinoDetailsComponent implements OnInit {
  dinosaur: dino | undefined;
  era: era| undefined;

  constructor(private route: ActivatedRoute, private dinoService: DinoService, private eraService: EraService) {}

  ngOnInit() {
    // First get the DINO id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const idFromRoute = Number(routeParams.get('dinoId'));

    // Find the product that correspond with the id provided in route.
      this.dinoService.getDino(idFromRoute)
      .then(r => {
          this.eraService.getEra(r.data.attributes.Era.data.id).then(r2 => {
            this.dinosaur = this.dinoService.mapIn(r!.data);
            this.era = r2.data.attributes
          })
        });
  }
}
