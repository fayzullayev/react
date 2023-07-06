function Footer() {
  const hour = new Date().getHours();

  const openHour = 9;
  const closeHour = 22;

  const isOpen = hour > openHour && hour <= closeHour;

  console.log(isOpen, hour);

  // if (!isOpen) {
  //   return (
  //     <p>
  //       We're happy to welcome you between {openHour}:00 and {closeHour}:00
  //     </p>
  //   );
  // }

  return (
    <footer className="footer">
      {isOpen && (
        <div className="order">
          <p>We're open until {closeHour}:00. Come visit us or order online</p>
          <button className="btn">Order</button>
        </div>
      )}
    </footer>
  );
}

export default Footer;
