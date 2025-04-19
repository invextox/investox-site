export default function Hero() {
  return (
    <section style={{
      backgroundColor: '#000000',
      color: '#ffffff',
      padding: '40px 20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center'
    }}>
      <h1 style={{
        fontSize: '3em',
        marginBottom: '20px',
        color: '#ffffff'
      }}>
        Welcome to Investox.io
      </h1>

      <div style={{
        width: '100%',
        maxWidth: '900px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '60px',
        flexWrap: 'wrap'
      }}>
        <div style={{ flex: 1, textAlign: 'left', minWidth: '300px' }}>
          <h2 style={{ fontSize: '2em', lineHeight: '1.4' }}>
            The future of DeFi investing<br />
            Connect your wallet and start earning.
          </h2>
        </div>
      </div>
    </section>
  );
}
