import React from 'react'
import './BgImgContainer.scss';

function BgImgContainer({children, bgimgurl}) {
    return (
        <div className="bg_img" style={{backgroundImage:`url(${bgimgurl})`}}>
            {children}
        </div>
    )
}

export default BgImgContainer;
