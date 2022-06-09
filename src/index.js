import { createRoot } from 'react-dom/client';

function Foo() {
  return <h1>Foo Root</h1>
}

function Bar() {
  return <h1>Bar</h1>
}

function Baz() {
  return <h1>Baz</h1>
}

function Form() {
  return (
    <form action="#">
      <label htmlFor="username">
        Username:
        <input type="text" id="username" />
      </label>
      <label htmlFor="" id="password">
        Password:
        <input type="password" id="password" />
      </label>
      <button type="submit">Submit</button>
    </form>
  )
}

createRoot(document.getElementById('foo')).render(<Foo />);
createRoot(document.getElementById('bar')).render(<Bar />);
createRoot(document.getElementById('baz')).render(<Baz />);
createRoot(document.getElementById('nested-root')).render(<Form />);
