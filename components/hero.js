export default function Hero() {
  return (
    <section style={{
      backgroundColor: '#000000',
      color: '#ffffff',
      padding: '80px 20px',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap'
    }}>
      <div style={{ flex: 1, maxWidth: '600px' }}>
        <h2 style={{
          fontSize: '2.5em',
          marginBottom: '20px'
        }}>
          The future of DeFi investing<br />Connect your wallet and start earning.
        </h2>
        <button style={{
          marginTop: '30px',
          padding: '12px 24px',
          fontSize: '16px',
          backgroundColor: '#0066ff',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer'
        }}>
          Connect Wallet
        </button>
      </div>

      <div style={{
        flex: 1,
        textAlign: 'center',
        marginTop: '40px',
        width: '100%'
      }}>
        <h1 style={{
          fontSize: '3em',
          marginBottom: '0',
          color: '#ffffff'
        }}>
          Welcome to Investox.io
        </h1>
      </div>
    </section>
  );
}
