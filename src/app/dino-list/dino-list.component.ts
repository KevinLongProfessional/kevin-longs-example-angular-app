import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DinoService } from "../dino.service"
import { dino } from '../dinos';

@Component({
  selector: 'app-dino-list',
  templateUrl: './dino-list.component.html',
  styleUrls: ['./dino-list.component.css'],
})
export class DinoListComponent {
  dinosaurs: dino[] = [];

  constructor(private router: Router, private dinoService: DinoService){  }

  ngOnInit(){
    this.dinoService.getDinos().then(r => this.dinosaurs = this.dinoService.mapInArray(r));
  }

  goToNew(): void {
    this.router.navigate(["/new"]);
  }

  deleteDino($dinoId: number){
    this.dinoService.deleteDino($dinoId).then(r => {
      this.dinoService.getDinos().then(r => this.dinosaurs = this.dinoService.mapInArray(r));
    })
  }

}