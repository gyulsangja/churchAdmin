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
  return (
    <BrowserRouter>
      <Aside/>
      <Header/>
      <div className='pl-[88px]'>
        <main className='p-[100px] min-h-dvh'>
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
