import { Component, OnInit, Input, QueryList, ViewChildren, Output, EventEmitter } from '@angular/core';

import { showInn} from './showIn';

@Component({
  selector: 'accordion-tab',
  template: `<div class="row accordion-heading pl-1 pr-1 pb-1 pt-1" (click)="toggle()">    
  <div class="col-11">
      {{tabHeader}}
  </div>    
  <div class="col-1 pr-1 pull-right child-caret" *ngIf="!openTab">
          &#9660;
  </div>    
  <div class="col-1 pr-1 pull-right child-caret" *ngIf="openTab">
      &#9650;
  </div>
</div>
<div @showIn class="row value-body" *ngIf="openTab">
  <div class="col-12 pl-1 pr-1">
      {{tabValue}}
  </div>
</div>`,
  styleUrls: ['./ngx-accordion-from-object.component.scss'],
  animations: [showInn]
})
export class AccordionTab{
  @Input()
  tabHeader;

  @Input()
  tabValue;

  @Input()
  index;

  @Output()
  tabToggle = new EventEmitter<any>();

  openTab = false;

  constructor() {}

  ngOnInit(){
  }

  toggle(){
    this.openTab = !this.openTab
    this.tabToggle.emit({open: this.openTab, index: this.index})
  }
}

@Component({
  selector: 'accordion-from-object',
  template: `<div class="row parent-heading pl-1 pr-1 pt-1 pb-1" (click)="toggle()">
  <div class="col-11">
      {{heading}}
  </div>
  <div class="col-1 pr-1 pull-right parent-caret" *ngIf="!open">
      &#9660;
  </div>    
  <div class="col-1 pr-1 pull-right parent-caret" *ngIf="open">
      &#9650;
  </div>
</div>
<div class="full-width" *ngIf="open">
  <div class="full-width mt-1 pl-1 pr-1" *ngFor="let tab of accordionObject;index as idx">
      <accordion-tab [tabHeader]="tab[tabField]" [tabValue]="tab[tabValue]" [index]="idx" (tabToggle)="tabToggle($event)"></accordion-tab>
  </div>
</div>`,
  styleUrls: ['./ngx-accordion-from-object.component.scss'],
})

export class NgxAccordionFromObjectComponent implements OnInit {
@ViewChildren(AccordionTab) a: QueryList<AccordionTab>
  // Parent Accordion Heading
  @Input()
  heading: string;
  
  // Array of Objects
  @Input()
  accordionObject = [];
  
  // Object key name to be shown as accordion heading
  @Input()
  tabField: string;

  //Object key name to show the accordion value
  @Input()
  tabValue: string;

  @Input()
  openMultiple = false

  open = false

  count = 0;
  currentOpenIndex = null;

  constructor() { }

  ngOnInit() {
      console.log(this.accordionObject);
  }

  toggle(){
    this.open = !this.open;
    this.count = 0;
    this.currentOpenIndex = null;
  }

  tabToggle(event){
    if(!this.openMultiple){
      if(event.open){
        if(!this.count){
          this.currentOpenIndex = event.index;
          this.count++;
        }
        else{
          this.a['_results'][this.currentOpenIndex].openTab = false;
          this.currentOpenIndex = event.index
        }
      } else{
          this.count--
      }
    }
  }

}
