import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform {

  transform(photos, nameQuery: string) {
    nameQuery = nameQuery.trim().toLowerCase();

    if (nameQuery) {
      return photos.filter(
        photo => photo.name.toLowerCase().includes(nameQuery)
      );
    } else {
      return photos;
    }
  }

}
