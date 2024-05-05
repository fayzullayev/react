import { Place } from './types.ts';
import { AVAILABLE_PLACES } from './data.ts';

export function getIdsFromStorage(id: string): string[] {
  let ids: string[] = [];

  if (localStorage && localStorage.getItem(id)) {
    try {
      const parsedIds = JSON.parse(localStorage.getItem(id) || '');

      if (!Array.isArray(parsedIds)) {
        ids = [];
      }

      ids = parsedIds;
    } catch (e: any) {
      console.log(e);
      ids = [];
    }
  }

  return ids;
}

export function getInitialPickedPlaces(): Place[] {
  const ids = getIdsFromStorage('selectedPlaces');

  return AVAILABLE_PLACES.filter((place) => ids.includes(place.id));
}
