export default function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 40px',
      backgroundColor: '#0d0d0d',
      color: '#fff',
      borderBottom: '1px solid #222'
    }}>
      <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>INVESTOX.IO</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <a href="#how" style={{ color: '#bbb', textDecoration: 'none', fontSize: '0.9rem' }}>
          Learn How It Works
        </a>
        <button style={{
          padding: '10px 20px',
          backgroundColor: '#1e40ff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}>
          Connect Wallet
        </button>
      </div>
    </nav>
  );
}
