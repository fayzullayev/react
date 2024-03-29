import { Dispatch, SetStateAction, useState } from "react";

type PlayerProps = {
  name: string;
  symbol: string;
  setName: Dispatch<SetStateAction<string>>;
  isActive: boolean;
};
function Player({ name, symbol, setName, isActive }: PlayerProps) {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  function handleEditClick() {
    setIsEdit((prevState) => !prevState);
  }

  let playerName = <span className={"player-name"}>{name}</span>;

  if (isEdit) {
    playerName = (
      <input
        type="text"
        value={name}
        required={true}
        onChange={(event) => setName(event.target.value)}
      />
    );
  }

  return (
    <li className={isActive ? "active" : ""}>
      <span className={"player"}>
        {playerName}
        <span className={"player-symbol"}>{symbol}</span>
      </span>

      <button onClick={handleEditClick}>{isEdit ? "Save" : "Edit"}</button>
    </li>
  );
}

export default Player;
