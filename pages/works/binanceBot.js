import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Chatty">
      <Container>
        <Title>
          BinanceBot <Badge>2022</Badge>
        </Title>
        <P>
          Binance Bot is a bot created linked to the Binance exchange, it serves
          to automate tasks that can be done by the exchange board (Ex: view the
          coin wallet, perform transactions, etc).
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/rodbitu/BinanceBot">
              https://github.com/rodbitu/BinanceBot
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Nodejs, Axios, Crypto, Binance API</span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/binance_bot_01.png" alt="BinanceBot" />
      </Container>
    </Layout>
  )
}

export default Work
