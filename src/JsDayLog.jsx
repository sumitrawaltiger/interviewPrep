import { getJsCourseDay, JS_COURSE_DAYS } from './data/jsCourseDays.js';

const COL_DARK = '#CA8A04';
const BORDER = '#FDE047';

function pad(n) {
  return String(n).padStart(3, '0');
}

function TopicRow({ topic, done }) {
  return (
    <div
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
          background: done ? '#DCFCE7' : '#F1F5F9',
          color: done ? '#15803D' : '#94A3B8',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 12,
          fontWeight: 800,
        }}
      >
        {done ? '✓' : '○'}
      </span>
      <span style={{ fontSize: 12, fontWeight: 600, color: '#0F172A', lineHeight: 1.5 }}>{topic}</span>
    </div>
  );
}

export default function JsDayLog({ day }) {
  const data = getJsCourseDay(day);
  if (!data) {
    return (
      <div style={{ padding: 40, textAlign: 'center' }}>
        <p>{'Day not found'}</p>
        <a href="#/">{'← Back to plan'}</a>
      </div>
    );
  }

  const prev = day > 1 ? getJsCourseDay(day - 1) : null;
  const next = day < JS_COURSE_DAYS.length ? getJsCourseDay(day + 1) : null;
  const topicCount = data.modules
    ? data.modules.reduce((n, m) => n + m.topics.length, 0)
    : (data.topics?.length ?? 0) + 1;

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
                {'Javascript · D' + data.planDay + ' · ' + data.date}
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
                {'Day ' + pad(data.day) + ' — Study Log'}
              </h1>
              <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.65)', marginTop: 3 }}>
                {'Coder Army · Day of Thunder · Lecture ' + String(data.lecture).padStart(2, '0') + ' · ' + data.duration}
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
            {data.done
              ? '✅ Lecture ' + String(data.lecture).padStart(2, '0') + ' studied · ' + topicCount + ' topics'
              : '○ Lecture ' + String(data.lecture).padStart(2, '0') + ' · ' + data.title + ' · ' + data.duration}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 700, margin: '0 auto', padding: '14px 10px 40px' }}>
        <div
          style={{
            background: '#fff',
            borderRadius: 12,
            padding: '12px 14px',
            border: '2px solid ' + BORDER,
            marginBottom: 14,
            boxShadow: '0 2px 8px rgba(234,179,8,0.12)',
          }}
        >
          <div style={{ fontSize: 8, fontWeight: 800, color: '#94A3B8', letterSpacing: '0.1em', marginBottom: 4 }}>
            {data.thunderDay ? 'DAY ' + data.thunderDay + ' OF THUNDER' : 'LECTURE ' + String(data.lecture).padStart(2, '0')}
          </div>
          <div style={{ fontSize: 15, fontWeight: 900, color: '#0F172A', marginBottom: 4 }}>
            {'Lecture' + String(data.lecture).padStart(2, '0') + ': ' + data.title}
          </div>
          <div style={{ fontSize: 10, color: '#64748B' }}>{'⏱ ' + data.duration + ' · 3h session (5:30–8:30 AM BKK)'}</div>
          {data.notionUrl && (
            <a
              href={data.notionUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                marginTop: 10,
                padding: '7px 12px',
                borderRadius: 8,
                background: '#0F172A',
                color: '#fff',
                fontSize: 11,
                fontWeight: 700,
                textDecoration: 'none',
              }}
            >
              {'📝 ' + data.notionLabel + ' → Open in Notion'}
            </a>
          )}
        </div>

        {data.modules ? (
          data.modules.map((mod) => (
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
                  <TopicRow key={topic} topic={topic} done={data.done} />
                ))}
              </div>
            </div>
          ))
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <TopicRow topic={data.title} done={data.done} />
            {data.topics?.map((topic) => (
              <TopicRow key={topic} topic={topic} done={data.done} />
            ))}
          </div>
        )}

        <div style={{ display: 'flex', gap: 8, marginTop: 18 }}>
          {prev ? (
            <a
              href={prev.hash}
              style={{
                flex: 1,
                textAlign: 'center',
                padding: '10px 8px',
                borderRadius: 8,
                background: '#fff',
                border: '1px solid ' + BORDER,
                textDecoration: 'none',
                fontSize: 10,
                fontWeight: 700,
                color: COL_DARK,
              }}
            >
              {'← Day ' + pad(prev.day)}
            </a>
          ) : (
            <div style={{ flex: 1 }} />
          )}
          {next ? (
            <a
              href={next.hash}
              style={{
                flex: 1,
                textAlign: 'center',
                padding: '10px 8px',
                borderRadius: 8,
                background: 'linear-gradient(135deg,#854D0E,#EAB308)',
                textDecoration: 'none',
                fontSize: 10,
                fontWeight: 700,
                color: '#fff',
              }}
            >
              {'Day ' + pad(next.day) + ' →'}
            </a>
          ) : (
            <div style={{ flex: 1 }} />
          )}
        </div>

        <div
          style={{
            marginTop: 14,
            background: 'linear-gradient(135deg,#854D0E,#EAB308)',
            borderRadius: 12,
            padding: '14px 16px',
            textAlign: 'center',
            color: '#fff',
          }}
        >
          <div style={{ fontSize: 13, fontWeight: 800, marginBottom: 4 }}>
            {data.done
              ? '📜 Day ' + pad(data.day) + ' complete'
              : '📜 Day ' + pad(data.day) + ' — watch Lecture ' + String(data.lecture).padStart(2, '0')}
          </div>
          <div style={{ fontSize: 9, opacity: 0.8 }}>
            {next ? 'Next: Day ' + pad(next.day) + ' · ' + next.date : 'End of 19-day Javascript lecture block'}
          </div>
        </div>
      </div>
    </div>
  );
}
