import React, { useState } from 'react';
// ... שאר ה-imports

function App() {
  const [persona, setPersona] = useState(null); // 'student' או 'professional'
  const [completedTasks, setCompletedTasks] = useState(0);

  // מאגר משימות לפי פרסונה[cite: 3]
  const tasks = {
    student: [
      { id: 1, title: "להצביע בשיעור", desc: "להשתתף באופן פעיל בכיתה." },
      { id: 2, title: "לשבת בשורה הראשונה", desc: "להראות נוכחות וביטחון." }
    ],
    professional: [
      { id: 3, title: "להוביל נושא בישיבה", desc: "להפגין סמכותיות מקצועית." },
      { id: 4, title: "לתת פידבק לעמית", desc: "תקשורת בינאישית בונה." }
    ]
  };

  // מסך בחירה אם לא נבחרה פרסונה[cite: 3]
  if (!persona) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', gap: '20px', backgroundColor: 'var(--bg-color)' }}>
        <h1>מי אתה היום?</h1>
        <div style={{ display: 'flex', gap: '20px' }}>
          <button onClick={() => setPersona('student')} className="persona-btn">אני תלמיד/ה (נועה)</button>
          <button onClick={() => setPersona('professional')} className="persona-btn">אני מנהל/ת (מיכל)</button>
        </div>
      </div>
    );
  }

  return (
    // ... כאן נכנס ה-JSX של ה-Dashboard שבנינו קודם
    // עם שינוי קטן: במקום רשימה קבועה, נריץ מפה על ה-tasks[persona]
  );
}
import { Award, Zap, Star, ShieldCheck, Trophy } from 'lucide-react';

// ... בתוך פונקציית ה-App
const badges = [
  { id: 1, name: "הצעד הראשון", icon: <Zap />, requirement: 1, desc: "ביצעת את המשימה הראשונה שלך!" },
  { id: 2, name: "מתמיד/ה", icon: <Star />, requirement: 3, desc: "3 משימות הושלמו בהצלחה." },
  { id: 3, name: "אלוף/ת הביטחון", icon: <Trophy />, requirement: 5, desc: "הגעת ליעד היומי המלא!" },
  { id: 4, name: "חסינות", icon: <ShieldCheck />, requirement: 10, desc: "רצף של 10 משימות." }
];

// תצוגת הגלריה בתוך ה-Main Content[cite: 2]
<section style={{ marginTop: '40px' }}>
  <h3 style={{ marginBottom: '20px' }}>ארון הגביעים שלך</h3>
  <div style={{ 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', 
    gap: '20px' 
  }}>
    {badges.map(badge => (
      <div key={badge.id} style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: 'var(--radius)',
        textAlign: 'center',
        boxShadow: 'var(--shadow)',
        opacity: completedTasks >= badge.requirement ? 1 : 0.4,
        filter: completedTasks >= badge.requirement ? 'none' : 'grayscale(100%)',
        transition: 'all 0.4s ease',
        border: completedTasks >= badge.requirement ? '2px solid var(--primary)' : '2px solid transparent'
      }}>
        <div style={{ 
          color: completedTasks >= badge.requirement ? 'var(--primary)' : '#ccc',
          marginBottom: '10px'
        }}>
          {badge.icon}
        </div>
        <h4 style={{ margin: '5px 0', fontSize: '14px' }}>{badge.name}</h4>
        <p style={{ fontSize: '11px', color: '#888' }}>{badge.desc}</p>
      </div>
    ))}
  </div>
</section>
