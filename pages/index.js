export default function Home() {
  return (
    <div style={{
      background: 'linear-gradient(180deg, #0f021f, #120b2e)',
      color: 'white',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '40px 20px'
    }}>
      <h1 style={{ fontSize: '48px', marginBottom: '10px' }}>Boost your rankings with <span style={{ color: '#9f6bff' }}>AI</span>.</h1>
      <p style={{ fontSize: '18px', marginBottom: '30px', textAlign: 'center', maxWidth: '600px' }}>
        Elevate your site’s visibility effortlessly with AI, where smart technology meets user-friendly SEO tools.
      </p>
      <button style={{
        background: '#9f6bff',
        color: 'white',
        padding: '14px 28px',
        fontSize: '16px',
        borderRadius: '8px',
        border: 'none',
        cursor: 'pointer'
      }}>Start for free</button>
    </div>
  );
}
