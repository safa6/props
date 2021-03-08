import logo from './logo.svg';
import './App.css';
import Profile from './profile/Profile.js'
import functionalert from './profile/functionalert.js'

function App() {
  return (
    <div className="App">
      <Profile name="Safa Aloui" Profession="student" bio=" i'am learning JavaScript"/>
      <div className="image"> <img src="https://i.pinimg.com/originals/fc/45/6a/fc456aba424730185b1496c75c99c7d2.jpg" alt="profile" /></div>
      <functionalert name="safa Aloui" alertMyInput={"alertMyInput"}/>
    
    </div>
    

  );
}


export default App;
