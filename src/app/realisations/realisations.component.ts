import { Component, OnInit } from '@angular/core';
import { RealDataService } from '../real-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-realisations',
  templateUrl: './realisations.component.html',
  styleUrls: ['./realisations.component.css']
})
export class RealisationsComponent implements OnInit {

  // ici on injecte le service RealDataService : nom + type. L'injection permet de
  // déclarer ici l'objet "list"
  constructor(public realdataService: RealDataService, private router: Router) { }

  reals;

  ngOnInit() {
    // le composant est prêt à être utilisé : mettre son code ici
    // l'objet users est alimenté avec l'objet list déclaré dans le service userService
    this.reals = this.realdataService.selectedReal;

  }

  showRealDetail(real, e) {
    e.preventDefault();
     this.realdataService.selectedReal = real ;
     this.router.navigateByUrl('/detail');

  }
}

