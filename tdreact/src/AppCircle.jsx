import Circle from './Components/Circle';

const data=[
    {
        circleColor: 'yellow',
        circleNumber: 1
    },
    {
        circleColor: 'cyan',
        circleNumber: 2
    },
    {
        circleColor: 'magenta',
        circleNumber: 3,
    },
    {
        circleColor: 'blue',
        circleNumber: 4
      },
      {
        circleColor: 'orange',
        circleNumber: 5
      },
      {
        circleColor: 'gray',
        circleNumber: 6
      },
      {
        circleColor: 'pink',
        circleNumber: 7
      },
      {
        circleColor: 'brown',
        circleNumber: 8
      },
        
  ]
  
  function App() {
    return (
      <>
      
        {data.map(circle => <Circle circleColor={circle.circleColor} circleNumber={circle.circleNumber}/>)}
   
      </> 
  
    ); 
  }
  
  export default App;
  