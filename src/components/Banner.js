import React from 'react'

export default function Banner(props) {
    const {children,title,subtitle}=props
    console.log(props.children);
    return (
        <div className="banner">
            <h1>{title}</h1>
            <div></div>
            <p>{subtitle}</p>
            {children}
        </div>
    )
}
