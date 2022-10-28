import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function ShowItemsCB() {
  return (
    <FormGroup row>
      <FormControlLabel control={<Checkbox defaultChecked />} label="All" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Promo" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Sale" />
      <FormControlLabel
        control={<Checkbox defaultChecked />}
        label="Featured"
      />
    </FormGroup>
  );
}
