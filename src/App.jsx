import { useState } from 'react';
import { JS_COURSE_DAYS } from './data/jsCourseDays.js';
import {
  START,
  TOTAL_WEEKS,
  TOTAL_DAYS,
  TOTAL_YEARS,
  SKILL_COUNT,
  DEADLINE,
  STUDY_TIME,
  BLOCKS,
  PHASES,
  MILESTONES,
} from './data/plan150weeks.js';
// 20 skills · 4 years · Jul 5, 2026 → Jul 4, 2030 · 5:30–8:30 AM BKK

const JS_DAY_LINKS = JS_COURSE_DAYS.map((d) => ({
  href: d.hash,
  notionUrl: d.notionUrl,
  notionLabel: d.notionLabel,
  label:
    'Day ' +
    String(d.day).padStart(3, '0') +
    ' · ' +
    d.date +
    ' · L' +
    String(d.lecture).padStart(2, '0') +
    ': ' +
    d.title,
  done: !!d.done,
}));

const PHASES_LIST = PHASES.map((p) =>
  p.name === 'Javascript'
    ? { ...p, dayLinks: JS_DAY_LINKS }
    : p.name === 'AWS'
      ? { ...p, scheduleLink: '#/aws-100-days' }
      : p,
);

const SKILL_SHORT = {
  Javascript: 'JS',
  Typescript: 'TS',
  'React JS': 'React',
  'Next JS': 'Next',
  'React Native': 'RN',
  'Node JS': 'Node',
  Python: 'Python',
  Django: 'Django',
  'Fast API': 'FastAPI',
  'Agentic AI': 'AI',
  J2SE: 'J2SE',
  J2EE: 'J2EE',
  JPA: 'JPA',
  'Spring Boot': 'Spring',
  Microservices: 'Micro',
  Devops: 'DevOps',
  AWS: 'AWS',
  Kubernetes: 'K8s',
  'Data Structures': 'DSA',
  'System Design': 'SD',
};

function daysIn() {
  return Math.max(0, Math.floor((new Date() - START) / 86400000));
}
function studyDay() {
  return Math.min(daysIn() + 1, TOTAL_DAYS);
}
function studyWeek() {
  return Math.min(Math.ceil(studyDay() / 7), TOTAL_WEEKS);
}
function curId() {
  const d = studyDay();
  for (const p of PHASES_LIST) if (d <= p.de) return p.id;
  return null;
}
function pct() {
  return Math.min(100, Math.round((studyWeek() / TOTAL_WEEKS) * 100));
}

