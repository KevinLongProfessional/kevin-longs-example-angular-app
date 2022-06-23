import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DinoListComponent } from './dino-list/dino-list.component';
import { DinoDetailsComponent } from './dino-details/dino-details.component';
import { NewDinoComponent } from './new-dino/new-dino.component';


const routes: Routes = [ 
{ path: '', component: DinoListComponent },
{ path: 'dinosaur/:dinoId', component: DinoDetailsComponent },
{ path: 'new', component: NewDinoComponent }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
