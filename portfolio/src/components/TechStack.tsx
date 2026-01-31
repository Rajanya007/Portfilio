import React from 'react';
import { Box, Container, Typography, Chip, Stack } from '@mui/material';

const techStack = [
    { category: 'Frontend', skills: ['React', 'TypeScript', 'Next.js', 'Material UI', 'Tailwind CSS', 'Redux', 'Framer Motion'] },
    { category: 'Backend', skills: ['Node.js', 'Express', 'Python', 'Django', 'PostgreSQL', 'MongoDB', 'Redis'] },
    { category: 'DevOps & Tools', skills: ['Docker', 'AWS', 'Vercel', 'Git', 'CI/CD', 'Firebase', 'GraphQL'] },
];

const TechStack: React.FC = () => {
    return (
        <Box id="about" sx={{ py: 10, bgcolor: 'background.paper' }}>
            <Container maxWidth="lg">
                <Stack spacing={6} alignItems="center">
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 2 }}>
                            THE TECH STACK
                        </Typography>
                        <Typography variant="h4" sx={{ fontWeight: 800, mt: 1 }}>
                            Always using the best tools <br />
                            for the job.
                        </Typography>
                    </Box>

                    <Stack spacing={4} sx={{ width: '100%', maxWidth: 900 }}>
                        {techStack.map((item, index) => (
                            <Box key={index}>
                                <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, color: 'text.secondary', textTransform: 'uppercase' }}>
                                    {item.category}
                                </Typography>
                                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ gap: 1.5 }}>
                                    {item.skills.map((skill, sIndex) => (
                                        <Chip
                                            key={sIndex}
                                            label={skill}
                                            variant="outlined"
                                            sx={{
                                                px: 1,
                                                py: 2.5,
                                                borderRadius: 2,
                                                fontWeight: 600,
                                                fontSize: '0.95rem',
                                                '&:hover': {
                                                    bgcolor: 'primary.main',
                                                    color: 'white',
                                                    borderColor: 'primary.main'
                                                }
                                            }}
                                        />
                                    ))}
                                </Stack>
                            </Box>
                        ))}
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
};

export default TechStack;