function Card({ p, open, onToggle, isCurrent, isDone }) {
  const [wkOpen, setWkOpen] = useState(false);
  const blk = BLOCKS.find((b) => b.id === p.block);
  return (
    <div
      id={'ph-' + p.id}
      style={{
        borderRadius: 12,
        overflow: 'hidden',
        transition: 'all 0.22s',
        border:
          '2px solid ' +
          (open
            ? p.color + '80'
            : isCurrent
              ? '#F59E0B80'
              : isDone
                ? p.color + '28'
                : p.border),
        background: open ? p.bg : isDone ? '#FAFBFF' : '#fff',
        opacity: isDone ? 0.78 : 1,
        boxShadow: open
          ? '0 6px 24px ' + p.color + '18'
          : isCurrent
            ? '0 0 0 3px #FEF3C7,0 2px 8px rgba(0,0,0,0.06)'
            : '0 1px 4px rgba(0,0,0,0.05)',
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width: '100%',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '11px 13px',
          display: 'flex',
          alignItems: 'center',
          gap: 9,
          textAlign: 'left',
          fontFamily: 'inherit',
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: 11,
            flexShrink: 0,
            background: open
              ? 'linear-gradient(135deg,' + p.color + ',' + p.dark + ')'
              : isDone
                ? '#F1F5F9'
                : p.bg,
            border: '2px solid ' + p.color + '35',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: open ? '0 4px 14px ' + p.color + '45' : 'none',
          }}
        >
          <span style={{ fontSize: 17, lineHeight: 1 }}>
            {isDone ? '✅' : p.icon}
          </span>
          <span
            style={{
              fontSize: 7,
              fontWeight: 700,
              color: open ? 'rgba(255,255,255,0.6)' : p.color,
              marginTop: 1,
            }}
          >
            {'#' + p.seq}
          </span>
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              display: 'flex',
              gap: 4,
              alignItems: 'center',
              flexWrap: 'wrap',
              marginBottom: 2,
            }}
          >
            {isCurrent && (
              <span
                style={{
                  fontSize: 8,
                  fontWeight: 800,
                  padding: '1px 6px',
                  borderRadius: 12,
                  background: '#FEF3C7',
                  color: '#D97706',
                  border: '1px solid #FDE68A',
                  whiteSpace: 'nowrap',
                }}
              >
                {'📍 NOW'}
              </span>
            )}
            {isDone && (
              <span
                style={{
                  fontSize: 8,
                  fontWeight: 800,
                  padding: '1px 6px',
                  borderRadius: 12,
                  background: '#DCFCE7',
                  color: '#15803D',
                  border: '1px solid #86EFAC',
                }}
              >
                {'✅ DONE'}
              </span>
            )}
            <span
              style={{
                fontSize: 8,
                fontWeight: 700,
                padding: '1px 6px',
                borderRadius: 10,
                background: (blk?.col || '#E2E8F0') + '18',
                color: blk?.col || '#64748B',
                border: '1px solid ' + (blk?.col || '#E2E8F0') + '40',
                whiteSpace: 'nowrap',
              }}
            >
              {(blk?.scheduleLink || p.scheduleLink) ? (
                <a
                  href={blk?.scheduleLink || p.scheduleLink}
                  onClick={(e) => e.stopPropagation()}
                  style={{ color: 'inherit', textDecoration: 'underline', textUnderlineOffset: 2 }}
                >
                  {blk.title}
                </a>
              ) : (
                blk?.title || p.block
              )}
            </span>
            <span
              style={{
                fontSize: 'clamp(12px,3.8vw,14px)',
                fontWeight: 900,
                color: '#0F172A',
              }}
            >
              {p.name}
            </span>
          </div>
          <div style={{ fontSize: 9, color: '#64748B', marginBottom: 1 }}>
            {p.period + ' · W' + p.ws + '–W' + p.we + ' · ' + p.weeks + ' weeks'}
          </div>
          <div style={{ fontSize: 8, fontWeight: 700, color: p.color }}>
            {'🏆 ' + p.ms}
          </div>
        </div>
        <div style={{ textAlign: 'right', flexShrink: 0 }}>
          <div
            style={{
              fontSize: 12,
              fontWeight: 900,
              color: p.color,
              background: p.color + '12',
              padding: '2px 9px',
              borderRadius: 12,
              border: '1px solid ' + p.color + '22',
              marginBottom: 2,
            }}
          >
            {p.weeks + 'w'}
          </div>
          <div style={{ fontSize: 8, color: '#94A3B8' }}>{p.label}</div>
        </div>
        <span
          style={{
            color: p.color,
            fontSize: 17,
            flexShrink: 0,
            opacity: open ? 1 : 0.3,
            transform: open ? 'rotate(90deg)' : 'none',
            transition: 'transform 0.2s',
          }}
        >
          {'›'}
        </span>
      </button>
      {open && (
        <div
          style={{
            borderTop: '2px solid ' + p.color + '18',
            padding: '10px 13px 15px',
          }}
        >
          <div
            style={{
              background: p.color + '0A',
              border: '1px solid ' + p.color + '22',
              borderRadius: 9,
              padding: '9px 12px',
              marginBottom: 10,
              fontSize: 11,
              color: '#334155',
              lineHeight: 1.8,
            }}
          >
            {p.about}
          </div>
          {p.dayLinks?.length > 0 && (
            <div
              style={{
                background: p.bg,
                borderRadius: 8,
                padding: '9px 11px',
                border: '1px solid ' + p.border,
                marginBottom: 10,
              }}
            >
              <div
                style={{
                  fontSize: 9,
                  fontWeight: 800,
                  color: p.dark,
                  letterSpacing: '0.08em',
                  marginBottom: 6,
                }}
              >
                {'📓 DAILY STUDY LOG'}
              </div>
              {p.dayLinks.map((d) => (
                <div key={d.href} style={{ marginBottom: 4 }}>
                  <a
                    href={d.href}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      padding: '7px 9px',
                      borderRadius: 7,
                      background: '#fff',
                      border: '1px solid ' + p.border,
                      textDecoration: 'none',
                      color: '#0F172A',
                    }}
                  >
                    <span style={{ fontSize: 12 }}>{d.done ? '✅' : '📄'}</span>
                    <span style={{ fontSize: 11, fontWeight: 700, color: p.color }}>{d.label}</span>
                    <span style={{ marginLeft: 'auto', fontSize: 9, color: '#64748B' }}>{'View →'}</span>
                  </a>
                  {d.notionUrl && (
                    <a
                      href={d.notionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      style={{
                        display: 'block',
                        marginTop: 3,
                        marginLeft: 28,
                        fontSize: 9,
                        fontWeight: 700,
                        color: '#0F172A',
                        textDecoration: 'underline',
                        textUnderlineOffset: 2,
                      }}
                    >
                      {'📝 ' + (d.notionLabel || 'Notion Notes')}
                    </a>
                  )}
                </div>
              ))}
            </div>
          )}
          <div
            style={{
              background: '#F8FAFC',
              borderRadius: 8,
              padding: '9px 11px',
              border: '1px solid #E2E8F0',
              marginBottom: 10,
            }}
          >
            <div
              style={{
                fontSize: 9,
                fontWeight: 800,
                color: '#374151',
                letterSpacing: '0.08em',
                marginBottom: 5,
              }}
            >
              {'📚 COURSES'}
            </div>
            {p.courses.map((co, i) => (
              <div
                key={i}
                style={{ display: 'flex', gap: 6, padding: '3px 0' }}
              >
                <span
                  style={{
                    fontSize: 9,
                    flexShrink: 0,
                    fontWeight: 700,
                    color: p.color,
                    marginTop: 1,
                  }}
                >
                  {i + 1 + '.'}
                </span>
                <span
                  style={{ fontSize: 10, color: '#374151', lineHeight: 1.6 }}
                >
                  {co}
                </span>
              </div>
            ))}
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setWkOpen(!wkOpen);
            }}
            style={{
              width: '100%',
              background: p.color + '08',
              border: '1px solid ' + p.color + '25',
              borderRadius: 8,
              padding: '7px 11px',
              cursor: 'pointer',
              fontFamily: 'inherit',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: wkOpen ? 8 : 0,
            }}
          >
            <span style={{ fontSize: 10, fontWeight: 700, color: p.color }}>
              {'📅 Week-by-Week — ' + p.wplan.length + ' weeks'}
            </span>
            <span style={{ fontSize: 11, color: p.color }}>
              {wkOpen ? '▲' : '▼'}
            </span>
          </button>
          {wkOpen && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
              {p.wplan.map((wk) => (
                <div
                  key={wk.w}
                  style={{
                    display: 'flex',
                    gap: 8,
                    alignItems: 'flex-start',
                    background: '#fff',
                    borderRadius: 8,
                    padding: '8px 10px',
                    border: '1.5px solid ' + p.color + '18',
                  }}
                >
                  <div
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: 8,
                      flexShrink: 0,
                      background: p.color + '15',
                      color: p.color,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <span
                      style={{ fontSize: 7, fontWeight: 700, lineHeight: 1 }}
                    >
                      {'W'}
                    </span>
                    <span
                      style={{ fontSize: 12, fontWeight: 900, lineHeight: 1 }}
                    >
                      {wk.w}
                    </span>
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        color: '#0F172A',
                        marginBottom: 2,
                      }}
                    >
                      {wk.f}
                    </div>
                    <div
                      style={{ fontSize: 9, color: '#64748B', lineHeight: 1.6 }}
                    >
                      {wk.t}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function App() {
  const [openId, setOpenId] = useState(null);
  const [showMs, setShowMs] = useState(true);
  const d = daysIn(),
    sd = studyDay(),
    sw = studyWeek(),
    cid = curId(),
    prog = pct();
  const msDone = MILESTONES.filter((m) => m.day <= sd).length;
  const nextMs = MILESTONES.find((m) => m.day > sd);
  const toggle = (id) => setOpenId(openId === id ? null : id);
  const jump = (id) => {
    setOpenId(id);
    setTimeout(
      () =>
        document
          .getElementById('ph-' + id)
          ?.scrollIntoView({ behavior: 'smooth', block: 'start' }),
      80,
    );
  };

  const sections = BLOCKS.map((blk) => {
    const phases = PHASES.filter((p) => p.block === blk.id);
    const ws = phases[0]?.ws;
    const we = phases[phases.length - 1]?.we;
    const weekLabel = ws && we ? ' · W' + ws + '–W' + we : '';
    return {
      col: blk.col,
      title: blk.icon + ' ' + blk.title.toUpperCase() + weekLabel,
      sub: blk.sub + ' · ' + blk.detail,
      ids: phases.map((p) => p.id),
    };
  });

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#F0F4FF',
        fontFamily: "'Segoe UI',system-ui,sans-serif",
        color: '#0F172A',
        overflowX: 'hidden',
      }}
    >
      <div
        style={{
          background:
            'linear-gradient(135deg,#1a237e 0%,#283593 42%,#1565C0 100%)',
          padding: '16px 12px 14px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            backgroundImage:
              'radial-gradient(circle,rgba(255,255,255,0.05) 1px,transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        <div
          style={{
            maxWidth: 700,
            margin: '0 auto',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 11,
              marginBottom: 10,
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 12,
                flexShrink: 0,
                background: 'linear-gradient(135deg,#F59E0B,#D97706)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 24,
                boxShadow: '0 4px 18px rgba(245,158,11,0.5)',
              }}
            >
              {'🏆'}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  fontSize: 8,
                  letterSpacing: '0.24em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.45)',
                  marginBottom: 1,
                }}
              >
                {'Sumit Rawal · NextStep Bangkok · FPO Cloud'}
              </div>
              <div
                style={{
                  fontSize: 'clamp(20px,6vw,28px)',
                  fontWeight: 900,
                  color: '#fff',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                }}
              >
                {TOTAL_YEARS + ' Years of Code'}
              </div>
              <div
                style={{
                  fontSize: 9,
                  color: 'rgba(255,255,255,0.6)',
                  marginTop: 2,
                }}
              >
                {
                  'Sun Jul 5, 2026 → Fri Jul 4, 2030 · 5:30 AM – 8:30 AM BKK · ' + TOTAL_YEARS + ' years · ' + TOTAL_WEEKS + ' weeks · ' + SKILL_COUNT + ' skills'
                }
              </div>
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2,1fr)',
              gap: 7,
              marginBottom: 11,
            }}
          >
            {BLOCKS.map((b) => {
              const hc = b.headerCol || b.col;
              return (
              <div
                key={b.id}
                style={{
                  background: 'rgba(255,255,255,0.09)',
                  borderRadius: 10,
                  padding: '10px 12px',
                  border: '1px solid ' + hc + '70',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    marginBottom: 4,
                  }}
                >
                  <span style={{ fontSize: 15 }}>{b.icon}</span>
                  {b.scheduleLink ? (
                    <a
                      href={b.scheduleLink}
                      style={{
                        fontSize: 10,
                        fontWeight: 800,
                        color: hc,
                        textShadow: b.headerCol ? '0 1px 3px rgba(0,0,0,0.35)' : 'none',
                        textDecoration: 'underline',
                        textUnderlineOffset: 3,
                      }}
                    >
                      {b.title}
                    </a>
                  ) : (
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 800,
                        color: hc,
                        textShadow: b.headerCol ? '0 1px 3px rgba(0,0,0,0.35)' : 'none',
                      }}
                    >
                      {b.title}
                    </span>
                  )}
                </div>
                <div
                  style={{
                    fontSize: 8,
                    color: 'rgba(255,255,255,0.5)',
                    lineHeight: 1.6,
                    marginBottom: 5,
                  }}
                >
                  {b.sub}
                </div>
                <div
                  style={{
                    fontSize: 8,
                    color: 'rgba(255,255,255,0.6)',
                    marginBottom: 3,
                  }}
                >
                  {b.detail}
                </div>
                <div
                  style={{
                    fontSize: 9,
                    fontWeight: 600,
                    color: 'rgba(255,255,255,0.85)',
                    background: hc + '30',
                    borderRadius: 6,
                    padding: '3px 8px',
                    display: 'inline-block',
                  }}
                >
                  {b.time}
                </div>
              </div>
            );
            })}
          </div>

          <div
            style={{
              background: 'rgba(14,165,233,0.14)',
              border: '1px solid rgba(14,165,233,0.4)',
              borderRadius: 8,
              padding: '8px 12px',
              marginBottom: 10,
              display: 'flex',
              gap: 9,
              alignItems: 'center',
            }}
          >
            <span style={{ fontSize: 15, flexShrink: 0 }}>{'⏰'}</span>
            <div>
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  color: '#7DD3FC',
                  marginBottom: 1,
                }}
              >
                {
                  TOTAL_YEARS + ' years · ' + TOTAL_WEEKS + ' weeks · 3h daily · JS first → Python → Java → DevOps → AWS → K8s → DSA & SD'
                }
              </div>
              <div style={{ fontSize: 8, color: 'rgba(255,255,255,0.5)' }}>
                {
                  'Jul 5, 2026 → ' + DEADLINE + ' · Week ' + sw + ' of ' + TOTAL_WEEKS + ' · Study day ' + sd + ' of ' + TOTAL_DAYS
                }
              </div>
            </div>
          </div>

          <div
            style={{
              background: 'rgba(245,158,11,0.14)',
              border: '1px solid rgba(245,158,11,0.45)',
              borderRadius: 8,
              padding: '8px 12px',
              marginBottom: 10,
              display: 'flex',
              gap: 9,
              alignItems: 'center',
            }}
          >
            <span style={{ fontSize: 15, flexShrink: 0 }}>{'📅'}</span>
            <div>
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  color: '#FDE68A',
                  marginBottom: 1,
                }}
              >
                {TOTAL_YEARS + ' Years of Code — daily 5:30–8:30 AM BKK through ' + DEADLINE}
              </div>
              <div style={{ fontSize: 8, color: 'rgba(255,255,255,0.5)' }}>
                {'JS ecosystem → Python → Java → DevOps → AWS → K8s → DSA & System Design · ends ' + DEADLINE}
              </div>
            </div>
          </div>

          <div style={{ marginBottom: 10 }}>
            <div
              style={{
                height: 11,
                borderRadius: 5,
                overflow: 'hidden',
                display: 'flex',
                boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.3)',
                gap: 1,
              }}
            >
              {PHASES_LIST.map((p) => (
                <div
                  key={p.id}
                  style={{
                    flex: p.weeks,
                    cursor: 'pointer',
                    transition: 'background 0.3s',
                    borderRight: '1px solid rgba(0,0,0,0.1)',
                    background:
                      sd > p.de
                        ? p.color + '75'
                        : sd >= p.ds
                          ? p.color
                          : p.color + '30',
                  }}
                  onClick={() => jump(p.id)}
                  title={'W' + p.ws + '–W' + p.we + ': ' + p.name}
                />
              ))}
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: 3,
                fontSize: 8,
                color: 'rgba(255,255,255,0.4)',
              }}
            >
              <span>{'Jul 5, 2026'}</span>
              <span
                style={{ color: 'rgba(255,255,255,0.75)', fontWeight: 700 }}
              >
                {prog + '% · Week ' + sw + ' of ' + TOTAL_WEEKS + ' · Day ' + sd + ' of ' + TOTAL_DAYS}
              </span>
              <span>{DEADLINE}</span>
            </div>
          </div>

          <button
            onClick={() => setShowMs(!showMs)}
            style={{
              width: '100%',
              background: 'rgba(255,255,255,0.09)',
              border: '1px solid rgba(255,255,255,0.18)',
              borderRadius: 8,
              padding: '7px 11px',
              cursor: 'pointer',
              fontFamily: 'inherit',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: showMs ? 8 : 0,
            }}
          >
            <span
              style={{
                fontSize: 10,
                fontWeight: 700,
                color: 'rgba(255,255,255,0.8)',
              }}
            >
              {'🏆 ' +
                MILESTONES.length +
                ' Milestones — ' +
                msDone +
                ' completed'}
            </span>
            <span
              style={{
                color: 'rgba(255,255,255,0.55)',
                fontSize: 13,
                transform: showMs ? 'rotate(90deg)' : 'none',
                transition: 'transform 0.2s',
              }}
            >
              {'›'}
            </span>
          </button>
          {showMs && (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill,minmax(148px,1fr))',
                gap: 4,
              }}
            >
              {MILESTONES.map((m, i) => {
                const done = m.day <= sd,
                  isNext = nextMs && nextMs.day === m.day;
                return (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6,
                      borderRadius: 7,
                      padding: '6px 8px',
                      background: isNext
                        ? 'rgba(245,158,11,0.25)'
                        : done
                          ? 'rgba(255,255,255,0.18)'
                          : 'rgba(255,255,255,0.07)',
                      border:
                        '1px solid ' +
                        (isNext
                          ? 'rgba(245,158,11,0.5)'
                          : done
                            ? m.color + '55'
                            : 'rgba(255,255,255,0.1)'),
                    }}
                  >
                    <span style={{ fontSize: 13, flexShrink: 0 }}>
                      {done ? '✅' : isNext ? '🎯' : m.icon}
                    </span>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div
                        style={{
                          fontSize: 9,
                          fontWeight: 700,
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          color: done
                            ? '#fff'
                            : isNext
                              ? '#FDE68A'
                              : 'rgba(255,255,255,0.6)',
                        }}
                      >
                        {m.label}
                      </div>
                      <div
                        style={{ fontSize: 7, color: 'rgba(255,255,255,0.35)' }}
                      >
                        {'D' + m.day + ' · ' + m.date}
                      </div>
                    </div>
                    <span
                      style={{
                        fontSize: 7,
                        fontWeight: 800,
                        padding: '1px 4px',
                        borderRadius: 5,
                        flexShrink: 0,
                        background: done
                          ? m.color + '28'
                          : isNext
                            ? 'rgba(245,158,11,0.25)'
                            : 'rgba(255,255,255,0.08)',
                        color: done
                          ? m.color
                          : isNext
                            ? '#F59E0B'
                            : 'rgba(255,255,255,0.3)',
                      }}
                    >
                      {done ? '✓' : isNext ? '→' : 'D' + m.day}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <div
        style={{ maxWidth: 700, margin: '0 auto', padding: '14px 10px 44px' }}
      >
        {sections.map((sec) => (
          <div key={sec.title}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                marginBottom: 8,
                marginTop: 16,
              }}
            >
              <div
                style={{
                  height: 2,
                  flex: 1,
                  background:
                    'linear-gradient(90deg,' + sec.col + ',' + sec.col + '10)',
                }}
              />
              <div
                style={{ textAlign: 'center', flexShrink: 0, padding: '0 6px' }}
              >
                <div
                  style={{
                    fontSize: 'clamp(9px,2.5vw,11px)',
                    fontWeight: 800,
                    color: sec.col,
                    letterSpacing: '0.08em',
                  }}
                >
                  {sec.title}
                </div>
                <div style={{ fontSize: 8, color: '#94A3B8', marginTop: 1 }}>
                  {sec.sub}
                </div>
              </div>
              <div
                style={{
                  height: 2,
                  flex: 1,
                  background:
                    'linear-gradient(90deg,' + sec.col + '10,' + sec.col + ')',
                }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {PHASES_LIST.filter((p) => sec.ids.includes(p.id)).map((p) => (
                <Card
                  key={p.id}
                  p={p}
                  open={openId === p.id}
                  onToggle={() => toggle(p.id)}
                  isCurrent={cid === p.id}
                  isDone={sd > p.de}
                />
              ))}
            </div>
          </div>
        ))}

        <div
          style={{
            marginTop: 22,
            background: 'linear-gradient(160deg,#0F172A 0%,#1E3A8A 45%,#1D4ED8 100%)',
            borderRadius: 14,
            padding: '18px 14px 16px',
            boxShadow: '0 8px 32px rgba(30,58,138,0.35)',
            textAlign: 'center',
            border: '1px solid rgba(255,255,255,0.12)',
          }}
        >
          <div
            style={{
              fontSize: 'clamp(13px,4vw,16px)',
              fontWeight: 900,
              color: '#FDE68A',
              marginBottom: 6,
              letterSpacing: '0.02em',
            }}
          >
            {'🏆 ' + TOTAL_YEARS + ' Years of Code · Jul 5, 2026 → ' + DEADLINE}
          </div>
          <div
            style={{
              fontSize: 10,
              color: 'rgba(255,255,255,0.82)',
              marginBottom: 14,
              lineHeight: 1.5,
              fontWeight: 500,
            }}
          >
            {'JS stack → Python → Java → DevOps → AWS → K8s → DSA → System Design'}
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 6,
              flexWrap: 'wrap',
              maxWidth: 640,
              margin: '0 auto',
            }}
          >
            {PHASES_LIST.map((p) => {
              const isDone = sd > p.de;
              const isCurrent = cid === p.id;
              const label = SKILL_SHORT[p.name] || p.name;
              return (
                <span
                  key={p.id}
                  title={p.name}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 4,
                    padding: '5px 10px',
                    borderRadius: 20,
                    fontSize: 9,
                    fontWeight: 700,
                    letterSpacing: '0.03em',
                    background: isCurrent
                      ? p.color
                      : isDone
                        ? 'rgba(16,185,129,0.28)'
                        : 'rgba(255,255,255,0.14)',
                    color: '#FFFFFF',
                    border: isCurrent
                      ? '2px solid ' + p.border
                      : isDone
                        ? '1px solid rgba(52,211,153,0.55)'
                        : '1px solid rgba(255,255,255,0.22)',
                    boxShadow: isCurrent
                      ? '0 0 0 3px ' + p.color + '44, 0 2px 8px rgba(0,0,0,0.25)'
                      : '0 1px 4px rgba(0,0,0,0.15)',
                    transform: isCurrent ? 'scale(1.05)' : 'none',
                    transition: 'transform 0.15s ease',
                  }}
                >
                  <span style={{ fontSize: 11, lineHeight: 1 }}>
                    {isDone ? '✓' : p.icon}
                  </span>
                  {label}
                </span>
              );
            })}
          </div>
          <div
            style={{
              marginTop: 12,
              fontSize: 8,
              color: 'rgba(255,255,255,0.45)',
              display: 'flex',
              justifyContent: 'center',
              gap: 12,
              flexWrap: 'wrap',
            }}
          >
            <span>{'● Current skill'}</span>
            <span>{'✓ Completed'}</span>
            <span>{'○ Upcoming'}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
