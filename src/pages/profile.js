import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Container, Typography, Avatar, Button, Box, Paper } from '@mui/material';
import { auth } from '../firebaseConfig';
import Image from 'next/image';


export default function Profile() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      router.push('/');
    } else {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    auth.signOut();
    localStorage.removeItem('user');
    router.push('/');
  };

  if (!user) return null;

  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Paper
        elevation={3}
        sx={{
          p: 4,
          borderRadius: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          background: 'rgba(255, 255, 255, 0.9)',
        }}
      >
        <Image
          src={user.photo || '/default-avatar.png'} // Fallback to a default avatar if photo is not available
          alt="User Avatar"
          width={100}
          height={100}
          style={{ borderRadius: '50%', marginBottom: '16px' }}/>
        <Typography variant="h4" sx={{ mb: 1, fontWeight: 600 }}>
          {user.name}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          {user.email}
        </Typography>
        <Button 
          variant="contained" 
          color="error"
          onClick={handleLogout}
          sx={{
            px: 4,
            py: 1.5,
            borderRadius: 2,
            textTransform: 'none',
            fontSize: '1rem',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: 3,
            },
            transition: 'all 0.2s ease-in-out',
          }}
        >
          Logout
        </Button>
      </Paper>
    </Container>
  );
}