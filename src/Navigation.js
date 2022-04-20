import React from 'react'

export default function Navigation(props) {
    return (<nav className="Navigation--class">
        <ul className="ul--industry">
            <li><a href="#" onClick={props.changeHollywood}>Hollywood</a></li>
            <li>  <a href="#" onClick={props.changeTollywood}>Tollywood</a></li>
            </ul>
    </nav>)
}
