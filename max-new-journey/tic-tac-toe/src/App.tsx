import Player from "./components/Player.tsx";
import { useState } from "react";

function App() {
  const [rightUser, setRightUser] = useState<string>("Player 1");
  const [leftUser, setLeftUser] = useState<string>("Player 2");

  return (
    <main>
      <div id={"game-container"}>
        <ol id={"players"}>
          <Player name={rightUser} setName={setRightUser} symbol="X" />
          <Player name={leftUser} setName={setLeftUser} symbol="O" />
        </ol>
      </div>
    </main>
  );
}

export default App;
