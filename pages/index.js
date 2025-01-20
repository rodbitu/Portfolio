import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Container,
  Heading,
  Icon,
  Image,
  Link,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import NextLink from 'next/link'
import {
  IoLogoGithub,
  IoLogoGoogle,
  IoLogoLinkedin,
  IoReaderSharp
} from 'react-icons/io5'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import Section from '../components/section'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
        >
          Hello, I&apos;m a back-end developer based in Brazil!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Rodrigo Bitu
            </Heading>

            <p>Back-End Developer ( Developer / Engineer / DevOps )</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 3 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/rodrigo.jpg"
              alt="Profile Image"
            />
          </Box>
        </Box>
        <Section>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Rodrigo is a Software Engineer based in Belém(PA) with a passion
            for building digital services/stuff he wants. He has a knack for
            solving real-life problems with code. When not online, he loves
            hanging out with his friends. He is currently hired as a Software Engineer
            at a technology solutions company called{' '}
            <Link href="https://www.enacom.com.br/">Enacom</Link>.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2002</BioYear>
            Born in Belém(PA), Brazil.
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Entered the world of Computer Engineering and programming 
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Worked at BGC Brasil
          </BioSection>
          <BioSection>
            <BioYear>2021 to present</BioYear>
            Works at Enacom as a Back-End Developer
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I like
          </Heading>
          <Paragraph>
            Technology, CyberSecurity,{' '}
            <Link href="https://github.com/rodbitu" target="_blank">
              Coding
            </Link>
            , Music, Play Games
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/rodbitu" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @rodbitu
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/rodrigo-bitu-de-moraes-366037191"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  @Rodrigo Bitu de Moraes
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://mail.google.com/mail/u/0/#inbox"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGoogle} />}
                >
                  rodrigomoraes.dev@gmail.com
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://drive.google.com/file/d/1-PaeZOg6PAUHSsQhRe5-QahKcW0KtSbn/view?usp=sharing"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoReaderSharp} />}
                >
                  Curriculum
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
