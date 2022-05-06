import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pdfview',
  templateUrl: './pdfview.component.html',
  styleUrls: ['./pdfview.component.css'],

})
export class PdfviewComponent implements OnInit {

  constructor() { }
  srcpdf = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
  ngOnInit(): void {
  }

}
