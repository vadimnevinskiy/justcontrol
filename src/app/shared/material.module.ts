import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSliderModule} from '@angular/material/slider';
import {MatSelectModule} from '@angular/material/select';

import {FilterPipe} from './pipes/filter.pipe';

const MaterialComponents = [
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatSliderModule,
  MatInputModule,
  MatSelectModule
];


@NgModule({
  imports: [
    MaterialComponents
  ],
  exports: [
    MaterialComponents,
    FilterPipe
  ],
  declarations: [FilterPipe]
})
export class MaterialModule { }
