import React from 'react';
import react from '../../Images/react.png'

const imgStyle = {
    height:"35px",
    verticalAlign:"top"
}

const Header = () =>{
    return (
        <div className="pt-3 pl-2">
            <img src={react} alt="" style={imgStyle} />
            <span className="h2 pt-4 text-white-50">React Courese - CounterApp</span>
        </div>
    )
};

export default Header;