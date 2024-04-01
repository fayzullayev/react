import { ChangeEvent, useState } from "react";

type PlayerProps = {
  symbol: string;
  isActive: boolean;
  initialName: string;
  onChangeName: (symbol: string, newName: string) => void;
};
function Player({ symbol, isActive, onChangeName, initialName }: PlayerProps) {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [name, setName] = useState(initialName);
  function handleEditClick() {
    setIsEdit((prevState) => !prevState);

    if (isEdit) {
      onChangeName(symbol, name);
    }
  }

  function handleChangeName({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) {
    setName(value);
  }

  let playerName = <span className={"player-name"}>{name}</span>;

  if (isEdit) {
    playerName = (
      <input
        type="text"
        value={name}
        required={true}
        onChange={handleChangeName}
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
