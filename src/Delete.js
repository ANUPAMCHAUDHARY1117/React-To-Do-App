import React from 'react';

function Delete(props){
    if (props) {
        return <div className="delete">
            <button><span data_id={props.id} onClick={props.deleteEntry}>Delete</span></button>
        </div>
    } else {
        return <div className="delete">
        </div>
    }
}

export default Delete;