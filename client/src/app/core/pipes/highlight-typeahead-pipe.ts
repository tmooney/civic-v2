import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'highlightTypeahead',
  pure: true
})
export class HighlightTypeaheadPipe implements PipeTransform {
  constructor(private santizer: DomSanitizer) { }

  transform(value: string, searchTerm?: string): SafeHtml {
    if(!searchTerm || searchTerm == ''){
      return value
    }

    const regex = new RegExp(searchTerm, 'gi')
    const match = value.match(regex)

    if (!match) {
      return value
    }
    let stringVal = value.replace(regex, `<span class='typeahead-match'>${match[0]}</span>`)

    return this.santizer.bypassSecurityTrustHtml(stringVal);
  }
}