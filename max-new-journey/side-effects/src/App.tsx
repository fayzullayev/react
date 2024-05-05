import { useCallback, useEffect, useRef, useState } from 'react';
import Places from './components/Places.tsx';
import { AVAILABLE_PLACES } from './data.ts';
import Modal from './components/Modal.tsx';
import DeleteConfirmation from './components/DeleteConfirmation.tsx';
import logoImg from './assets/logo.png';
import { Place } from './types.ts';
import { sortPlacesByDistance } from './loc.ts';
import { getIdsFromStorage, getInitialPickedPlaces } from './utils.ts';

function App() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const selectedPlace = useRef<string>('');
  const [pickedPlaces, setPickedPlaces] = useState<Place[]>(
    getInitialPickedPlaces(),
  );
  const [availablePlaces, setAvailablePlaces] = useState<Place[]>([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setAvailablePlaces(
          sortPlacesByDistance(AVAILABLE_PLACES, latitude, longitude),
        );
      },
    );
  }, []);

  function handleStartRemovePlace(id: string) {
    setIsModalOpen(true);
    selectedPlace.current = id;
  }

  function handleStopRemovePlace(): void {
    setIsModalOpen(false);
  }

  function handleSelectPlace(id: string): void {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id)!;
      return [place, ...prevPickedPlaces];
    });

    const storedIds = getIdsFromStorage('selectedPlaces');

    if (!storedIds.includes(id)) {
      let ids = [id, ...storedIds];
      localStorage.setItem('selectedPlaces', JSON.stringify(ids));
    }
  }

  const handleRemovePlace = useCallback(function () {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current),
    );

    const ids = getIdsFromStorage('selectedPlaces').filter(
      (id) => id !== selectedPlace.current,
    );

    localStorage.setItem('selectedPlaces', JSON.stringify(ids));

    setIsModalOpen(false);
  }, []);

  return (
    <>
      <Modal open={isModalOpen} onClose={handleStopRemovePlace}>
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
