import { Component, ViewChild, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('content') content: ElementRef;

  downloadPDF() {
    const doc = new jsPDF();
    const specialElementHandlers = {
      '#editor': function (element, renderer) {
        return true;
      }
    };

    const content = this.content.nativeElement;

    doc.fromHTML(content.innerHTML, 15, 15, {
      'width': 190,
      'elementHandlers': specialElementHandlers
    });

    doc.save('teste.pdf');
  }
}
