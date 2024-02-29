import { ChangeDetectionStrategy, Component, effect, ElementRef, inject, ViewChild } from '@angular/core';
import Globe from 'globe.gl';
import { interpolateYlOrRd, scaleSequentialSqrt } from 'd3';
import { GeojsonLoaderService } from '@shared/components/graphical/globe/geojson.loader.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-globe',
  standalone: true,
  template: ` <div #hearth_globe></div>`,
})
export class GlobeComponent {
  readonly service = inject(GeojsonLoaderService);

  map = this.service.load('assets/geo/map.geojson');

  @ViewChild('hearth_globe') container!: ElementRef;

  constructor() {
    effect(() => {
      if (this.map()) {
        this.#generateGlobeCanvas(this.map()!);
      }
    });
  }

  onClickCountry(event: any) {
    console.log('long lat: ', event);
  }

  #generateGlobeCanvas(geoObj: Record<string, unknown>) {
    const colorScale = scaleSequentialSqrt(interpolateYlOrRd);
    const getVal = (d: any) => d['properties'].GDP_MD_EST / Math.max(1e5, d['properties'].POP_EST);

    // @ts-ignore
    const maxVal = Math.max(...geoObj['features'].map(getVal));
    colorScale.domain([0, maxVal]);

    const world: any = Globe()
      .width(window.innerWidth)
      .height(window.innerHeight - 50)
      .globeImageUrl('assets/geo/earth-night.jpg')
      .lineHoverPrecision(0)
      // @ts-ignore
      .polygonsData(geoObj['features'].filter((d: any) => d.properties.ISO_A2 !== 'AQ'))
      .polygonAltitude(0.06)
      .polygonCapColor((feat) => colorScale(getVal(feat)))
      .polygonSideColor(() => 'rgba(0, 100, 0, 0.15)')
      .polygonStrokeColor(() => '#111')
      .polygonLabel(
        (d: any) => `
            <b>${d.properties.ADMIN} (${d.properties.ISO_A3}):</b> <br />
          `,
      )
      .onPolygonHover((hoverD) =>
        world
          .polygonAltitude((d: any) => (d === hoverD ? 0.12 : 0.06))
          .polygonCapColor((d: any) => (d === hoverD ? 'steelblue' : colorScale(getVal(d)))),
      )
      .onPolygonClick((event) => this.onClickCountry(event))
      .polygonsTransitionDuration(300)(this.container.nativeElement);
  }
}
