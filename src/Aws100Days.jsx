import { useState, useMemo } from 'react';
import { AWS_SCHEDULE, AWS_WEEKS, awsDayDate } from './aws100DaysSchedule.js';

const COL = '#D97706';
const COL_DARK = '#B45309';
const BG = '#FFFBEB';
const BORDER = '#FDE68A';

function todayAwsDay() {
  const start = new Date('2028-05-19');
  const d = Math.floor((new Date() - start) / 86400000) + 1;
  return Math.min(Math.max(d, 1), 100);
}

export default function Aws100Days() {
  const [week, setWeek] = useState(0);
  const [openDay, setOpenDay] = useState(null);
  const today = todayAwsDay();

  const days = useMemo(() => {
    if (week === 0) return AWS_SCHEDULE;
    const w = AWS_WEEKS.find((x) => x.n === week);
    return AWS_SCHEDULE.filter((d) => d.day >= w.days[0] && d.day <= w.days[1]);
  }, [week]);

  const doneCount = today - 1;

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
          background: 'linear-gradient(135deg,#92400E 0%,#D97706 55%,#F59E0B 100%)',
          padding: '16px 12px 14px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            maxWidth: 700,
            margin: '0 auto',
            position: 'relative',
            zIndex: 1,
          }}
        >
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
              {'☁'}
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
                {'Block 1 · D1–D100 · Jun 23 – Sep 30, 2026'}
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
                {'100 Days of AWS — Daily Schedule'}
              </h1>
              <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.65)', marginTop: 3 }}>
                {'May 19 – Aug 26, 2028 · D689–D788 of 1000 · 5:30 AM – 8:30 AM IST · Maarek SAA-C03 + labs'}
              </div>
            </div>
          </div>

          <div
            style={{
              background: 'rgba(255,255,255,0.12)',
              borderRadius: 8,
              padding: '8px 12px',
              marginBottom: 10,
              fontSize: 10,
              color: 'rgba(255,255,255,0.85)',
            }}
          >
            {'Today: '}
            <strong>{'Day ' + today}</strong>
            {' · ' + awsDayDate(today)}
            {today <= 100 && (
              <span style={{ opacity: 0.75 }}>
                {' · ' + AWS_SCHEDULE[today - 1].tag + ': ' + AWS_SCHEDULE[today - 1].learn.slice(0, 60) + '…'}
              </span>
            )}
          </div>

          <div style={{ height: 8, borderRadius: 4, background: 'rgba(0,0,0,0.2)', overflow: 'hidden' }}>
            <div
              style={{
                height: '100%',
                width: Math.min(100, today) + '%',
                background: '#fff',
                borderRadius: 4,
                transition: 'width 0.3s',
              }}
            />
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: 8,
              color: 'rgba(255,255,255,0.5)',
              marginTop: 4,
            }}
          >
            <span>{doneCount + ' days done'}</span>
            <span>{Math.min(100, today) + '%'}</span>
            <span>{'100 days'}</span>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 700, margin: '0 auto', padding: '12px 10px 40px' }}>
        <div
          style={{
            display: 'flex',
            gap: 5,
            flexWrap: 'wrap',
            marginBottom: 12,
          }}
        >
          <button
            onClick={() => setWeek(0)}
            style={filterBtn(week === 0)}
          >
            {'All 100 days'}
          </button>
          {AWS_WEEKS.map((w) => (
            <button key={w.n} onClick={() => setWeek(w.n)} style={filterBtn(week === w.n)}>
              {'W' + w.n + ': ' + w.label}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {days.map((d) => {
            const isToday = d.day === today;
            const isDone = d.day < today;
            const isOpen = openDay === d.day;
            return (
              <div
                key={d.day}
                id={'aws-d' + d.day}
                style={{
                  borderRadius: 10,
                  border: '2px solid ' + (isToday ? '#F59E0B' : isDone ? COL + '35' : BORDER),
                  background: isToday ? '#FEF3C7' : isDone ? '#FAFAFA' : '#fff',
                  opacity: isDone ? 0.82 : 1,
                  boxShadow: isToday ? '0 0 0 2px #FDE68A' : '0 1px 3px rgba(0,0,0,0.05)',
                  overflow: 'hidden',
                }}
              >
                <button
                  onClick={() => setOpenDay(isOpen ? null : d.day)}
                  style={{
                    width: '100%',
                    border: 'none',
                    background: 'none',
                    cursor: 'pointer',
                    padding: '10px 12px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 10,
                    textAlign: 'left',
                    fontFamily: 'inherit',
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 9,
                      flexShrink: 0,
                      background: isToday
                        ? 'linear-gradient(135deg,#F59E0B,#D97706)'
                        : isDone
                          ? '#E2E8F0'
                          : BG,
                      border: '2px solid ' + (isToday ? '#F59E0B' : COL + '40'),
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <span style={{ fontSize: 7, fontWeight: 700, color: isToday ? '#fff' : COL }}>
                      {'DAY'}
                    </span>
                    <span
                      style={{
                        fontSize: 14,
                        fontWeight: 900,
                        color: isToday ? '#fff' : isDone ? '#94A3B8' : COL_DARK,
                        lineHeight: 1,
                      }}
                    >
                      {isDone ? '✓' : d.day}
                    </span>
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap', marginBottom: 3 }}>
                      {isToday && (
                        <span
                          style={{
                            fontSize: 8,
                            fontWeight: 800,
                            padding: '1px 6px',
                            borderRadius: 10,
                            background: '#FEF3C7',
                            color: '#D97706',
                            border: '1px solid #FDE68A',
                          }}
                        >
                          {'📍 TODAY'}
                        </span>
                      )}
                      <span
                        style={{
                          fontSize: 8,
                          fontWeight: 700,
                          padding: '1px 6px',
                          borderRadius: 10,
                          background: COL + '18',
                          color: COL_DARK,
                        }}
                      >
                        {d.tag}
                      </span>
                      <span style={{ fontSize: 8, color: '#94A3B8' }}>{d.date}</span>
                    </div>
                    <div
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        color: '#0F172A',
                        lineHeight: 1.45,
                      }}
                    >
                      {d.learn}
                    </div>
                  </div>
                  <span style={{ color: COL, fontSize: 14, opacity: 0.4, flexShrink: 0 }}>
                    {isOpen ? '▲' : '▼'}
                  </span>
                </button>
                {isOpen && (
                  <div
                    style={{
                      borderTop: '1px solid ' + BORDER,
                      padding: '10px 12px 12px',
                      background: BG + '80',
                    }}
                  >
                    <div
                      style={{
                        fontSize: 9,
                        fontWeight: 800,
                        color: COL_DARK,
                        letterSpacing: '0.06em',
                        marginBottom: 5,
                      }}
                    >
                      {'🔬 HANDS-ON (3h session)'}
                    </div>
                    <div style={{ fontSize: 11, color: '#334155', lineHeight: 1.7 }}>{d.lab}</div>
                    <div
                      style={{
                        marginTop: 8,
                        fontSize: 9,
                        color: '#64748B',
                      }}
                    >
                      {'Week ' + d.week + ' · Plan day D' + (688 + d.day) + ' of 1000'}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div
          style={{
            marginTop: 20,
            background: 'linear-gradient(135deg,#92400E,#D97706)',
            borderRadius: 12,
            padding: '14px 16px',
            textAlign: 'center',
            color: '#fff',
          }}
        >
          <div style={{ fontSize: 13, fontWeight: 800, marginBottom: 4 }}>
            {'☁ Day 100 = AWS Block Complete'}
          </div>
          <div style={{ fontSize: 9, opacity: 0.75 }}>
            {'CDK FPO capstone + 2 SAA practice exams · Then Interview Prep (D789–D1000)'}
          </div>
          <a
            href="#/"
            style={{
              display: 'inline-block',
              marginTop: 10,
              fontSize: 10,
              fontWeight: 700,
              color: '#FDE68A',
            }}
          >
            {'← Back to main plan'}
          </a>
        </div>
      </div>
    </div>
  );
}

function filterBtn(active) {
  return {
    fontSize: 9,
    fontWeight: 700,
    padding: '5px 10px',
    borderRadius: 20,
    border: '1px solid ' + (active ? COL : '#E2E8F0'),
    background: active ? BG : '#fff',
    color: active ? COL_DARK : '#64748B',
    cursor: 'pointer',
    fontFamily: 'inherit',
  };
}
