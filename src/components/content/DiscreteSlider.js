import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles(theme => ({
  root: {
    width: 300,
  },
  margin: {
    height: theme.spacing(5),
  },
}));

const marks = [
  {
    value: 0,
    label: '0 km',
  },
  {
    value: 25,
    label: '25 km',
  },
  {
    value: 50,
    label: '50 km',
  },
  {
    value: 75,
    label: '75 km',
  },
  {
    value: 100,
    label: '100 km',
  },
];

function valuetext(value) {
  return `${value} km`;
}

export default function DiscreteSlider({ onSliderChange }) {
  const classes = useStyles();
  const [radius, setRadius] = useState(5);

  return (
    <div className={classes.root}>
      
      <Slider
        defaultValue={10}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-always"
        step={25}
        marks={marks}
        valueLabelDisplay="on"
        onChange={
          (e, newRadius)=>{
            setRadius(newRadius);
            onSliderChange(newRadius);
          }
        }
      />
      <Typography id="discrete-slider-always" gutterBottom>
        Radius de busqueda
      </Typography>
    </div>
  );
}