import { Component, OnInit } from '@angular/core';
import { DesignService } from '../../services/design.service';

@Component({
  selector: 'app-presentation-list',
  templateUrl: './presentation-list.component.html',
  styleUrls: ['./presentation-list.component.scss'],
})
export class PresentationListComponent implements OnInit {
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
