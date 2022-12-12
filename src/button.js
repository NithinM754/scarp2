import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function ContainedButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained">Contained</Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" href="https://mui.com/material-ui/react-button/#text-buttons">
        Link
      </Button>
      <Button variant="contained" disableElevation>
  Disable elevation
</Button>
<Button variant="outlined">Primary</Button>
<Button variant="outlined" disabled>
  Disabled
</Button>
<Button variant="outlined" href="#outlined-buttons">
  Link
</Button>
<Button
  onClick={() => {
    alert('clicked');
  }}
>
  Click me
</Button>
<Button variant="text">Text</Button>
<Button variant="contained">Contained</Button>
<Button variant="outlined">Outlined</Button>

    </Stack>
  );
}