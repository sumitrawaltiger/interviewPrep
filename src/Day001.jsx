const COL = '#EAB308';
const COL_DARK = '#CA8A04';
const BG = '#FEFCE8';
const BORDER = '#FDE047';

const MODULES = [
  {
    title: 'Introduction to JavaScript',
    topics: [
      'Introduction to JavaScript',
      'Role in Web Development',
      'State of JavaScript in 2026',
      'Future Scope of JavaScript',
      'JavaScript Engine vs Runtime',
      'Introduction to V8 JavaScript Engine',
      'How JavaScript Code Executes',
    ],
  },
  {
    title: 'JavaScript Fundamentals',
    topics: [
      'Hello, World Program',
      'Comments in JavaScript',
      'Variables (var, let, const)',
      'Primitive Data Types',
      'Operators — Arithmetic, Comparison, Logical, Assignment',
      'Type Coercion',
      'Introduction to Memory (Stack vs Heap — basic idea)',
    ],
  },
];

export default function Day001() {
  const totalTopics = MODULES.reduce((n, m) => n + m.topics.length, 0);

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#F0F4FF',
        fontFamily: "'Segoe UI',system-ui,sans-serif",
        color: '#0F172A',
      }}
    >
      <div
        style={{
          background: 'linear-gradient(135deg,#854D0E 0%,#EAB308 55%,#FDE047 100%)',
          padding: '16px 12px 14px',
        }}
      >
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <a
            href="#/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 5,
              fontSize: 10,
              fontWeight: 700,
              color: 'rgba(255,255,255,0.75)',
              textDecoration: 'none',
              marginBottom: 10,
            }}
          >
            {'← Back to main plan'}
          </a>
          <div style={{ display: 'flex', alignItems: 'center', gap: 11, marginBottom: 10 }}>
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 12,
                background: 'rgba(255,255,255,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 26,
              }}
            >
              {'📜'}
            </div>
            <div>
              <div
                style={{
                  fontSize: 8,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.55)',
                }}
              >
                {'Javascript · D1 · Jul 1, 2026'}
              </div>
              <h1
                style={{
                  margin: 0,
                  fontSize: 'clamp(20px,6vw,26px)',
                  fontWeight: 900,
                  color: '#fff',
                  lineHeight: 1.15,
                }}
              >
                {'Day 001 — Study Log'}
              </h1>
              <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.65)', marginTop: 3 }}>
                {'STRIKE · Coder Army MERN · 14 topics completed · 3h (5:30–8:30 AM IST)'}
              </div>
            </div>
          </div>

          <div
            style={{
              background: 'rgba(255,255,255,0.15)',
              borderRadius: 8,
              padding: '8px 12px',
              fontSize: 10,
              color: 'rgba(255,255,255,0.9)',
            }}
          >
            {'✅ All ' + totalTopics + ' topics studied on Day 1 of 1000'}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 700, margin: '0 auto', padding: '14px 10px 40px' }}>
        {MODULES.map((mod) => (
          <div key={mod.title} style={{ marginBottom: 14 }}>
            <div
              style={{
                fontSize: 11,
                fontWeight: 800,
                color: COL_DARK,
                letterSpacing: '0.06em',
                marginBottom: 8,
                paddingLeft: 2,
              }}
            >
              {mod.title.toUpperCase()}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {mod.topics.map((topic) => (
                <div
                  key={topic}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 10,
                    background: '#fff',
                    borderRadius: 10,
                    padding: '10px 12px',
                    border: '1.5px solid ' + BORDER,
                    boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                  }}
                >
                  <span
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: 6,
                      flexShrink: 0,
                      background: '#DCFCE7',
                      color: '#15803D',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 12,
                      fontWeight: 800,
                    }}
                  >
                    {'✓'}
                  </span>
                  <span style={{ fontSize: 12, fontWeight: 600, color: '#0F172A', lineHeight: 1.5 }}>
                    {topic}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div
          style={{
            marginTop: 20,
            background: 'linear-gradient(135deg,#854D0E,#EAB308)',
            borderRadius: 12,
            padding: '14px 16px',
            textAlign: 'center',
            color: '#fff',
          }}
        >
          <div style={{ fontSize: 13, fontWeight: 800, marginBottom: 4 }}>
            {'📜 Day 001 complete — Javascript Month 1 underway'}
          </div>
          <div style={{ fontSize: 9, opacity: 0.8 }}>
            {'Next: Day 002 · Jul 2, 2026'}
          </div>
        </div>
      </div>
    </div>
  );
}
