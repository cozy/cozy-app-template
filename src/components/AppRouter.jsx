import React from 'react'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'

import AppLayout from '@/components/AppLayout'
import { Contacts } from '@/components/Views/Contacts'
import { Intents } from '@/components/Views/Intents'
import { Welcome } from '@/components/Views/Welcome'

const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/welcome" element={<Welcome />}></Route>
          <Route path="/contacts" element={<Contacts />}></Route>
          <Route path="/intents" element={<Intents />}></Route>
          <Route path="*" element={<Navigate replace to="/welcome" />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default AppRouter
