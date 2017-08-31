import styled, { ThemeProvider } from 'styled-components'
import theme from '../components/theme'
import Header from '../components/header'
import Nav from '../components/nav'
import Footer from '../components/footer'
import Paper from '../components/visual/paper'
import Row from '../components/grid/row'
import Column from '../components/grid/contentColumn'
import Img from '../components/visual/img'
import Display from '../components/text/display'
import Body from '../components/text/body'
import Button from '../components/text/button'
import Caption from '../components/text/caption'
import Bullet from '../components/text/bulletPoint'
import Spacer from '../components/visual/spacer'
import Block from '../components/grid'
import Faq from '../components/grid/faq'
import PriceCard from '../components/grid/price'
import Feature from '../components/grid/feature'

const HeroCaption = Caption.extend`
  margin-bottom: 3em;
  opacity: ${props => props.muted ? 0.5:1};
  @media (max-width: 600px) {
    margin-bottom: 0.5em;
  }
`

export default () => (
  <ThemeProvider theme={theme}>
    <div>
      <Paper>
        <Header/>
        <Nav/>
        <Row>
          <Column>
            <Img src="/static/phone.gif"/>
          </Column>
          <Column>
            <Display>SHIPMNT</Display>
            <Body>Reimagined Delivery Tracking App for the modern human.</Body>
            <HeroCaption muted>Download on the iOS App Store for iPhone and iPad.</HeroCaption>
            <Button uppercase>Get it now</Button>
          </Column>
        </Row>
        <Row>
          <Spacer/>
        </Row>
        <Block title="Features">
          <Row>
            <Column>
              <Feature
                title="Designed from the ground up for the busy modern human."
                answer="Shipment is designed with modern sensibilities. From the refreshing design to the unique UX features, the app prioritizes your time and focus. Get the information about your packages in a concise manner. "
                src="/static/people.svg"
              />
              <Feature
                title="Tracking Data Translated"
                answer="Carrier’s give you so much data, some very redundant. Shipmnt helps simplify all this information by grouping up information by day and location. Instead of seeing 4 rows of your package in a sort facility, you see only one row."
                src="/static/tracking_data.svg"
              />
              <Feature
                title="Notification: Your package moved one feet!"
                answer="Some packages are simply not important to you, but some, you hold dear to your heart. For each app, choose how often you want to be notified. Now, you can watch every step of your new iPhone and forget about the random t-shirt you ordered."
                src="/static/notification.svg"
              />
            </Column>
            <Column>
              <Feature
                title="Know it fast."
                answer="On opening the app, you are immediately greeted with a general overview of all your packages. In a quick glance, you are alerted how many packages are in transit, delivered, or awaiting pickup."
                src="/static/lightning.svg"
              />
              <Feature
                title="Let’s not get carried away."
                answer="With these awesome features, Shipmnt is still at the core a delivery tracking app. The app supports easy tracking number adding, map views, and package archiving."
                src="/static/carrier.svg"
              />
              <Feature
                title="Get it shipped around the world"
                answer="Carriers we support: Mondial Relay, Newgistics, Ontrac, Purolator, UPS, USPS, Deutsche Post, Lasership, Hermes UK, GlS France, GLS Germany, Fedex, DHL (Ecommerce, Germany, Express), Canada Post, Asendia US, Australia Post (And more to come!)"
                src="/static/carrier.svg"
              />
            </Column>
          </Row>
        </Block>
        <Row>
          <Spacer/>
        </Row>
        <Block title="Pricing">
          <Row>
            <Column>
              <PriceCard
                title="Free Tier"
                subtitle="Opens basic features to the simple shopper."
                submitTitle="Get it now"
                backgroundColor="#FFFBFA"
                >
                <Bullet>No Notification Options</Bullet>
                <Bullet>Limit to 3 Packages</Bullet>
                <Bullet>No Package Archiving</Bullet>
                <Bullet>All Carriers Support</Bullet>
                <Bullet>Limitless Use</Bullet>
                <Bullet crossout>Limitless packages</Bullet>
                <Bullet crossout>All Notification Tiers</Bullet>
                <Bullet crossout>Archive Packages</Bullet>
                <Bullet crossout>Latest Features</Bullet>
              </PriceCard>
            </Column>
            <Column>
              <PriceCard
                title="Pro Pack"
                subtitle="Unlock all the features the app has available!"
                submitTitle="$2.99 Upgrade"
                backgroundColor="#FFFBFA"
                >
                  <Bullet>Limitless packages</Bullet>
                  <Bullet>All Notification Tiers</Bullet>
                  <Bullet>Archive Packages</Bullet>
                  <Bullet>Latest Features</Bullet>
                  <Bullet>All Carriers Support</Bullet>
                  <Bullet>Limitless Use</Bullet>
                  <Bullet crossout>No Notification Options</Bullet>
                  <Bullet crossout>Limit to 3 Packages</Bullet>
                  <Bullet crossout>No Package Archiving</Bullet>
              </PriceCard>
            </Column>
          </Row>
        </Block>
        <Row>
          <Spacer/>
        </Row>
        <Block title="FAQ">
          <Row>
            <Column>
              <Faq
                question="What new features can I look out for?"
                answer="Currently a few ideas are in the works such as additional carriers, different notification options and new dashboards."
              />
              <Faq
                question="Why use this instead of other package trackers?"
                answer="Shipmnt was built for the modern phone user. Many other package trackers are outdated in UI and features. I took what I liked from old package trackers and brought them out with a modern design and added features I thought meaningful in a truly powerful package tracker."
              />
              <Faq
                question="How can I help with the app’s development?"
                answer="Shipmnt has a bright future ahead and we want you to be part of it. Please shoot me any feedback through your reviews. If you want to be the beta, email me at dvsuner@protonmail.com."
              />
            </Column>
            <Column>
              <Faq
                question="What happens if the app doesn’t support my carrier? "
                answer="We currently support 18 carriers. While that is a lot, there is many carriers in the world we don't support. We are working hard to support the carriers you use."
              />
              <Faq
                question="What region is the app supported in?"
                answer="As of now Shipmnt is only released in US, Canada. Later on, Shipmnt will be released in other regions."
              />
              <Faq
                question="Will there be android support?"
                answer="As of now, there is no plans to support android. Sorry!"
              />
              <Faq
                question="Will this work on iPad?"
                answer="Yup! The app works on all modern iOS platforms."
              />
            </Column>
          </Row>
        </Block>
        <Footer/>
      </Paper>
    </div>
  </ThemeProvider>
)
