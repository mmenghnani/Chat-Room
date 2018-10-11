import React from 'react'

class RoomList extends React.Component {
    render () {
        return (
            <div className="rooms-list">
                <div className="help-text">RoomList</div>
                <ul>
                    {console.log(this.props)}
                </ul>
            </div>
        )
    }
}

export default RoomList