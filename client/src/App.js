// import logo from './logo.svg';
import { useState } from "react";
import './App.css';
import Form from './components/Form'
import Chart from './components/Chart';
import { UserData } from "./data";
import ExchangRate from "./components/ExchangeRate";

function App() {

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div className="App">
      <div className="App-header">
          <h2>Exchange Rate App</h2>
        </div>
      <Form />
      <Chart chartData={userData} />
      <ExchangRate />
    </div>
  );
}

export default App;
