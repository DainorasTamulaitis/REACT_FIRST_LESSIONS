import BlueBoxWithButton from "./Components/BlueBoxWithButton";
import RedCircleWithButton from "./Components/RedCircleWithButton";

function AppRedCircleBlueBox() {
    return (
      <div>
         <BlueBoxWithButton buttonText={'S P A U S T I'}/>
        <BlueBoxWithButton buttonText={'S T U M T I'}/>
        <RedCircleWithButton color={'pink'} buttonText={'S P A U S T I'}/>
        <RedCircleWithButton color={'yellow'} buttonText={'K E L T I'}/>
      </div>
    ); 
  }
  
  export default AppRedCircleBlueBox;