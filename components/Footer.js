export default function Footer() {
  return (
    <footer style={{
      padding: '40px 20px',
      background: '#0d0d0d',
      color: '#aaa',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontSize: '14px'
    }}>
      <div style={{ marginBottom: '10px' }}>
        <a href="#" style={{ margin: '0 15px', color: '#fff', textDecoration: 'none' }}>About Us</a>
        <a href="#" style={{ margin: '0 15px', color: '#fff', textDecoration: 'none' }}>Privacy</a>
        <a href="#" style={{ margin: '0 15px', color: '#fff', textDecoration: 'none' }}>Contact</a>
      </div>
      <div style={{ color: '#555' }}>
        © 2025 Investox.io
      </div>
    </footer>
  );
}
