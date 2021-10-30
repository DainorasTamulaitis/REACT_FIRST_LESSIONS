  function BoxBlackBox({ls, boxColor, boxNumber}) { 

    return (
      <>
        <div className="black-box">

            <span style={{
              
              letterSpacing: ls,
              color: boxColor

              }}>This is BLACK box number: {boxNumber}</span>
        </div>
        
        </>
    )
  }

  export default BoxBlackBox;