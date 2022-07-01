import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qr-code-view',
  templateUrl: './qr-code-view.component.html',
  styleUrls: ['./qr-code-view.component.scss'],
})
export class QrCodeViewComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  toUnitView() {
    this.router.navigateByUrl('/unitDetail');
  }
}
