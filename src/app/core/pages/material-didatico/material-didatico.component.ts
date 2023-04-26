import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { DesignService } from '../../services/design.service';

@Component({
  selector: 'app-material-didatico',
  templateUrl: './material-didatico.component.html',
  styleUrls: ['./material-didatico.component.scss'],
})
export class MaterialDidaticoComponent implements OnInit {
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

  onLogout(): void {
    this.authService.logout();
  }
}
