const LS_KEYWORD = 'voca'

export const setUser = value => {
  localStorage.setItem(`${LS_KEYWORD}-user`, JSON.stringify(value))
}

export const getUser = () => JSON.parse(localStorage.getItem(`${LS_KEYWORD}-user`))

export const setToken = value => {
  localStorage.setItem(`${LS_KEYWORD}-token`, value)
}

export const getToken = () => localStorage.getItem(`${LS_KEYWORD}-token`)

export const clear = () => {
  localStorage.removeItem(`${LS_KEYWORD}-token`)
  localStorage.removeItem(`${LS_KEYWORD}-user`)
}
