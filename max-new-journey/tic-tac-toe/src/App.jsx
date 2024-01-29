import Player from './components/Player.jsx';

function App() {
  return (
    <main>
      <div id={'game-container'}>
        <ol id={'players'}>
          <Player name={'Mirodil'} symbol={'X'} />
          <Player name={'Iroda'} symbol={'O'} />
        </ol>
      </div>
    </main>
  );
}

export default App;
