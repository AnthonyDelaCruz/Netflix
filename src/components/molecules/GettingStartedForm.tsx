import React, { FC } from 'react'

import { AppInput, AppButton } from 'components/atoms'
import 'styles/molecules/GettingStartedForm.scss'

const GettingStartedForm: FC = () => {
  return (
    <div className='getting-started-form'>
      <AppInput label="Email address" />
      <AppButton>GET STARTED</AppButton>
    </div>
  )
}

export default GettingStartedForm