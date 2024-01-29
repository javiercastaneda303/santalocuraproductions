import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Layout from '../components/Layout'
import Contact from './Contact'
import Workshops from './WorkShops'
import Talks from './Talks'

const AppRouter: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/charlas" element={<Talks />} />
        <Route path="/talleres" element={<Workshops />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </Layout>
  )
}

export default AppRouter
