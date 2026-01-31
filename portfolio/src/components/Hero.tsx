import React from 'react';
import { Container, Typography, Button, Box, Stack, Grid } from '@mui/material';
import heroImage from '../assets/hero-image.png';

const Hero: React.FC = () => {
    return (
        <Box
            id="home"
            sx={{
                bgcolor: 'background.paper',
                pt: { xs: 8, md: 12 },
                pb: { xs: 8, md: 12 },
                minHeight: '80vh',
                display: 'flex',
                alignItems: 'center',
                overflow: 'hidden'
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={6} alignItems="center">
                    <Grid size={{ xs: 12, md: 7 }}>
                        <Stack spacing={4}>
                            <Box>
                                <Typography
                                    variant="overline"
                                    sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 2 }}
                                >
                                    AVAILABLE FOR FREELANCE
                                </Typography>
                                <Typography
                                    component="h1"
                                    variant="h2"
                                    color="text.primary"
                                    sx={{
                                        fontWeight: 800,
                                        lineHeight: 1.1,
                                        fontSize: { xs: '2.8rem', md: '4rem' },
                                        mt: 1
                                    }}
                                >
                                    Building Scalable <br />
                                    <Box component="span" sx={{
                                        color: 'primary.main',
                                        position: 'relative',
                                        '&::after': {
                                            content: '""',
                                            position: 'absolute',
                                            bottom: 8,
                                            left: 0,
                                            width: '100%',
                                            height: 8,
                                            bgcolor: 'primary.main',
                                            opacity: 0.1,
                                            zIndex: -1
                                        }
                                    }}>
                                        Digital Experiences
                                    </Box>
                                </Typography>
                            </Box>

                            <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 600, lineHeight: 1.6 }}>
                                I'm a Full-Stack Developer specializing in high-performance web applications.
                                I help startups and businesses turn ideas into reality with modern tech stacks.
                            </Typography>

                            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                                <Button
                                    variant="contained"
                                    size="large"
                                    sx={{
                                        py: 2,
                                        px: 4,
                                        borderRadius: 2,
                                        boxShadow: '0 10px 15px -3px rgba(37, 99, 235, 0.3)',
                                        fontSize: '1.1rem'
                                    }}
                                >
                                    Start a Project
                                </Button>
                                <Button
                                    variant="outlined"
                                    size="large"
                                    sx={{
                                        py: 2,
                                        px: 4,
                                        borderRadius: 2,
                                        borderWidth: 2,
                                        '&:hover': { borderWidth: 2 },
                                        fontSize: '1.1rem'
                                    }}
                                >
                                    View Services
                                </Button>
                            </Stack>

                            <Stack direction="row" spacing={4} sx={{ mt: 2 }}>
                                <Box>
                                    <Typography variant="h4" sx={{ fontWeight: 800 }}>5+</Typography>
                                    <Typography variant="body2" color="text.secondary">Years Experience</Typography>
                                </Box>
                                <Box>
                                    <Typography variant="h4" sx={{ fontWeight: 800 }}>50+</Typography>
                                    <Typography variant="body2" color="text.secondary">Projects Done</Typography>
                                </Box>
                                <Box>
                                    <Typography variant="h4" sx={{ fontWeight: 800 }}>100%</Typography>
                                    <Typography variant="body2" color="text.secondary">Client Satisfaction</Typography>
                                </Box>
                            </Stack>
                        </Stack>
                    </Grid>

                    <Grid size={{ xs: 12, md: 5 }}>
                        <Box
                            sx={{
                                position: 'relative',
                                '&::before': {
                                    content: '""',
                                    position: 'absolute',
                                    top: '-5%',
                                    right: '-5%',
                                    width: '40%',
                                    height: '40%',
                                    bgcolor: 'primary.main',
                                    borderRadius: '50%',
                                    opacity: 0.1,
                                    filter: 'blur(40px)',
                                    zIndex: 0,
                                },
                            }}
                        >
                            <Box
                                component="img"
                                src={heroImage}
                                alt="Freelance Developer Hero"
                                sx={{
                                    width: '100%',
                                    height: 'auto',
                                    borderRadius: 6,
                                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
                                    position: 'relative',
                                    zIndex: 1,
                                    transition: 'all 0.4s ease-in-out',
                                    '&:hover': {
                                        transform: 'translateY(-12px) scale(1.02)',
                                        boxShadow: '0 35px 60px -15px rgba(0, 0, 0, 0.25)',
                                    }
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Hero;
