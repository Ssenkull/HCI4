import Card from "../../UI/Card";

import React, { useState, useEffect, useRef } from "react";

import classes from "./SoundSection.module.css";

import Button from "../../UI/Button";

import onOn from "../../../music/Cartoon - On & On.mp3";
import shine from "../../../music/Spektrem - Shine.mp3";
import invicible from "../../../music/DEAF KEV - Invincible.mp3";
import immortal from "../../../music/Immortal - NEFFEX.mp3";
import heroesTonight from "../../../music/Janji - Heroes Tonight.mp3";
import superhero from "../../../music/Unknown Brain - Superhero.mp3";

import SliderVolume from "./SliderVolume";
import Select from "../../UI/Select";

const tracks = [
  {
    ref: onOn,
    value: "sound1",
    name: "Cartoon - On & On",
  },
  {
    ref: shine,
    value: "sound2",
    name: "Spektrem - Shine",
  },
  {
    ref: invicible,
    value: "sound3",
    name: "DEAF KEV - Invincible",
  },
  {
    ref: immortal,
    value: "sound4",
    name: "Immortal - NEFFEX",
  },
  {
    ref: heroesTonight,
    value: "sound5",
    name: "Janji - Heroes Tonight",
  },
  {
    ref: superhero,
    value: "sound6",
    name: "Unknown Brain - Superhero",
  },
];

const speeds = [
  {
    name: "x0.5",
    value: "0.5",
  },
  {
    name: "x1",
    value: "1",
  },
  {
    name: "x1.5",
    value: "1.5",
  },
  {
    name: "x2",
    value: "2",
  },
];
const SoundSection = () => {
  const audioPlayer = useRef();

  const [currentSong, setCurrentSong] = useState(shine);
  const [songValue, setSongValue] = useState("sound2");

  const [speed, setSpeed] = useState(1);

  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(30);

  const onSpeedChange = (speed) => {
    setSpeed(+speed);
  };

  const onSongChange = (value) => {
    tracks.forEach((track) => {
      if (track.value === value) {
        console.log(value);
        setCurrentSong(track.ref);
        setSongValue(value);
      }
    });
  };

  useEffect(() => {
    if (isPlaying) {
      tracks.forEach((track) => {
        if (track.value === songValue) {
          document.title = track.name;
        }
      });
    } else if (!isPlaying) {
      document.title = "Lab 4 on HCI";
    }
  }, [isPlaying]);

  //VolumeChanger
  useEffect(() => {
    if (audioPlayer) {
      audioPlayer.current.volume = volume / 100;
    }
  }, [volume]);

  const onVolumeChange = (v) => {
    setVolume(v);
  };

  const togglePlay = () => {
    if (!isPlaying) {
      audioPlayer.current.play();
    } else {
      audioPlayer.current.pause();
    }
    setIsPlaying((prev) => !prev);
  };

  useEffect(() => {
    audioPlayer.current.playbackRate = +speed;
  }, [speed]);

  return (
    <section>
      <Card>
        <audio src={currentSong} ref={audioPlayer} />
        <div className={classes.main}>
          <div className={classes.center}>
            <SliderVolume onChange={onVolumeChange} volume={volume} />

            <Select
              disabled={isPlaying}
              name="Voice"
              onChange={onSongChange}
              value={songValue}
              options={tracks}
            />
          </div>
          <div className={`${classes.center} ${classes.center2}`}>
            <Select
              name="Playback speed"
              value={speed}
              onChange={onSpeedChange}
              options={speeds}
            />
            {!isPlaying ? (
              <Button onClick={togglePlay}> Play </Button>
            ) : (
              <Button onClick={togglePlay}> Pause </Button>
            )}
          </div>
        </div>
      </Card>
    </section>
  );
};

export default SoundSection;
