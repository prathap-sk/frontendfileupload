import { createRef } from "react"
import './App.css';

function App() {
  const fileInput = createRef();
  const handleSubmit = async (event) => {
    // Prevent the value and behave like single page application
    event.preventDefault();
    const formData = new FormData();
    // formData will take key/value pairs first it takes name of the input field 
    // Second it takes the second the ref value of the files
    formData.set("avatar", fileInput.current.files[0])
    try {
      const response = await fetch("/profile", {
        method: "POST",
        body: formData
      })
      // const parsedData = await response.json();
      // Handling file upload succeed or not
      if (response.ok) {
        alert("File Uploaded");
      } else {
        console.error("Some error occured")
      }
    } catch (err) {
      console.error(err.message)
    }
  }
  return (
    <div className="App">
      <h1>File Upload in React</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" name="avatar" ref={fileInput} />
        <input type="submit" value="Upload" />
      </form>
    </div>
  );
}

export default App;
