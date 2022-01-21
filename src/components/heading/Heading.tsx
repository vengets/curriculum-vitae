import React from 'react';
import './Heading.css';

export function Heading( prop: {title : string}) {
    return (
        <div className="main">
            <h1 className="header">Curriculum Vitae of {prop.title}</h1>
        </div>
    );
}
