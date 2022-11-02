import * as React from 'react';
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import NativeSelect from '@mui/material/NativeSelect';
import InputBase from '@mui/material/InputBase';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    // marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}));

export default function MenuSort({ handleSortChange }) {
  const [sort, setSort] = React.useState('1');

  React.useEffect(() => {
    switch (sort) {
      case '1': {
        handleSortChange({
          method: 'name',
          asc: true,
        });

        break;
      }

      case '2': {
        handleSortChange({
          method: 'name',
          asc: false,
        });

        break;
      }

      case '3': {
        handleSortChange({
          method: 'highestprice',
          asc: true,
        });
        break;
      }

      case '4': {
        handleSortChange({
          method: 'highestprice',
          asc: false,
        });
        break;
      }

      case '5': {
        handleSortChange({
          method: 'createdAt',
          asc: true,
        });

        break;
      }

      case '6': {
        handleSortChange({
          method: 'createdAt',
          asc: false,
        });

        break;
      }

      default: {
        break;
      }
    }
  }, [sort]);

  const handleChange = (event) => {
    setSort(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{}} variant="standard">
        <InputLabel htmlFor="sort">Sort by</InputLabel>
        <NativeSelect
          id="sort"
          value={sort}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <option value={1}>A-Z</option>
          <option value={2}>Z-A</option>
          <option value={3}>Highest price</option>
          <option value={4}>Lowest price</option>
          <option value={5}>Latest</option>
          <option value={6}>Oldest</option>
        </NativeSelect>
      </FormControl>
    </div>
  );
}
