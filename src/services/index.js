export const getToken = () => {
  return window.localStorage.getItem(process.env.REACT_APP_AUTH_TOKEN_KEY)
}

export const setToken = (token) => {
  return window.localStorage.setItem(process.env.REACT_APP_AUTH_TOKEN_KEY, token)
}

export const removeToken = () => {
  return window.localStorage.removeItem(process.env.REACT_APP_AUTH_TOKEN_KEY)
}
