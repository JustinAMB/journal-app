import React from 'react'

const LoginScreen = () => {
  return (
    <>
    <form >
      <input type="email" name="email" placeholder="email" />
      <input type="password" name="password" placeholder="password" />
      <button type="submit">Log in </button>
      <hr />
      <a href="/auth/register">Google</a>
    </form>
    </>
  )
}

export default LoginScreen