export default function Features() {
  return (
    <section style={{ padding: '60px 20px', background: '#fff', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2.5em', marginBottom: '30px' }}>Platform Highlights</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
        <div style={{ maxWidth: '300px' }}>
          <h3>Smart Yield Engine</h3>
          <p>Advanced algorithms to optimize your DeFi returns automatically.</p>
        </div>
        <div style={{ maxWidth: '300px' }}>
          <h3>Full Transparency</h3>
          <p>Track every transaction with full visibility and smart contract logic.</p>
        </div>
        <div style={{ maxWidth: '300px' }}>
          <h3>Referral System</h3>
          <p>Invite friends and earn extra rewards with our unique token incentive model.</p>
        </div>
      </div>
    </section>
  );
}
