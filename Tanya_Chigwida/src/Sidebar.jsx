import {useState} from "react";

export default function Sidebar(){
    //Tracks Toggle state. The false boolean keep the toogle in hamburger state and is we change to false, it will change to X
    const[toggle, setToggled] = useState(false); 

    const handleClick = () => {
        setToggled(!toggle); //Flips the state each time its clicked on
    };

    const sidebarStyle = {
        width: toggle ? '220px' : '0',
        transition: '0.5s',
    };
    

    const mainStyle = {
        marginLeft: toggle ? '150' : '0',
        transition: '0.3s',
    };


    return (
        
        <>
        <div className={`container ${toggle ? 'change' : ''}`} onClick={handleClick}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
        </div>
        
        <div id="mySidebar" style={sidebarStyle} className="sidebar">
                <a href="" onClick={handleClick} className="click"></a>
                <a href="aboutme">Home</a> <br />
                <a href="">About Me</a> <br />
                <a href="">Skills</a> <br />
                <a href="">Projects</a> <br />
                <a href="">Contact Me</a>
            </div></>
    
    );

}