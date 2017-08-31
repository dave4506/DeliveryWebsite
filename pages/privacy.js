import styled, { ThemeProvider } from 'styled-components'
import Scroll from 'react-scroll'; // Imports all Mixins
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
import {Link} from 'react-scroll'

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
      <Paper id="paper">
        <Header/>
        <Block title="Privacy Policy">
          <Row style={{display:"block"}}>
            <Caption>This privacy policy governs your use of the software application Shipmnt (“Application”) for mobile devices that was created by David Sun. The Application is a shipment tracker that takes tracking numbers and provides updates on the progress of packages/parcels.</Caption>
            <Body>What information does the Application obtain and how is it used?</Body>
            <Body>User Provided Information</Body>
            <Caption>The Application obtains the information you provide when you download and register the Application. Registration with us is optional. However, please keep in mind that you may not be able to use some of the features offered by the Application unless you register with us.</Caption>
            <Caption>When you register with us and use the Application, you generally provide (a) your name, email address, age, user name, password and other registration information; (b) transaction-related information, such as when you make purchases, respond to any offers, or download or use applications from us; (c) information you provide us when you contact us for help; (d) credit card information for purchase and use of the Application, and; (e) information you enter into our system when using the Application, such as contact information and project management information.</Caption>
            <Caption>We may also use the information you provided us to contact your from time to time to provide you with important information, required notices and marketing promotions.</Caption>
            <Body>Automatically Collected Information</Body>
            <Caption>In addition, the Application may collect certain information automatically, including, but not limited to, the type of mobile device you use, your mobile devices unique device ID, the IP address of your mobile device, your mobile operating system, the type of mobile Internet browsers you use, and information about the way you use the Application.</Caption>
            <Body>Does the Application collect precise real time location information of the device?</Body>
            <Caption>This Application does not collect precise information about the location of your mobile device.</Caption>
            <Body>Do third parties see and/or have access to information obtained by the Application?</Body>
            <Caption>Only aggregated, anonymized data is periodically transmitted to external services to help us improve the Application and our service. We will share your information with third parties only in the ways that are described in this privacy statement.</Caption>
            <Caption>We may disclose User Provided and Automatically Collected Information:</Caption>
            <Caption>&#x2022; as required by law, such as to comply with a subpoena, or similar legal process;</Caption>
            <Caption>&#x2022; when we believe in good faith that disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a government request;</Caption>
            <Caption>&#x2022; with our trusted services providers who work on our behalf, do not have an independent use of the information we disclose to them, and have agreed to adhere to the rules set forth in this privacy statement.</Caption>
            <Caption>&#x2022; if David Sun is involved in a merger, acquisition, or sale of all or a portion of its assets, you will be notified via email and/or a prominent notice on our Web site of any change in ownership or uses of this information, as well as any choices you may have regarding this information.</Caption>
            <Body>What are my opt-out rights?</Body>
            <Caption>You can stop all collection of information by the Application easily by uninstalling the Application. You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network. You can also request to opt-out via email, at dvsuner@protonmail.com.</Caption>
            <Body>Data Retention Policy, Managing Your Information</Body>
            <Caption>We will retain User Provided data for as long as you use the Application and for a reasonable time thereafter. We will retain Automatically Collected information for up to 24 months and thereafter may store it in aggregate. If you’d like us to delete User Provided Data that you have provided via the Application, please contact us at dvsuner@protonmail.comand we will respond in a reasonable time. Please note that some or all of the User Provided Data may be required in order for the Application to function properly.</Caption>
            <Body>Children</Body>
            <Caption>We do not use the Application to knowingly solicit data from or market to children under the age of 13. If a parent or guardian becomes aware that his or her child has provided us with information without their consent, he or she should contact us at dvsuner@protonmail.com. We will delete such information from our files within a reasonable time.</Caption>
            <Body>Security</Body>
            <Caption>We are concerned about safeguarding the confidentiality of your information. We provide physical, electronic, and procedural safeguards to protect information we process and maintain. For example, we limit access to this information to authorized employees and contractors who need to know that information in order to operate, develop or improve our Application. Please be aware that, although we endeavor provide reasonable security for information we process and maintain, no security system can prevent all potential security breaches.</Caption>
            <Body>Changes</Body>
            <Caption>This Privacy Policy may be updated from time to time for any reason. We will notify you of any changes to our Privacy Policy by posting the new Privacy Policy https://shipmnt.co/privacy and informing you through the app. You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes.</Caption>
            <Body>Your Consent</Body>
            <Caption>By using the Application, you are consenting to our processing of your information as set forth in this Privacy Policy now and as amended by us. "Processing,” means using cookies on a computer/hand held device or using or touching information in any way, including, but not limited to, collecting, storing, deleting, using, combining and disclosing information, all of which activities will take place in the United States. If you reside outside the United States your information will be transferred, processed and stored there under United States privacy standards.</Caption>
            <Body>Contact us</Body>
            <Caption>If you have any questions regarding privacy while using the Application, or have questions about our practices, please contact us via email at dvsuner@protonmail.com.</Caption>
          </Row>
        </Block>
        <Footer/>
      </Paper>
    </div>
  </ThemeProvider>
)
