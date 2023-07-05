function Footer() {
  const hour = new Date().getHours();

  const openHour = 12;
  const closeHour = 24;

  const isOpen = hour > openHour && hour <= closeHour;

  console.log(isOpen, hour);

  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()} We're currently open
    </footer>
  );
}

export default Footer;
