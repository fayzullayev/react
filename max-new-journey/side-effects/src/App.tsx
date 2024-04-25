import { useEffect, useRef, useState } from 'react';
import Places from './components/Places.tsx';
import { AVAILABLE_PLACES } from './data.ts';
import Modal, { ModalRefType } from './components/Modal.tsx';
import DeleteConfirmation from './components/DeleteConfirmation.tsx';
import logoImg from './assets/logo.png';
import { Place } from './types.ts';
import { sortPlacesByDistance } from './loc.ts';
import { i } from 'vite/dist/node/types.d-aGj9QkWt';

function App() {
  const modal = useRef<ModalRefType | null>(null);
  const selectedPlace = useRef<string>('');
  const [pickedPlaces, setPickedPlaces] = useState<Place[]>([]);
  const [availablePlaces, setAvailablePlaces] = useState<Place[]>([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setAvailablePlaces(
          sortPlacesByDistance(AVAILABLE_PLACES, latitude, longitude),
        );
      },
    );
    const ids = getPlacesIdsFromLocalStorage();

    console.log('ids', ids);

    setPickedPlaces(AVAILABLE_PLACES.filter((place) => ids.includes(place.id)));
  }, []);

  function handleStartRemovePlace(id: string) {
    modal.current?.open();
    selectedPlace.current = id;
  }

  function handleStopRemovePlace() {
    modal.current?.close();
  }

  function getPlacesIdsFromLocalStorage(): string[] {
    let ids: string[] = [];

    if (localStorage && localStorage.getItem('selectedPlaces')) {
      try {
        const parsedIds = JSON.parse(
          localStorage.getItem('selectedPlaces') || '',
        );

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

  function handleSelectPlace(id: string) {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id)!;
      return [place, ...prevPickedPlaces];
    });

    let ids = [...getPlacesIdsFromLocalStorage(), id];

    localStorage.setItem('selectedPlaces', JSON.stringify(ids));
  }

  function handleRemovePlace() {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current),
    );
    modal.current?.close();
  }

  return (
    <>
      <Modal ref={modal}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={'Select the places you would like to visit below.'}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          places={availablePlaces}
          fallbackText={'Sorting available places...'}
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
}

export default App;
