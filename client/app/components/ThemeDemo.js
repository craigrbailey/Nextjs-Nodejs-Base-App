'use client';

import { 
  Box, 
  Typography, 
  Button, 
  Paper, 
  Container,
  Grid,
  Card,
  CardContent,
  useTheme,
  useMediaQuery
} from '@mui/material';

/**
 * Demo component that showcases the Material UI theme features
 * including responsive breakpoints
 */
function ThemeDemo() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h1" gutterBottom align="center">
        Material UI Theme
      </Typography>
      
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h2" gutterBottom>
          Typography
        </Typography>
        <Typography variant="h1">Heading 1</Typography>
        <Typography variant="h2">Heading 2</Typography>
        <Typography variant="h3">Heading 3</Typography>
        <Typography variant="h4">Heading 4</Typography>
        <Typography variant="h5">Heading 5</Typography>
        <Typography variant="h6">Heading 6</Typography>
        <Typography variant="body1">Body 1: Regular paragraph text</Typography>
        <Typography variant="body2">Body 2: Smaller paragraph text</Typography>
      </Paper>
      
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h2" gutterBottom>
          Buttons
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
          <Button variant="contained" color="primary">Primary</Button>
          <Button variant="contained" color="secondary">Secondary</Button>
          <Button variant="contained" color="error">Error</Button>
          <Button variant="contained" color="warning">Warning</Button>
          <Button variant="contained" color="info">Info</Button>
          <Button variant="contained" color="success">Success</Button>
          <Button variant="outlined" color="primary">Outlined</Button>
          <Button variant="text" color="primary">Text</Button>
        </Box>
      </Paper>
      
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h2" gutterBottom>
          Responsive Grid
        </Typography>
        <Typography variant="body1" gutterBottom>
          Current screen size: {isMobile ? 'Mobile' : 'Desktop or Tablet'}
        </Typography>
        <Grid container spacing={2}>
          {[1, 2, 3, 4].map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item}>
              <Card>
                <CardContent>
                  <Typography variant="h5" gutterBottom>Card {item}</Typography>
                  <Typography variant="body2">
                    This card adjusts its width based on screen size.
                    xs=12 (full width on mobile), sm=6 (half width on tablets),
                    md=3 (quarter width on desktop)
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>
      
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h2" gutterBottom>
          Theme Breakpoints
        </Typography>
        <Typography variant="body1">
          xs: 0px - Mobile phones
        </Typography>
        <Typography variant="body1">
          sm: 600px - Tablets
        </Typography>
        <Typography variant="body1">
          md: 960px - Small laptops
        </Typography>
        <Typography variant="body1">
          lg: 1280px - Desktops
        </Typography>
        <Typography variant="body1">
          xl: 1920px - Large screens
        </Typography>
      </Paper>
    </Container>
  );
}

export default ThemeDemo; 