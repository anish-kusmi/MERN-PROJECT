localStorage.setItem('name','john')
localStorage.setItem('token','1234vfff')
localStorage.setItem('user',JSON.stringify({name: 'john'}))
localStorage.setItem('token',JSON.stringify({token: 'token'}))

let token= localStorage.getItem('token')
let token1= JSON.parse(localStorage.getItem('token'))

let name=localStorage.getItem('name')