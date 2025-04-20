export default function Features() {
  return (
    <section style={{ padding: '40px 20px', display: 'flex', justifyContent: 'center', gap: '20px', color: '#fff', flexWrap: 'wrap' }}>
      <div style={{ background: '#111', padding: '20px', borderRadius: '10px', flex: '1 1 300px', maxWidth: '300px' }}>
        <h3>Smart Yield Engine</h3>
        <p>Advanced algorithms to optimize your DeFi returns automatically.</p>
      </div>
      <div style={{ background: '#111', padding: '20px', borderRadius: '10px', flex: '1 1 300px', maxWidth: '300px' }}>
        <h3>Full Transparency</h3>
        <p>Track every transaction with full visibility and smart contract logic.</p>
      </div>
      <div style={{ background: '#111', padding: '20px', borderRadius: '10px', flex: '1 1 300px', maxWidth: '300px' }}>
        <h3>Referral System</h3>
        <p>Invite friends and earn extra rewards with our unique token incentive model.</p>
      </div>
    </section>
  );
}
