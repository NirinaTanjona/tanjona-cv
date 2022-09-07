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
      src: 'logos/next.svg',
      srcSet: 'logos/next.svg',
      name: 'Next js',
      description: 'React framework for production.',
    },
    {
      src: 'logos/mui.png',
      srcSet: 'logos/mui.png',
      name: 'material UI',
      description: 'fast, cool and intuitive React UI tools.',
    },
    {
      src: 'logos/chakra.jpg',
      srcSet: 'logos/chakra.jpg',
      name: 'chakra UI',
      description: 'simple, and accessible component for React UI.',
    },
    {
      src: 'logos/tailwind.png',
      srcSet: 'logos/tailwind.png',
      name: 'Tailwindcss',
      description: 'Css framework packed with HTML classes.',
    },
  ];

  const backendSkills = [
    {
      src: 'logos/nodejs.png',
      srcSet: 'logos/nodejs.png',
      name: 'Node Js',
      description: 'Node is a Javascript back-end runtime environment',
    },
    {
      src: 'logos/rails.png',
      srcSet: 'logos/rails.png',
      name: 'Ruby on Rails',
      description: 'Rails is a fullstack framework, built with ruby.',
    },
    {
      src: 'logos/spring.png',
      srcSet: 'logos/spring.png',
      name: 'Spring boot',
      description: 'Enterprise-level framework for creating standalone app that run on Java Virtual Machine',
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