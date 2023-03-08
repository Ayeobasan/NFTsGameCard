// import styled from '@emotion/styled'
import "./app.css";
import NftCard from "./Component/NftCard";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

/* BODY */

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid justify-content-center align-items-center">
          <h2 class="navbar-brand h2">NFTs Games Cards</h2>
        </div>
      </nav>
      <NftCard />
    </div>
  );
}

export default App;
