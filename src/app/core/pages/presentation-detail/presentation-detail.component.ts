import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-presentation-detail',
  templateUrl: './presentation-detail.component.html',
  styleUrls: ['./presentation-detail.component.scss'],
})
export class PresentationDetailComponent implements OnInit {
  design: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.design = this.route.snapshot.data['design'];
  }

  goBack() {
    window.history.back();
  }
}
