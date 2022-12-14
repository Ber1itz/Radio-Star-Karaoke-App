import React from 'react';

export default function Header() {
    return (
        <nav className="navbar navbar-inverse visible-xs">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Radio Star Karaoke</a>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
                <li className="activeStartPause">
                  <span onclick="playSong();" className="activeAction">Start</span>
                </li>
                <li className="activeStop">
                  <span onclick="stopSong();" className="activeAction">Stop</span>
                </li>
                <li className="activeRepeat">
                  <span onclick="repeatSongOn();" className="activeAction">Repeat</span>
                </li>
                <li>
                  <span onclick="getCurrentTime();" className="activeAction">
                    Current Timing: <span className="showCurrentTimeSong"></span>
                  </span>
                </li>
                <li>
                  <span data-toggle="modal" data-target="#showReadMe" className="activeAction">Important Instructions</span>
                </li>
            </ul>
          </div>
        </div>
      </nav> 
    )
}