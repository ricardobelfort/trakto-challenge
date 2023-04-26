import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { DesignService } from '../../services/design.service';

@Component({
  selector: 'app-presentation-list',
  templateUrl: './presentation-list.component.html',
  styleUrls: ['./presentation-list.component.scss'],
})
export class PresentationListComponent implements OnInit {
  designs: any[] = [];

  constructor(
    private designService: DesignService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.getAllDesigns();
  }

  getAllDesigns() {
    this.designService
      .findAllDesigns()
      .subscribe((res) => (this.designs = res.data));
  }

  goBack() {
    window.history.back();
  }

  onLogout(): void {
    this.authService.logout();
  }
}
