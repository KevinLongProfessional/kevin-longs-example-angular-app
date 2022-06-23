import { Component, OnInit } from '@angular/core';
import { dino } from '../dinos';
import { Router } from '@angular/router';
import { DinoService } from "../dino.service"

@Component({
  selector: 'app-new-dino',
  templateUrl: './new-dino.component.html',
  styleUrls: ['./new-dino.component.css']
})
export class NewDinoComponent implements OnInit {
  dinosaur: dino = {id: 0, name: "", fancyName: "", described: undefined, coolness: "", eraId: 1, imageUrl: "https://freepngclipart.com/save-png/81708-dinosaur-photography-little-cartoon-dinosaurs-free-png-hq/4635x2752"};
  constructor(private router: Router, private dinoService: DinoService){ }
  
  ngOnInit(): void {
  }

  AddDino(): void {
    this.dinoService.addDino(this.dinosaur).then(r =>{
      this.router.navigate([""]);
      }
    )
  }
}
