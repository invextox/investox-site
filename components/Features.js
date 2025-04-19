export default function Features() {
  return (
    <section style={{ padding: '60px 20px', background: '#fff', textAlign: 'center' }}>
      <h2 style={{ fontSize: '32px', marginBottom: '40px' }}>Key Features</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
        <div style={{ maxWidth: '300px' }}>
          <h3>Auto Yield Farming</h3>
          <p>Investox automatically finds the best farming opportunities to maximize your returns.</p>
        </div>
        <div style={{ maxWidth: '300px' }}>
          <h3>Non-Custodial</h3>
          <p>Your crypto stays in your wallet. You stay in control — always.</p>
        </div>
        <div style={{ maxWidth: '300px' }}>
          <h3>Community Driven</h3>
          <p>Governance is controlled by token holders. Every voice counts.</p>
        </div>
      </div>
    </section>
  );
}
