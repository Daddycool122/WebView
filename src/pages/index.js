// pages/index.js
import { Button, Container, Typography,Box, Paper } from '@mui/material';
import { auth, provider } from '../firebaseConfig';
import { signInWithPopup } from 'firebase/auth';
import { useRouter } from 'next/router';
import GoogleIcon from '@mui/icons-material/Google';

export default function Home() {
  const router = useRouter();

  const handleGoogleSignIn = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    
    
    
    // Make sure we're getting the photoURL
    
    
    localStorage.setItem("user", JSON.stringify({
      name: user.displayName,
      email: user.email,
      photo: user.photoURL, // Make sure this matches exactly
    }));

    router.push('/profile');
  } catch (error) {
    console.error(error);
  }
};

  return (
    <Container 
      maxWidth="sm" 
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Paper 
        elevation={3}
        sx={{
          p: 4,
          width: '100%',
          borderRadius: 2,
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3,
          }}
        >
          <Typography 
            variant="h4" 
            sx={{
              fontWeight: 600,
              color: 'primary.main',
              mb: 2,
            }}
          >
            Welcome
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: 'text.secondary',
              mb: 3,
            }}
          >
            Sign in with your Google account to continue
          </Typography>
          <Button
            variant="contained"
            onClick={handleGoogleSignIn}
            size="large"
            startIcon={<GoogleIcon />}
            sx={{
              py: 1.5,
              px: 4,
              borderRadius: 2,
              textTransform: 'none',
              fontSize: '1.1rem',
              boxShadow: 2,
              '&:hover': {
                boxShadow: 4,
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.2s ease-in-out',
            }}
          >
            Sign in with Google
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}