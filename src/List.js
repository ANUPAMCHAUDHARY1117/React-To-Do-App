import React from 'react';
import Delete from './Delete';

function List(props) {
    if (props) {
        return <div className="List">
            <li>{props.task}<Delete deleteEntry={props.deleteEntry} id={props.id}/></li>
        </div>
    } else {
        return <div className="List">
        </div>
    }
}

export default List;