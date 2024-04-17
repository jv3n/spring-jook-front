import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prettyprint',
  standalone: true,
})
export class PrettyJsonPipe implements PipeTransform {
  transform(val: string | undefined): string {
    if (!val) {
      return '';
    }

    return JSON.stringify(val, null, 2)
      .replace('\\\\', '')
      .replace('"', '')
      .replace('[', '')
      .replace(']', '')
      .replace('{', '{\n  ')
      .replace('}', '\n}')
      .replace(/,/g, ',\n  ');
  }
}
