import React from 'react';
export default function KindOfFood(props) {  
  return (
    <li className="nav-item">
      <a
        className="nav-link "
        id={props.item.id}
        data-toggle="pill"
        href= {props.item.href}
        role="tab"
        aria-controls={props.item.ariaControls}
        aria-selected= {props.item.ariaSelected}
      >
        <div className="single_menu text-center">
          <div className="icon">
            <i className={props.item.icon}></i>
          </div>
          <h4>{props.item.name}</h4>
        </div>
      </a>
    </li>
  );
}
