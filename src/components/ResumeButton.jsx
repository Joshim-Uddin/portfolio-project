import React from 'react';


const ResumeButton = () => {
    const handleDownload = () => {
    window.open("https://drive.google.com/u/1/uc?id=1Z68IXqh5s3QRZMQCqaVdLuMmCoTDlaam&export=download", "_parent")
      };
    
      return (
        <button className='btn btn-outline btn-primary' onClick={handleDownload}>Download Resume</button>
      );
};

export default ResumeButton;