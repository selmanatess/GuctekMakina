import React, { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
const BackgroundImageLoader = ({ imageUrl,text }: { imageUrl: string, text:string }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => setLoading(true);
    img.onerror = () => setLoading(true);
  }, [imageUrl]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {loading && (
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <CircularProgress /> 
        </div>
      )}
      <div className="each-slide-effect">
                        <div
                            style={{
                                backgroundImage: `url(${imageUrl})`,
                                backgroundSize: '100% 100%',
                                backgroundRepeat: 'no-repeat',
                            }}
                        >
                            <div className='slide-effect-div'> <span> {text}</span></div>
                        </div>
                    </div>
    </div>
    
  );
};

export default BackgroundImageLoader;
