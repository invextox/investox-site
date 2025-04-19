export default function InvestmentOverview() {
  return (
    <section style={{
      background: '#111',
      color: '#fff',
      padding: '60px 20px',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '40px',
      textAlign: 'center'
    }}>
      <div style={{ minWidth: '250px' }}>
        <h2 style={{ fontSize: '2em', marginBottom: '10px' }}>Total Balance</h2>
        <p style={{ fontSize: '2.5em', fontWeight: 'bold', color: '#1e90ff' }}>$10,250.75</p>
      </div>
      <div>
        <img src="https://via.placeholder.com/300x150?text=Graph" alt="Earnings Graph" style={{ borderRadius: '8px' }} />
        <p style={{ marginTop: '10px', color: '#aaa', fontSize: '0.9em' }}>Earnings growth over time</p>
      </div>
    </section>
  );
}
