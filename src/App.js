import "./styles.css";
import { Title, TitleGreen } from "./styles";

function App() {
  return (
    <>
      <h1 className="Title">
        DevALMO, <span>YouTube Channel</span>
      </h1>

      <br />

      <Title fontSize={50}>
        DevALMO, <span>YouTube Channel</span>
      </Title>

      <br />

      <TitleGreen>
        DevALMO, <span>YouTube Channel</span>
      </TitleGreen>
    </>
  );
}

export default App;
