import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';

const Navbar: React.FC = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 80; // height of the sticky navbar
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <AppBar position="sticky" color="default" elevation={0} sx={{ borderBottom: '1px solid', borderColor: 'divider', bgcolor: 'background.paper' }}>
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        onClick={() => scrollToSection('home')}
                        sx={{ flexGrow: 1, fontWeight: 700, color: 'primary.main', letterSpacing: '.1rem', cursor: 'pointer' }}
                    >
                        FREELANCE.DEV
                    </Typography>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Button onClick={() => scrollToSection('home')} sx={{ color: 'text.primary', mx: 1 }}>Home</Button>
                        <Button onClick={() => scrollToSection('services')} sx={{ color: 'text.primary', mx: 1 }}>Services</Button>
                        <Button onClick={() => scrollToSection('about')} sx={{ color: 'text.primary', mx: 1 }}>About</Button>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => scrollToSection('contact')}
                            sx={{ ml: 2, borderRadius: 2 }}
                        >
                            Hire Me
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;
