import { Component, effect, ElementRef, inject, Signal, ViewChild } from '@angular/core';
import Globe from 'globe.gl';
import * as d3 from 'd3';
import { JsonLoaderService } from '@shared/components/graphical/globe/globe.service';

@Component({
  selector: 'app-globe',
  template: ` <div #hearth_globe></div>`,
  standalone: true,
})
export class GlobeComponent {
  jsonLoaderService = inject(JsonLoaderService);

  map: Signal<any> = this.jsonLoaderService.loadJSONFile('assets/geo/map.geojson');

  @ViewChild('hearth_globe') container!: ElementRef;

  constructor() {
    effect(() => {
      const colorScale = d3.scaleSequentialSqrt(d3.interpolateYlOrRd);

      // GDP per capita (avoiding countries with small pop)
      // @ts-ignore
      const getVal = (feat) => feat.properties.GDP_MD_EST / Math.max(1e5, feat.properties.POP_EST);

      const maxVal = Math.max(...this.map().features.map(getVal));
      colorScale.domain([0, maxVal]);

      const world: any = Globe()
        .globeImageUrl('assets/geo/earth-night.jpg')
        .lineHoverPrecision(0)
        .polygonsData(this.map().features.filter((d: any) => d.properties.ISO_A2 !== 'AQ'))
        .polygonAltitude(0.06)
        .polygonCapColor((feat) => colorScale(getVal(feat)))
        .polygonSideColor(() => 'rgba(0, 100, 0, 0.15)')
        .polygonStrokeColor(() => '#111')
        .polygonLabel(
          (d: any) => `
          <div style="'background-color:black'">
            <b>${d.properties.ADMIN} (${d.properties.ISO_A2}):</b> <br />
            GDP: <i>${d.properties.GDP_MD_EST}</i> M$<br/>
            Population: <i>${d.properties.POP_EST}</i>
          </div>
        `,
        )
        .onPolygonHover((hoverD) =>
          world
            .polygonAltitude((d: any) => (d === hoverD ? 0.12 : 0.06))
            .polygonCapColor((d: any) => (d === hoverD ? 'steelblue' : colorScale(getVal(d)))),
        )
        .polygonsTransitionDuration(300)(this.container.nativeElement);
    });
  }
}
