import Player from './components/Player.tsx';
import TimerChallenge from './components/TimerChallenge.tsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title={'Easy'} targetTime={2} />
        <TimerChallenge title={'Not Easy'} targetTime={8} />
        <TimerChallenge title={'Getting tough'} targetTime={10} />
      </div>
    </>
  );
}

export default App;
