import React, { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import {
  Header,
  Aside
} from './components'
import {
  Home,
  People,
  PeopleList,
  NotPage,
  Schedule
} from './routers'

function App() {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleAsideWidth = () => {
    setIsExpanded(!isExpanded);
  };

  const asideWidth = isExpanded ? '260px' : '60px';
  const mainWidth = isExpanded ? 'calc(100% - 260px)' : 'calc(100% - 60px)';
  return (
    <BrowserRouter>
        <Header/>
        <div className='w-[100%] flex'>
          <aside className='h-dvh bg-[#efefef]' style={{ width: asideWidth }}>
            <Aside/>
            <button onClick={toggleAsideWidth}>
              {isExpanded ? 'Shrink' : 'Expand'}
            </button>
          </aside>
          <main className='pt-[90px] px-[30px] pb-[30px]' style={{ width: mainWidth }}>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/people/:id' element={<People/>}/>
              <Route path='/People' element={<PeopleList/>}/>
              <Route path='/schedule' element={<Schedule/>}/>
              <Route path='*' element={<NotPage/>}/>
            </Routes>
          </main>
        </div>
        
        
    </BrowserRouter>
  );
}

export default App;
