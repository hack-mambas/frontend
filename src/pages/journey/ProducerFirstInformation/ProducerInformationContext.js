import React, { useContext, createContext, useReducer } from 'react'

const ProducerInformationContext = createContext(null)

export const useProducerInformation = () => {
  const context = useContext(ProducerInformationContext)

  if (context === undefined) {
    throw new Error('[useProducerInformation]: must be used within a ProducerInformationContext')
  }

  return context
}

const initialState = {
  nome: '',
  senha: '',
  email: '',
  nomeEmpresa: ''
}

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'EDIT':
      return {
        ...state,
        ...payload
      }
    default:
      return state
  }
}

export const ProducerInformationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  function edit(value) {
    dispatch({
      type: 'EDIT',
      payload: value
    })
  }

  const value = {
    state,
    edit
  }

  return <ProducerInformationContext.Provider value={value}>{children}</ProducerInformationContext.Provider>
}
