  function Circle({circleColor, circleNumber}) { 

    return (
        <div className="circle">

            <span style={{
              background: circleColor,
              width: '150px',
              height: '150px',
              borderRadius: '100px',
              display: "flex",
              margin: '0px',
              marginLeft: '130px',
              justifyContent: 'center',
              alignItems: 'center'
              

              }}>{circleNumber}</span>
        </div>
        
      
    )
  }

  export default Circle;