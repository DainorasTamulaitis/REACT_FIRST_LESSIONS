
import BoxBlackBox from './Components/BoxBlackBox';
import SimpleElement from './Components/SimpleElement';

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
    
      {data.map(box => <BoxBlackBox boxColor={box.boxColor} ls={box.ls} boxNumber={box.boxNumber}/>)}

    <div>
        
    sveikas

    </div>  

      <i>labas</i>

      {SimpleElement}
      
      {SimpleElement, a + b}
    
    </> 

  ); 
}

export default App;
