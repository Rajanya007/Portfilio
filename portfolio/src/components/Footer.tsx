import React from 'react';
import { Box, Container, Typography, Stack, IconButton, Divider } from '@mui/material';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <Box sx={{ py: 8, bgcolor: 'background.default' }}>
            <Container maxWidth="lg">
                <Stack spacing={4}>
                    <Stack
                        direction={{ xs: 'column', md: 'row' }}
                        justifyContent="space-between"
                        alignItems={{ xs: 'center', md: 'flex-start' }}
                        spacing={4}
                    >
                        <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                            <Typography variant="h6" sx={{ fontWeight: 800, color: 'primary.main', mb: 2 }}>
                                FREELANCE.DEV
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 300 }}>
                                High-performance full-stack development for brands that want to stand out and scale.
                            </Typography>
                        </Box>

                        <Stack direction="row" spacing={8}>
                            <Box>
                                <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2 }}>Company</Typography>
                                <Stack spacing={1}>
                                    <Typography variant="body2" color="text.secondary">About</Typography>
                                    <Typography variant="body2" color="text.secondary">Services</Typography>
                                    <Typography variant="body2" color="text.secondary">Process</Typography>
                                </Stack>
                            </Box>
                            <Box>
                                <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2 }}>Social</Typography>
                                <Stack direction="row" spacing={1}>
                                    <IconButton size="small" color="primary"><Github size={18} /></IconButton>
                                    <IconButton size="small" color="primary"><Linkedin size={18} /></IconButton>
                                    <IconButton size="small" color="primary"><Twitter size={18} /></IconButton>
                                </Stack>
                            </Box>
                        </Stack>
                    </Stack>

                    <Divider />

                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        justifyContent="space-between"
                        alignItems="center"
                        spacing={2}
                    >
                        <Typography variant="caption" color="text.secondary">
                            © {new Date().getFullYear()} Freelance.Dev. All rights reserved.
                        </Typography>
                        <Stack direction="row" spacing={3}>
                            <Typography variant="caption" color="text.secondary">Privacy Policy</Typography>
                            <Typography variant="caption" color="text.secondary">Terms of Service</Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
};

export default Footer;
