import React from 'react'
import { Routes ,Route } from 'react-router-dom';
import Landing from './templates/landing'
import Signin from './templates/signin'
import Signup from './templates/signup'

const  Main = () => (
    <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route exact path="/signin" element={<Signin />} />
      <Route exact path="/signup" element={<Signup />} />
    </Routes>
)
export default Main;