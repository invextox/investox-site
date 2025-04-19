export default function Navbar() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 40px',
      backgroundColor: '#000',
    }}>
      <div style={{ color: '#fff', fontWeight: 'bold' }}>INVESTOX.IO</div>
      <div>
        <a href="#how" style={{ color: '#aaa', marginRight: '20px' }}>Learn How It Works</a>
        <button>Connect Wallet</button>
      </div>
    </div>
  );
}
