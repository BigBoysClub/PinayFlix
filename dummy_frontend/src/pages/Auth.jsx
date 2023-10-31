import Form from "../component/Form"

const Auth = () => {

  const loginGoogle = () => {
    window.open('http://localhost:5000/auth/google/callback')
  }

  return (<>
    <Form/>
    <button onClick={loginGoogle}>Login with google</button>
    </>)
}

export default Auth