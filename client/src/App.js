import React from "react";
import { Sidebar, MilestoneContainer } from "./components";
import "./App.css";

function App() {
  // const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  return (
    <div className="App">
      <Sidebar />
      <header className="App-header">
        {/* <p>{!data ? "Loading..." : data}</p> */}
        <MilestoneContainer />
      </header>
    </div>
  );
}

export default App;
