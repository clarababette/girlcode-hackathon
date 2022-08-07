import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { FormProvider } from './Contexts/formContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FormProvider>
      <App style={{ width: '100%' }} />
      </FormProvider>
  </React.StrictMode>
)
