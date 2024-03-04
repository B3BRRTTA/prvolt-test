import { Add, Filter, List, Status } from "./components";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "20rem",
        margin: "0 auto",
        padding: "1rem",
      }}
    >
      <Add />
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Status />
        <Filter />
      </div>
      <div style={{ height: "80vh", overflowY: "scroll", width: "100%", padding: "1rem" }}>
        <List />
      </div>
    </div>
  );
}

export default App;
