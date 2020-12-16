import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StartRoutingModule } from './start-routing.module';
import { StartComponent } from './components/start/start.component';


@NgModule({
  declarations: [StartComponent],
  imports: [
    CommonModule,
    StartRoutingModule,
    FlexLayoutModule
  ]
})
export class StartModule { }
