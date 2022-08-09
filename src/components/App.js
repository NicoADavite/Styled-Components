import Image from "./Image";
import ProfilePic from "images/profile-pic.jpg";


function App() {
  return (
    <div className="App">
      <Image width="500px" alt="Profile-Pic" border={"5px solid red"} src={ProfilePic}/>
      <Image width="100px" alt="Profile-Pic" src={ProfilePic}/>
    </div>
  );
}

export default App;
