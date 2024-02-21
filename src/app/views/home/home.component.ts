import { Component } from '@angular/core';
import { Table } from '@shared/components/graphical/table/table.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [Table],
})
export class HomeComponent {}
