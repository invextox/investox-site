export default function CallToAction() {
  return (
    <section style={{ background: '#0d0d0d', padding: '60px 20px', color: '#fff', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2.5em', marginBottom: '20px' }}>Start Earning Today</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
        <div style={{ background: '#111', padding: '30px', borderRadius: '10px', width: '300px' }}>
          <h3>$1000</h3>
          <button style={{
            marginTop: '20px',
            padding: '12px 24px',
            backgroundColor: '#1a73e8',
            border: 'none',
            borderRadius: '5px',
            color: '#fff',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}>Start Investing</button>
        </div>
        <div style={{ background: '#111', padding: '30px', borderRadius: '10px', width: '300px' }}>
          <h3>Invite your friends</h3>
          <p>Earn tokens by referring others</p>
          <button style={{
            marginTop: '20px',
            padding: '12px 24px',
            backgroundColor: '#444',
            border: 'none',
            borderRadius: '5px',
            color: '#fff',
            cursor: 'pointer'
          }}>Get Referral Link</button>
        </div>
      </div>
    </section>
  );
}
