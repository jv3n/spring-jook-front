import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [RouterOutlet, NgClass],
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
export class ViewComponent {
  readonly #route: ActivatedRoute = inject(ActivatedRoute);

  color: string = 'bg-' + (this.#route.snapshot.data['color'] ?? 'primary');
}
