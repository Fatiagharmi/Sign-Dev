import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-unit-detail',
  templateUrl: './unit-detail.component.html',
  styleUrls: ['./unit-detail.component.scss'],
  providers: [MessageService],
})
export class UnitDetailComponent implements OnInit {
  isOpen = false;

  studentList = [
    { firstname: 'Fatima', lastname: 'AGHARMI', imgPath: '/assets/img/Pdp.png' },
    { firstname: 'Prénom', lastname: 'Nom', imgPath: '/assets/img/Pdp.png' },
    { firstname: 'Prénom', lastname: 'Nom', imgPath: '/assets/img/Pdp.png' },
    { firstname: 'Prénom', lastname: 'Nom', imgPath: '/assets/img/Pdp.png' },
    { firstname: 'Prénom', lastname: 'Nom', imgPath: '/assets/img/Pdp.png' },
    { firstname: 'Prénom', lastname: 'Nom', imgPath: '/assets/img/Pdp.png' },
    { firstname: 'Prénom', lastname: 'Nom', imgPath: '/assets/img/Pdp.png' },
    { firstname: 'Prénom', lastname: 'Nom', imgPath: '/assets/img/Pdp.png' },
    { firstname: 'Prénom', lastname: 'Nom', imgPath: '/assets/img/Pdp.png' },
    { firstname: 'Prénom', lastname: 'Nom', imgPath: '/assets/img/Pdp.png' },
    { firstname: 'Prénom', lastname: 'Nom', imgPath: '/assets/img/Pdp.png' },
    { firstname: 'Prénom', lastname: 'Nom', imgPath: '/assets/img/Pdp.png' },
  ];

  constructor(private router: Router, private messageService: MessageService) {}

  ngOnInit(): void {}

  openUnit() {
    this.isOpen = true;
  }

  toQrcodeView() {
    this.router.navigateByUrl('/qrCode');
  }

  toSigningView() {
    this.router.navigateByUrl('/signature');
  }

  toUnitsView() {
    this.router.navigateByUrl('/unitBoard');
  }

  sendEmail() {
    this.messageService.add({ severity: 'success', summary: 'Emails envoyés', detail: 'Les emails ont été correctement envoyés' });
  }

  endUnit() {
    console.log('end');
    
  }
}
