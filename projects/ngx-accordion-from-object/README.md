## Accordion From Object
Makes Accordions using Array of Object. It can assure multiple or single accordion be opened based on user input 


## Working Example
[View Demo](https://stackblitz.com/edit/accordion-from-object?embed=1&file=src/app/app.component.ts)

## Installation
```bash
npm i ngx-accordion-from-object
```
## Usage

In `App module` import accordion module
```python
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxAccordionFromObjectModule } from 'ngx-accordion-from-object'
...

imports: [...
    BrowserAnimationModule
    NgxAccordionFromObjectModule
  ]
```
In the `component`
```python
<accordion-from-object [heading]="'Accordion Tab Header'" 
[openMultiple]="true" 
[accordionObject]="object" 
[tabField]="'name'"
[tabValue]="'data'">
</accordion-from-object>
```

Sample Object for accordionObject
```python
object = [{
    name: 'Heading1',
    data: 'This is sample accordion'
  },
  {
    name: 'Heading2',
    data: 'This is sample accordion'
  },
  {
    name: 'Heading3',
    data: 'This is sample accordion'
  }
]
```

## Inputs
| Input | Description |
| ----- | ----------- |
| accordionObject |  Array of objects for accordion component |
| tabField | String - Key value to be taken from Object as Accordion Title |
| tabVlaue | String - Key value to be taken from Object as content of Accordion |
| openMultiple | Set true to keep multiple tabs active. Default false |

## Dependencies
The only dependency is Bootstrap 4 CSS
