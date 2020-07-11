import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CardDesignComponent} from '../app/Component/card-design/card-design.component'
import {TableComponent} from '../app/Component/table/table.component'
import {ChartComponent} from '../app/Component/chart/chart.component'

const routes: Routes = [
  {path: '', component: CardDesignComponent},
  {path: 'table', component: TableComponent},
  {path: 'chart', component: ChartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
