import React from 'react';
import './Track.css';
import ReactAudioPlayer from 'react-audio-player';

class Track extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isPlaying: false
        };
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
        this.togglePlayPreview = this.togglePlayPreview.bind(this);
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
            return <i   className="Track-action fa fa-minus-circle" 
                        onClick={this.removeTrack}></i>
        }
        return <i   className="Track-action fa fa-plus-circle" 
                    onClick={this.addTrack}></i>
    }

    renderPreviewIcon() {
        if(this.props.track.preview) {
          if (!this.state.isPlaying) {
            return (
                <i  className="fa fa-play Track-preview-icon" 
                    aria-hidden="true" 
                    onClick={this.togglePlayPreview}></i>
            );
          } else {
            return (
                <i  className="fa fa-pause Track-preview-icon" 
                    aria-hidden="true" 
                    onClick={this.togglePlayPreview}></i>
            );
          }
          
        } else {
          return <p className="Track-preview-unavailable">No <br/> Preview <br />Available</p>
        }
    }

    togglePlayPreview() {
        const audio = this.refs.audio;
        if (!this.state.isPlaying) {
          
          audio.play();
          this.setState({ 
            isPlaying: true 
          });
        } else {
          audio.pause();
          this.setState({ 
            isPlaying: false 
          });
        }
      }

    renderPreviewAudio() {
        
    }

    render() {
        return(
            <div className="Track" key={this.props.track.id}>
                <div className="Track-cover-preview">
                    <audio ref="audio" src={this.props.track.preview}></audio>
                    <div className="Track-preview-container">
                        {this.renderPreviewIcon()}
                    </div>
                <img className="Track-album-cover" src={this.props.track.cover} alt="album cover"/>
             </div>
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