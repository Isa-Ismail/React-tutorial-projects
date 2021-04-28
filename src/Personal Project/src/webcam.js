import React, {useState} from "react";
import Webcam from "react-webcam";

const Web = () => {
    const [flag, setFlag]= useState(false)
    
    const [side, setSide]= useState({exact:"user"})
    
    var videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: side
      };
       
      const webcamRef = React.useRef(null);

      const capture = React.useCallback(
        () => {
          const imageSrc = webcamRef.current.getScreenshot();
        },
        [webcamRef]
      );

    console.log(side);
    return (
        <div>
            <h3>Lets see your beautiful face good hooman</h3>
            <button className='btn' onClick={()=>setFlag(!flag)}>Turn on/off camera</button>
             {flag && (<div style={{marginTop:'1.4rem'}}> 
                            
                            <button className='btn' style={{alignItems:'center'}} onClick={()=>setSide(()=>{
                                         if(side.exact==="user"){
                                             setSide( {exact:"environment"})
                                         }
                                         else{
                                             setSide({exact:"user"})
                                         }
                                     })}>Rotate camera</button> 
                            
                            <div>
                                <Webcam style={{textAlign:'left'}}  videoConstraints={videoConstraints} 
                                     width={480} 
                                     height={480}
                                     ref={webcamRef}
                                     screenshotFormat="image/jpeg"
                                     />
                                     <button className='btn' onClick={capture}>Capture photo</button>
                            </div>
                      </div>)}
        </div>
    )
}

export default Web
