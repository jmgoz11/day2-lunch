import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReduxDemoComponent } from './redux-demo.component';
import { StoreModule } from '@ngrx/store';
import { FEATURE_NAME, reducers } from './state';
import { CountByComponent } from './components/count-by/count-by.component';

@NgModule({
  declarations: [ReduxDemoComponent, CountByComponent],
  imports: [CommonModule, StoreModule.forFeature(FEATURE_NAME, reducers)],
  exports: [ReduxDemoComponent],
})
export class ReduxDemoModule {}
