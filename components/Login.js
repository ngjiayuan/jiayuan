import { Button, Container, Form } from 'react-bootstrap';
import { mono } from './Landing';
import { useContext, useState } from 'react';
import { AuthenticationContext } from '../utils/auth/authentication.context';
import { useRouter } from 'next/router';

export default function Login() {
  const router = useRouter();
  const { error, SignIn } = useContext(AuthenticationContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    SignIn(email, password);
    router.push("/myday")
  }

  return (
    <Container className="flex flex-column items-center justify-center h-screen">
      <Form className={mono.className}>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="text"
          value={email}
          onChange={e => setEmail(e.currentTarget.value)}
          className="mb-2"
        />
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={e => setPassword(e.currentTarget.value)}
          className="mb-3"
        />
        {error && <p>{error}</p>}
        <Button variant="outline-secondary" type="submit" onClick={handleSignIn}>Login</Button>
      </Form>
    </Container>
  )
}