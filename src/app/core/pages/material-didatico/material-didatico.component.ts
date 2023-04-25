import { Component, OnInit } from '@angular/core';
import { DesignService } from '../../services/design.service';

@Component({
  selector: 'app-material-didatico',
  templateUrl: './material-didatico.component.html',
  styleUrls: ['./material-didatico.component.scss'],
})
export class MaterialDidaticoComponent implements OnInit {
  designs: any[] = [];

  constructor(private designService: DesignService) {}

  ngOnInit(): void {
    this.getAllDesigns();
  }

  getAllDesigns() {
    this.designService
      .findAllDesigns()
      .subscribe((res) => (this.designs = res.data));
  }
}
