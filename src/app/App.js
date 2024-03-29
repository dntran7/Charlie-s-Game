
import Game from '../components/CardGame'
function App() {
  const title = "Charlie's Game";
  return (
    <div className="App">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl header-center"> {title} </h1>
      <Game />
    </div>
  );
}

export default App;