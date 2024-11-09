import React, { useState } from "react";
import "./App.css";
import FormComponent from "./components/FormComponent";
import SubmittedData from "./components/SubmittedData";

function App() {
  const [submittedData, setSubmittedData] = useState(null);

  const handleFormSubmit = (data) => {
    setSubmittedData(data);
  };

  return (
    <div className="App">
      <h1>Data Entry Form</h1>
      <FormComponent onSubmit={handleFormSubmit} />
      {submittedData && <SubmittedData data={submittedData} />}
    </div>
  );
}

export default App;
