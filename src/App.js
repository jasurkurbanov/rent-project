import { Button } from "./components/Button/Button";

function App() {
  return (
    <div className="App">
      <Button>Enabled</Button>
      <Button>Hover</Button>
      <Button>Pressed</Button>
      <Button>Focused</Button>
      <Button disabled>Disabled</Button>
    </div>
  );
}

export default App;
