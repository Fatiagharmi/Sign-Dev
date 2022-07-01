import { Component, ElementRef, ViewChild } from '@angular/core';
import SignaturePad from 'signature_pad';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-signing-view',
  templateUrl: './signing-view.component.html',
  styleUrls: ['./signing-view.component.scss'],
})
export class SigningViewComponent {
  signatureImg!: string;
  signaturePad!: SignaturePad;
  @ViewChild('canvas') canvasEl!: ElementRef;

  signaturePadOptions: Object = {
    minWidth: 2,
    canvasWidth: 700,
    canvasHeight: 300,
  };

  constructor() {}

  ngAfterViewInit() {
    this.signaturePad = new SignaturePad(this.canvasEl.nativeElement);
  }

  startDrawing(event: Event) {
    console.log(event);
    // works in device not in browser
  }

  moved(event: Event) {
    // works in device not in browser
  }

  clearPad() {
    this.signaturePad.clear();
  }

  savePad() {
    const base64Data = this.signaturePad.toDataURL();
    this.signatureImg = base64Data;
  }
}
