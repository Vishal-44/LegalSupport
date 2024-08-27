import { LOGIN_URL, REGISTER_URL, GET_USER_DETAIL_URL, LOGOUT_URL, SUMMARIZE_URL } from './Urls'

export const register = async(data)=>{
    const res = await fetch(REGISTER_URL, {
      method : 'POST',

      headers : {
        'Content-Type' : 'application/json'
      },

      body : JSON.stringify(data),
      credentials : 'include'
    })
    const result = await res.json()
    return result
}


export const login = async(data)=>{
    const res = await fetch(LOGIN_URL, {
        method : 'POST',

        headers : {
          'Content-Type' : 'application/json'
        },

        body : JSON.stringify(data),
        credentials : 'include'
      })
      const result = await res.json()
      return result
}


export const logout = async() => {
    const res  = await fetch(LOGOUT_URL, {
        method : 'GET',
        headers : {
            'Content-Type' : 'application/json'
        },
        credentials : 'include'
    })
    const result = await res.json()
    return result
}


export const getUserDetails = async() =>{
    const res = await fetch(GET_USER_DETAIL_URL, {
        method : 'GET',
        headers : {
            'Content-Type' : 'application/json'
        },
        credentials : 'include'
    })
    const result = await res.json()
    return result
}



export const summarize = async(data) => {
    const res = await fetch(SUMMARIZE_URL, {
        method : 'POST',
        body : data,
        headers : {
            // 'Content-Type' : 'multipart/form-data'
        },
        credentials : 'include'
    })
    const result = await res.json()
    return result
}