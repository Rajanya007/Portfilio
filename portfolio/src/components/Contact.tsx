import React from 'react';
import { Box, Container, Typography, Button, Stack, Paper } from '@mui/material';
import { Mail as EmailIcon, MessageSquare as ChatIcon } from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <Box id="contact" sx={{ py: 12, bgcolor: 'background.paper' }}>
            <Container maxWidth="md">
                <Paper
                    elevation={0}
                    sx={{
                        p: { xs: 6, md: 10 },
                        borderRadius: 8,
                        textAlign: 'center',
                        bgcolor: 'primary.main',
                        color: 'white',
                        boxShadow: '0 20px 40px rgba(37, 99, 235, 0.2)'
                    }}
                >
                    <Stack spacing={4} alignItems="center">
                        <Box>
                            <Typography variant="h3" sx={{ fontWeight: 800, color: 'white' }}>
                                Have a project idea?
                            </Typography>
                            <Typography variant="h5" sx={{ mt: 2, opacity: 0.9 }}>
                                Let's build something amazing together.
                            </Typography>
                        </Box>

                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} sx={{ mt: 2 }}>
                            <Button
                                variant="contained"
                                color="secondary"
                                size="large"
                                startIcon={<EmailIcon size={20} />}
                                sx={{
                                    bgcolor: 'white',
                                    color: 'primary.main',
                                    py: 2,
                                    px: 4,
                                    fontWeight: 800,
                                    '&:hover': { bgcolor: '#f8fafc' },
                                    borderRadius: 3
                                }}
                            >
                                Send an Email
                            </Button>
                            <Button
                                variant="outlined"
                                size="large"
                                startIcon={<ChatIcon size={20} />}
                                sx={{
                                    color: 'white',
                                    borderColor: 'white',
                                    py: 2,
                                    px: 4,
                                    borderWidth: 2,
                                    fontWeight: 800,
                                    '&:hover': { borderColor: 'white', borderWidth: 2, bgcolor: 'rgba(255,255,255,0.1)' },
                                    borderRadius: 3
                                }}
                            >
                                Schedule a Call
                            </Button>
                        </Stack>

                        <Typography variant="body2" sx={{ opacity: 0.7 }}>
                            Response time: usually within 24 hours.
                        </Typography>
                    </Stack>
                </Paper>
            </Container>
        </Box>
    );
};

export default Contact;
