export default function Hero() {
  return (
    <section style={{
      padding: '100px 20px',
      backgroundColor: '#0d0d0d',
      color: '#ffffff',
      minHeight: '100vh',
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{ flex: '1', minWidth: '300px' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', lineHeight: '1.2' }}>
            THE FUTURE OF <br /> DEFI INVESTING <br /> IS HERE
          </h1>
          <button style={{
            marginTop: '30px',
            padding: '12px 24px',
            fontSize: '16px',
            backgroundColor: '#0051ff',
            color: '#ffffff',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer'
          }}>
            Connect Wallet
          </button>
        </div>
        <div style={{
          flex: '1',
          minWidth: '300px',
          textAlign: 'center'
        }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 'bold' }}>
            Welcome to Investox.io
          </h2>
        </div>
      </div>
    </section>
  );
}
