import React from 'react';
import { Box, Container, Typography, Grid, Stack } from '@mui/material';

const steps = [
    {
        number: '01',
        title: 'Discovery & Strategy',
        description: 'We start by understanding your goals, user needs, and market gaps to define a clear project roadmap.'
    },
    {
        number: '02',
        title: 'Design & Prototyping',
        description: 'Creating high-fidelity mockups and interactive prototypes to visualize the user experience before coding.'
    },
    {
        number: '03',
        title: 'Development & Testing',
        description: 'Writing clean, efficient code using modern frameworks with continuous testing and quality assurance.'
    },
    {
        number: '04',
        title: 'Deployment & Launch',
        description: 'Taking the product live with a robust setup, ensuring performance, security, and scalability from day one.'
    }
];

const Process: React.FC = () => {
    return (
        <Box sx={{ py: 12, bgcolor: 'background.default' }}>
            <Container maxWidth="lg">
                <Grid container spacing={8}>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Box sx={{ position: 'sticky', top: 100 }}>
                            <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 2 }}>
                                MY PROCESS
                            </Typography>
                            <Typography variant="h3" sx={{ fontWeight: 800, mt: 2, mb: 3 }}>
                                How I bring your <br /> ideas to life.
                            </Typography>
                            <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
                                I follow a structured approach to ensure every project is delivered with high quality,
                                on time, and exceeds expectations.
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 12, md: 8 }}>
                        <Stack spacing={6}>
                            {steps.map((step, index) => (
                                <Stack key={index} direction="row" spacing={4} alignItems="flex-start">
                                    <Typography
                                        variant="h2"
                                        sx={{
                                            fontWeight: 800,
                                            color: 'primary.light',
                                            opacity: 0.3,
                                            lineHeight: 1,
                                            minWidth: 80
                                        }}
                                    >
                                        {step.number}
                                    </Typography>
                                    <Box>
                                        <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5 }}>
                                            {step.title}
                                        </Typography>
                                        <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                                            {step.description}
                                        </Typography>
                                    </Box>
                                </Stack>
                            ))}
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Process;
