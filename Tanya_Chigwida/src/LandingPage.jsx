import React from "react"
import MyImage from './assets/images/Img.jpg'

export default function Landing() {

    return (
        
        <>
        <div className='main'></div><div className='header'>

            
                <img src={MyImage} alt="Picture of Tanya" width={200} className='propic' />
                <h1>Hi, I'm a Computer Science Student</h1>
                <p>Seeking to enter the Tech-field with the intention of delivering seamless user experiences through code, design, and technical skills, with entry level certificates in UX/UI Design, Front-end development and currently pursuing CompTIA A+ certification .</p>

                <div className="Icons">
                    <div className="icons8-github"></div>
                    <img width="64" height="64" src="https://img.icons8.com/nolan/64/figma.png" alt="figma" />
                    <img width="64" height="64" src="https://img.icons8.com/nolan/64/canva.png" alt="canva" />
                    <img width="64" height="64" src="https://img.icons8.com/nolan/64/visual-studio.png" alt="visual-studio" />
                    <img width="64" height="64" src="https://img.icons8.com/nolan/64/html-5.png" alt="html-5" />
                    <img width="64" height="64" src="https://img.icons8.com/nolan/64/css3.png" alt="css3" />
                    <img width="64" height="64" src="https://img.icons8.com/nolan/64/javascript-logo.png" alt="javascript-logo" />
                    <img width="64" height="64" src="https://img.icons8.com/nolan/64/react-native.png" alt="react-native" />
                    <img width="64" height="64" src="https://img.icons8.com/nolan/64/laptop-settings.png" alt="laptop-settings" />
                    <img width="64" height="64" src="https://img.icons8.com/nolan/64/amazon-web-services.png" alt="amazon-web-services" />
                </div>
            </div>
            </>
          


    );
}