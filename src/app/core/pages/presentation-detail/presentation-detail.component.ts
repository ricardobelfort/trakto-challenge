import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-presentation-detail',
  templateUrl: './presentation-detail.component.html',
  styleUrls: ['./presentation-detail.component.scss'],
})
export class PresentationDetailComponent implements OnInit {
  design: any;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.design = this.route.snapshot.data['design'];
  }

  goBack() {
    window.history.back();
  }

  onLogout(): void {
    this.authService.logout();
  }
}
