import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function ShowItemsCB({
  handleFeaturedChange,
  handlePromoChange,
  handleSaleChange,
}) {
  const [featured, setFeatured] = React.useState(true);
  const [promo, setPromo] = React.useState(true);
  const [sale, setSale] = React.useState(true);

  const changeState = (value, setValue) => (handleValue) => (e) => {
    setValue(!value);
    handleValue(!value);
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Checkbox
            checked={promo}
            onChange={changeState(promo, setPromo)(handlePromoChange)}
          />
        }
        label="Promo"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={sale}
            onChange={changeState(sale, setSale)(handleSaleChange)}
          />
        }
        label="Sale"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={featured}
            onChange={changeState(featured, setFeatured)(handleFeaturedChange)}
          />
        }
        label="Featured"
      />
    </FormGroup>
  );
}
