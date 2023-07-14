import './style.css';
function PayForm() {
  return (
    <div className="pay-form-container">
      <h1 style={{ marginBottom: 24 }}>Split a bill with #name</h1>

      <div className="input">
        <div className="input-title">💰 Bill value</div>
        <div className="input-container">
          <input type="text" />
        </div>
      </div>

      <div className="input">
        <div className="input-title">🧍‍♀️ Bill value</div>
        <div className="input-container">
          <input type="text" />
        </div>
      </div>

      <div className="input">
        <div className="input-title">🧑‍🤝‍🧑 Sarah's expense</div>
        <div className="input-container2"></div>
      </div>

      <div className="input">
        <div className="input-title">🤑 Who is paying the bill</div>
        <div className="input-container2">
          <select name="" id="">
            <option value=""></option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default PayForm;
