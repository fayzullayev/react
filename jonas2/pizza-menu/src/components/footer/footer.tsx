function Footer() {
  const hour = new Date().getHours();

  const open;

  console.log(hour);
  return <footer>{new Date().toLocaleTimeString()}We're currently open</footer>;
}

export default Footer;
