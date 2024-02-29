import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatButton, RouterLink, MatToolbar],
  selector: 'app-header',
  standalone: true,
  styles: `
    .mdc-button ~ .mdc-button {
      margin-left: 1rem;
    }
  `,
  template: `
    <mat-toolbar>
      <button mat-raised-button [routerLink]="'/home'">Home</button>
      <button mat-raised-button [routerLink]="'/countries'">Countries</button>
    </mat-toolbar>
  `,
})
export class HeaderComponent {}
