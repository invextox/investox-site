export default function HowItWorks() {
  return (
    <section style={{ padding: '60px 20px', textAlign: 'center', background: '#f9f9f9' }}>
      <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>How It Works</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
        <div style={{ maxWidth: '300px' }}>
          <h3>1. Connect Your Wallet</h3>
          <p>Use MetaMask or any Web3 wallet to connect securely.</p>
        </div>
        <div style={{ maxWidth: '300px' }}>
          <h3>2. Choose a Strategy</h3>
          <p>Browse our yield farming options and pick one that suits your goals.</p>
        </div>
        <div style={{ maxWidth: '300px' }}>
          <h3>3. Earn & Monitor</h3>
          <p>Earn passive income while keeping full control of your assets.</p>
        </div>
      </div>
    </section>
  );
}
