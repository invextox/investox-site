// components/Hero.js
export default function Hero() {
  return (
    <div style={{
      backgroundImage: 'url("/bg.jpg")',
      backgroundSize: 'cover',
      color: 'white',
      padding: '120px 20px',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '3em', marginBottom: '20px' }}>The Future of DeFi Investing is Here</h1>
      <button style={{
        padding: '15px 30px',
        fontSize: '1.2em',
        borderRadius: '5px',
        backgroundColor: '#00c6ff',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
        marginRight: '10px'
      }}>
        Connect Wallet
      </button>
      <button style={{
        padding: '15px 30px',
        fontSize: '1.2em',
        borderRadius: '5px',
        backgroundColor: '#ffffff22',
        color: '#fff',
        border: '1px solid #fff',
        cursor: 'pointer'
      }}>
        Learn How It Works
      </button>
    </div>
  );
}
