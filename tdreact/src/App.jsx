
import Box_black_box from './Components/Box_black_box';
import Simple_element from './Components/Simple_element';

const a = 5;
const b = 6;

const data=[
  {
    ls: '2px',
    boxColor: 'yellow',
    boxNumber: 69
  },
  {
    ls: '4px',
    boxColor: 'cyan',
    boxNumber: 33
  },
  {
    ls: '6px',
    boxColor: 'magenta',
    boxNumber: 44
  }
]

function App() {
  return (
    <>
    
      {data.map(box => <Box_black_box boxColor={box.boxColor} ls={box.ls} boxNumber={box.boxNumber}/>)}

    <div>
        
    sveikas

    </div>  

      <i>labas</i>

      {Simple_element}
      
      {Simple_element, a + b}
    
    </> 

  ); 
}

export default App;
