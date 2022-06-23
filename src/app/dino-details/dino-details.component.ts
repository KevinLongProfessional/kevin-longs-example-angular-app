import { Component, OnInit } from '@angular/core';
import { dino, era } from '../dinos';
import { ActivatedRoute } from '@angular/router';
import { DinoService } from '../dino.service';

@Component({
  selector: 'app-dino-details',
  templateUrl: './dino-details.component.html',
  styleUrls: ['./dino-details.component.css'],
})
export class DinoDetailsComponent implements OnInit {
  dinosaur: dino | undefined;
  era: era| undefined;

  ngOnInit() {
    // First get the DINO id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const idFromRoute = Number(routeParams.get('dinoId'));

    // Find the product that correspond with the id provided in route.
      this.dinoService.getDino(idFromRoute)
      .then(r => {
          this.dinoService.getEra(r.data.attributes.Era.data.id).then(r2 => {
            this.dinosaur = this.dinoService.mapIn(r!.data);
            this.era = r2.data.attributes
          })
        });
  }

  constructor(private route: ActivatedRoute, private dinoService: DinoService) {}
}
