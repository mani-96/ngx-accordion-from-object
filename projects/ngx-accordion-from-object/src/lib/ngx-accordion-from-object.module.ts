import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { NgxAccordionFromObjectComponent, AccordionTab } from './ngx-accordion-from-object.component';

@NgModule({
  declarations: [NgxAccordionFromObjectComponent, AccordionTab],
  imports: [ CommonModule ],
  exports: [NgxAccordionFromObjectComponent, AccordionTab]
})
export class NgxAccordionFromObjectModule { }
