import React from 'react'
import { Routes ,Route } from 'react-router-dom';
import Landing from './templates/landing'
import Signin from './templates/signin'
import Signup from './templates/signup'
import ForgetPassword from './templates/forget_password'
import CheckOTP from './templates/otp_check'
import ResetPassword from './templates/reset_password'
import Invest from './templates/Invest'

const  Main = () => (
    <Routes>

      <Route exact path="/" element={<Landing />} />
      <Route exact path="/signin" element={<Signin />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/invest_ever" element={<Invest />} />

      <Route exact path="/forget-password" element={<ForgetPassword />} />
      <Route exact path="/otp-check" element={<CheckOTP />} />
      <Route exact path="/reset-password" element={<ResetPassword />} />



    </Routes>
)
export default Main;