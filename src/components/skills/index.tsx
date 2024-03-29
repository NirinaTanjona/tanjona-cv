import { Typography, Box, Container } from '@mui/material'
import { SkillsContainer } from './SkillsContainer'

  const designSkills = [
    {
      src: 'logos/figma.svg',
      srcSet: 'logos/figma.svg',
      name: 'Figma',
      description: 'UI and UX design before development.',
    },
    {
      src: 'logos/adobeIllustrator.svg',
      srcSet: 'logos/adobeIllustrator.svg',
      name: 'Adobe Illustrator',
      description: 'Creating or editing some logos or illustrations.',
    },
    {
      src: 'logos/adobePhotoshop.svg',
      srcSet: 'logos/adobePhotoshop.svg',
      name: 'Adobe Photoshop',
      description: 'Editing images to fit design requirement.',
    },
  ];


  const frontendSkills = [
    {
      src: 'logos/react.png',
      srcSet: 'logos/react.svg',
      name: 'React Js',
      description: 'Declarative, Component-Based library for web development.',
    },
    {
      src: 'logos/mui.png',
      srcSet: 'logos/mui.png',
      name: 'material UI',
      description: 'fast, cool and intuitive React UI tools.',
    },
  ];

  const backendSkills = [
    {
      src: 'logos/django.png',
      srcSet: 'logos/django.png',
      name: 'Django',
      description: 'high-level Python web framework that encourages rapid development and clean.',
    },
    {
      src: 'logos/drf.png',
      srcSet: 'logos/drf.png',
      name: 'Django Rest Framework',
      description: 'Django REST framework is a powerful and flexible toolkit for building Web APIs.',
    },
    {
      src: 'logos/flask.png',
      srcSet: 'logos/flask.png',
      name: 'Flask',
      description: 'Flask is a lightweight WSGI web application framework.',
    },
    {
      src: 'logos/fastapi.png',
      srcSet: 'logos/fastapi.png',
      name: 'Fastapi',
      description: 'FastAPI is a modern, fast (high-performance), web framework for building APIs.',
    },
  ];

  const Skills = () => {
    return (
      <Box>
        <Box sx={{ mb: 1, display: 'flex', justifyContent: 'center' }}>
          <Typography variant="h1" color="text.primary">Skills</Typography>
        </Box>
        <SkillsContainer skillsList={ designSkills } title="Design" />
        <SkillsContainer skillsList={ frontendSkills } title="Frontend" />
        <SkillsContainer skillsList={ backendSkills } title="Backend" />
      </Box>
  )
}

const SkillsLayout = () => {
  return (
    <Box
      sx={{
        background: (theme) =>
          theme.palette.mode === 'dark'
            ? `linear-gradient(180deg, ${theme.palette.primaryDark[900]} 0%, #001E3C 100%)`
            : `linear-gradient(180deg, ${theme.palette.grey[50]} 0%, #FFFFFF 100%)`,
      }}
    >
      <Container id="skill" sx={{ py: { xs: 4, sm: 6, md: 8 }, alignItems: 'center'}}>
        <Skills/>
      </Container>
    </Box>
  )
}

export default SkillsLayout