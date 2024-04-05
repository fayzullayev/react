import { useRef, useState } from 'react';

export default function Player() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState<string>('');

  function handleClick() {
    if (inputRef.current) {
      setName(inputRef.current.value);
      inputRef.current.value = '';
    }
  }

  return (
    <section id="player">
      <h2>Welcome {name ?? 'unknown entity'}</h2>
      <p>
        <input ref={inputRef} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
