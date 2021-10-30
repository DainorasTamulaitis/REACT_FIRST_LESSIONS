

function RedCircleWithButton({color, buttonText}) {
    return (
  
      <div className="RedCircleWithButton" style={{backgroundColor: color}}>
        <button>{buttonText}</button>
      </div>

    ); 
  }
  
  export default RedCircleWithButton;