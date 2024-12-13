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
  Schedule,
  Organization

} from './routers'

function App() {
  return (
    <BrowserRouter>
      <Aside/>
      <Header/>
      <div className='pl-[80px]'>
        <main className='px-[30px] pb-[30px] pt-[90px] min-h-dvh'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/organization' element={<Organization/>}/>
            <Route path='/organization/:id' element={<Organization/>}/>
            <Route path='/organization/:id/:subId' element={<Organization/>}/>
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
