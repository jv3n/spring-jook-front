import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, NgClass],
  selector: 'app-view',
  standalone: true,
  template: `
    <div>
      <!-- HEADER -->
      <router-outlet name="header" />

      <!-- CONTENT -->
      <main>
        <router-outlet />
      </main>
    </div>
  `,
})
export class ViewComponent {}
