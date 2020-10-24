import React from "react";
import "./Footer.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import { Grid, Slider } from "@material-ui/core";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <img
          className="footer__albumLogo"
          src="data:image/jpeg;base64,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"
          alt=""
        />

        <div className="footer__songInfo">
          <h4>Still D.R.E</h4>
          <p>Dr. Dre, Snoop Dogg</p>
        </div>
      </div>

      <div className="footer__center">
        <ShuffleIcon className="footer__green" />
        <SkipPreviousIcon className="footer__icon" />
        <PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
        <SkipNextIcon className="footer__icon" />
        <RepeatIcon className="footer__green" />
      </div>

      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
