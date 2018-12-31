import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; 
import { NgxAccordionFromObjectComponent, AccordionTab } from './ngx-accordion-from-object.component';

@NgModule({
  declarations: [NgxAccordionFromObjectComponent, AccordionTab],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [NgxAccordionFromObjectComponent, AccordionTab]
})
export class NgxAccordionFromObjectModule { }
