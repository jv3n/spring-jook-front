import { Component } from '@angular/core';
import { Table } from '@shared/components/graphical/table/table.component';
import { GlobeComponent } from '@shared/components/graphical/globe/globe.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [Table, GlobeComponent],
})
export class HomeComponent {}
