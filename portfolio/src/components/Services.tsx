import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Stack } from '@mui/material';
import {
    Code2,
    Layout,
    Database,
    Zap,
    Palette,
    Cloud
} from 'lucide-react';

const services = [
    {
        title: 'Full Stack Development',
        description: 'Building robust and scalable web applications from scratch using modern frameworks and best practices.',
        icon: <Code2 size={32} />,
        color: '#2563eb'
    },
    {
        title: 'Responsive Design',
        description: 'Creating websites that look and work perfectly on all devices, from mobile phones to high-res desktops.',
        icon: <Layout size={32} />,
        color: '#7c3aed'
    },
    {
        title: 'Backend Systems',
        description: 'Designing efficient database architectures and secure APIs to power your business logic.',
        icon: <Database size={32} />,
        color: '#059669'
    },
    {
        title: 'Performance Optimization',
        description: 'Improving your existing site speed, SEO rankings, and overall user experience metrics.',
        icon: <Zap size={32} />,
        color: '#d97706'
    },
    {
        title: 'UI/UX Implementation',
        description: 'Turning complex design files into pixel-perfect, interactive user interfaces with smooth animations.',
        icon: <Palette size={32} />,
        color: '#db2777'
    },
    {
        title: 'Cloud Solutions',
        description: 'Deploying and managing applications on AWS, Azure, or GCP with automated CI/CD pipelines.',
        icon: <Cloud size={32} />,
        color: '#0284c7'
    },
];

const Services: React.FC = () => {
    return (
        <Box id="services" sx={{ py: 12, bgcolor: 'background.default' }}>
            <Container maxWidth="lg">
                <Stack spacing={2} alignItems="center" sx={{ mb: 8, textAlign: 'center' }}>
                    <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 2 }}>
                        WHAT I DO
                    </Typography>
                    <Typography variant="h3" sx={{ fontWeight: 800 }}>
                        Specialized Services For <br />
                        Modern Businesses
                    </Typography>
                    <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 700 }}>
                        I offer a wide range of technical services to help you scale your digital presence
                        and solve complex business problems.
                    </Typography>
                </Stack>

                <Grid container spacing={4}>
                    {services.map((service, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                            <Card
                                sx={{
                                    height: '100%',
                                    p: 2,
                                    borderRadius: 5,
                                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                    '&:hover': {
                                        transform: 'translateY(-12px)',
                                        boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
                                        borderColor: service.color,
                                        '& .icon-box': {
                                            transform: 'scale(1.1) rotate(5deg)',
                                            bgcolor: service.color,
                                            color: 'white',
                                        }
                                    },
                                    border: '1px solid',
                                    borderColor: 'divider',
                                    bgcolor: 'background.paper',
                                    position: 'relative',
                                    overflow: 'visible'
                                }}
                            >
                                <CardContent sx={{ pt: 4 }}>
                                    <Box
                                        className="icon-box"
                                        sx={{
                                            mb: 4,
                                            width: 64,
                                            height: 64,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderRadius: 3,
                                            bgcolor: `${service.color}15`,
                                            color: service.color,
                                            transition: 'all 0.3s ease',
                                        }}
                                    >
                                        {service.icon}
                                    </Box>
                                    <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>
                                        {service.title}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, fontSize: '1.05rem' }}>
                                        {service.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;
