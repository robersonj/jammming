import React from 'react';
import './Track.css';

class Track extends React.Component {
    
    constructor(props) {
        super(props);

        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this)
    }
    // Adds this.props.track as an argument to the addTrack method in App.js
    addTrack() {
        this.props.onAdd(this.props.track);
    }

    // Adds this.props.track as an argument to the removeTrack method in App.js
    removeTrack() {
        this.props.onRemove(this.props.track);
    }
    
    // Renders either a + or a - link to add or remove tracks from playlist.
    renderAction() {
        if (this.props.isRemoval) {
            return <a   className="Track-action" 
                        onClick={this.removeTrack}>-</a>
        }
        return <a   className="Track-action" 
                    onClick={this.addTrack}>+</a>
    }
    
    render() {
        return(
            <div className="Track">
                <img src={this.props.track.cover} />
                <div className="Track-information">
                    <h3>{this.props.track.name}</h3>
                    <p>{this.props.track.artist} | {this.props.track.album}</p>
                </div>
                {this.renderAction()}
            </div>
        );
    }
}

export default Track;