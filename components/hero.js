export default function Hero() {
  return (
    <div style={{ fontFamily: 'Arial', textAlign: 'center', padding: '80px 20px' }}>
      <h1 style={{ fontSize: '3em', marginBottom: '20px' }}>Welcome to Investox.io</h1>
      <p style={{ fontSize: '1.2em', color: '#666' }}>
        The future of DeFi investing. Connect your wallet and start earning.
      </p>
      <button style={{
        marginTop: '30px',
        padding: '12px 24px',
        fontSize: '16px',
        backgroundColor: '#111',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}>
        Connect Wallet
      </button>
    </div>
  );
}
