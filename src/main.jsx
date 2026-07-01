import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Aws100Days from './Aws100Days.jsx'
import Day001 from './Day001.jsx'
import Day002 from './Day002.jsx'
import Day003 from './Day003.jsx'
import Day004 from './Day004.jsx'
import Day005 from './Day005.jsx'
import Day006 from './Day006.jsx'
import Day007 from './Day007.jsx'
import Day008 from './Day008.jsx'
import Day009 from './Day009.jsx'
import Day010 from './Day010.jsx'
import Day011 from './Day011.jsx'
import Day012 from './Day012.jsx'
import Day013 from './Day013.jsx'
import Day014 from './Day014.jsx'
import Day015 from './Day015.jsx'
import Day016 from './Day016.jsx'
import Day017 from './Day017.jsx'
import Day018 from './Day018.jsx'
import Day019 from './Day019.jsx'

const DAY_PAGES = {
  '#/day-001': Day001,
  '#/day-002': Day002,
  '#/day-003': Day003,
  '#/day-004': Day004,
  '#/day-005': Day005,
  '#/day-006': Day006,
  '#/day-007': Day007,
  '#/day-008': Day008,
  '#/day-009': Day009,
  '#/day-010': Day010,
  '#/day-011': Day011,
  '#/day-012': Day012,
  '#/day-013': Day013,
  '#/day-014': Day014,
  '#/day-015': Day015,
  '#/day-016': Day016,
  '#/day-017': Day017,
  '#/day-018': Day018,
  '#/day-019': Day019,
}

function Router() {
  const [hash, setHash] = useState(window.location.hash)
  useEffect(() => {
    const onHash = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])
  if (hash === '#/aws-100-days') return <Aws100Days />
  const DayPage = DAY_PAGES[hash]
  if (DayPage) {
    const Page = DayPage
    return <Page />
  }
  return <App />
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router />
  </StrictMode>,
)
