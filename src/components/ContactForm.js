import React from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

function ContactForm() {
  return (
    <section id="contact">
      <Container maxWidth="sm">
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>
        <Box component="form" sx={{ mt: 3 }}>
          <TextField label="Name" fullWidth margin="normal" required />
          <TextField label="Email" fullWidth margin="normal" required />
          <TextField label="Message" fullWidth multiline rows={4} margin="normal" required />
          <Button type="submit" variant="contained" sx={{ mt: 2 }} fullWidth>
            Submit
          </Button>
        </Box>
      </Container>
    </section>
  );
}

export default ContactForm;
