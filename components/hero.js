export default function Hero() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '50px 80px',
      height: '100vh',
      backgroundImage: 'url("/bg.png")',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }}>
      <div>
        <h1 style={{ fontSize: '3.5em', lineHeight: '1.2' }}>
          THE FUTURE OF<br />DEFI INVESTING<br />IS HERE
        </h1>
        <button>Connect Wallet</button>
      </div>
    </div>
  );
}
