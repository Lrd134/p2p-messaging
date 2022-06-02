import { useState } from 'react';
export default function Signup({createUser}) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = event => {
    event.preventDefault();
    createUser({ user: {
      username: username,
      password: password
    }})
  }
  const handleChange = event => {
    event.preventDefault();
    if (event.target.name === "username") {
      setUsername(event.target.value)
      return;
    }
    setPassword(event.target.value)
    
  }
  return (
    <main>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={username} name="username" type="text" placeholder="User Name"/>
        <input onChange={handleChange} value={password} name="password" type="text" placeholder="Password"/>
        <input onClick={handleSubmit} type="Submit" readOnly={true} value="Signup" onSubmit={handleSubmit}/>
      </form>
    </main>
  );
}