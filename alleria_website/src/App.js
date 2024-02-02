import './App.css';
import Logo from './A.png'
import { Tabs, Heading, Flex, useTheme, Card, Image, Grid, Divider, defaultTheme, Button, Message } from '@aws-amplify/ui-react';
/* 
import '@aws-amplify/ui-react/styles/reset.layer.css' // global CSS reset
import '@aws-amplify/ui-react/styles/base.layer.css' // base styling needed for Amplify UI
import '@aws-amplify/ui-react/styles/button.layer.css' // component specific styles */
import '@aws-amplify/ui-react/styles.css';
import information_page from './components/information';
import about_page from './components/about';
import download_page from './components/download';

function App() {
  const { tokens } = useTheme();
  return (
    <Flex direction={'column'} height="100vh" backgroundColor={tokens.colors.background.primary} paddingTop={'3vh'} alignContent={'center'}>
      <Message
        alignSelf={'flex-start'}
        marginLeft={25}
        variation="filled"
        colorTheme="info"
        heading="Message from Developer">
        This App is still in development, release date TBD
      </Message>
      <Image boxShadow={tokens.components.card.boxShadow} borderRadius={10} width="8vw" alt="Alleria Logo" src={Logo} />
      <Grid
        columnGap={30}
        rowGap={20}
        templateColumns="3fr 5fr"
        templateRows="2fr 2fr 2fr"
        width="75vw"
        paddingTop={25}
      >
        <Card textAlign={'center'} columnStart={1} columnEnd={1} rowStart={1} rowEnd={4}>
          {information_page()}
        </Card>

        <Card textAlign={'center'} columnStart={2} columnEnd={2} rowStart={1} rowEnd={3}>
          Screenshot / Cute Picture
        </Card>


        <Card textAlign={'center'} columnStart={2} columnEnd={2} rowStart={3} rowEnd={3}>
          No Wifi Symbol / Smile
        </Card>

      </Grid>
      <Divider paddingTop={10} paddingBottom={10} borderColor={tokens.colors.background.tertiary} size='large' width="85vw" />
      <Heading level={3}>Get Started!</Heading>
      <Button variation='primary'>Download</Button>
    </Flex>
  );
}

/* function App() {
  const { tokens } = useTheme();
  return (
    <Flex direction={'column'} height="100vh" backgroundColor={tokens.colors.background.primary} paddingTop={'3vh'}>
      <Tabs.Container defaultValue="Information">
        <Tabs.List 
          borderColor={'transparent'} 
          justifyContent={'center'}
          fontFamily={tokens.fonts.default}
          >
          <Tabs.Item width={"30vh"} value="Information">Info</Tabs.Item>
          <Tabs.Item width={"30vh"} value="About">About</Tabs.Item>
          <Tabs.Item width={"30vh"} value="Download">Download</Tabs.Item>
        </Tabs.List>
        <Tabs.Panel value="Information">
          {information_page()}
        </Tabs.Panel>
        <Tabs.Panel value="About">
          {about_page()}
          {about_page()}
        </Tabs.Panel>
        <Tabs.Panel value="Download">
          {download_page()}
        </Tabs.Panel>
      </Tabs.Container>
    </Flex>
  );
} */


export default App;
