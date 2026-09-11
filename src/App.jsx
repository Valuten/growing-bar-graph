import HorizontalBarGraph from './components/HorizontalBarGraph.jsx';
import './App.css';

function App() {
  return (
    <div className="demo">
      <h1>growing-bar-graph – Demo</h1>
      <HorizontalBarGraph label="Deutsch" value={72} maxvalue={100} barwidthpx={400} />
      <HorizontalBarGraph label="Mathematik" value={55} maxvalue={100} barwidthpx={400} />
      <HorizontalBarGraph label="Englisch" value={90} maxvalue={100} barwidthpx={400} />
    </div>
  );
}

export default App;
