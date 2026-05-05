import React from 'react';
import { Layout, Trophy, Target, User, BarChart3 } from 'lucide-react';

function App() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar[cite: 2] */}
      <aside style={{ 
        width: '240px', 
        backgroundColor: 'white', 
        padding: '20px',
        borderRight: '1px solid #ddd' 
      }}>
        <h2 style={{ color: 'var(--primary)', fontWeight: 'bold' }}>BoostMe</h2>
        <nav style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
            <Layout size={20} /> Dashboard
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
            <Target size={20} /> Challenges
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
            <BarChart3 size={20} /> Progress
          </div>
        </nav>
      </aside>

      {/* Main Content[cite: 2] */}
      <main style={{ flex: 1, padding: '40px' }}>
        <header style={{ marginBottom: '30px' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>שלום, מה האתגר שלך היום?</h1>
        </header>

        {/* Daily Challenge Card[cite: 3] */}
        <div style={{ 
          backgroundColor: 'white', 
          padding: '25px', 
          borderRadius: 'var(--radius)', 
          boxShadow: 'var(--shadow)',
          borderLeft: '5px solid var(--primary)'
        }}>
          <h3 style={{ marginTop: 0 }}>האתגר היומי: "להגיד בוקר טוב"</h3>
          <p>נסה להגיד בוקר טוב לשלושה אנשים שונים היום כדי לחזק את הביטחון החברתי.</p>
          <button style={{ 
            backgroundColor: 'var(--primary)', 
            color: 'white', 
            border: 'none', 
            padding: '10px 20px', 
            borderRadius: 'var(--radius)',
            cursor: 'pointer'
          }}>
            סיימתי!
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
