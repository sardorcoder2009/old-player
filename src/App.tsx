import header from "./header";
import ListGroup from "./ListGroup";

function App() {
  const companies = ["Xiaomi", "Seiko", "LG", "Vivo", "Audi"];
  const processors = ["Intel", "AMD", "Snapdragon", "Dimensity"];
  return (
    <>
      <header />
      <ListGroup title="Companies" items={companies} />
      <ListGroup title="Processors" items={processors} />
    </>
  );
}

export default App;

