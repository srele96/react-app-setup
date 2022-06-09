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

createRoot(document.getElementById('foo')).render(<Foo />);
createRoot(document.getElementById('bar')).render(<Bar />);
createRoot(document.getElementById('baz')).render(<Baz />);
