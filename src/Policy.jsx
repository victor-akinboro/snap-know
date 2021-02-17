import React from 'react'
import {Link} from 'react-router-dom'
import './Policy.css'
import userImage from "./images/logo.jpeg";

function Policy() {
    return (
      <div>
        <nav className="back-home">
          <div className="nav-container">
            <img src={userImage } alt="" />
            <Link to="/index" style={{ color: "black", textDecoration: "none"}}>Home</Link>
          </div>
        </nav>

        <section className="terms">
          <div className="condition">
            <h1>APP PRIVACY POLICY</h1>
            <p>
              We respects the privacy of our users. This Privacy Policy explains
              how we collect, use, disclose, and safeguard your information when
              you visit our mobile application SnapKnow™. Please read this
              Privacy Policy carefully.
            </p>
            <p>
              IF YOU DO NOT AGREE WITH THE TERMS OF THIS PRIVACY POLICY, PLEASE
              DO NOT ACCESS THE APPLICATION.
            </p>
            <p>
              We reserve the right to make changes to this Privacy Policy at any
              time and for any reason. We will alert you about any changes by
              updating the “Last updated” date of this Privacy Policy. You are
              encouraged to periodically review this Privacy Policy to stay
              informed of updates. You will be deemed to have been made aware
              of, will be subject to, and will be deemed to have accepted the
              changes in any revised Privacy Policy by your continued use of the
              Application after the date such revised Privacy Policy is posted.
            </p>
            <p>
              This Privacy Policy does not apply to the third-party
              online/mobile store from which you install the Application or make
              payments, including any in-game virtual items, which may also
              collect and use data about you. We are not responsible for any of
              the data collected by any such third party.
            </p>

            <h3>COLLECTION OF YOUR INFORMATION</h3>
            <p>
              We may collect information about you in a variety of ways. The
              information we may collect via the Application depends on the
              content and materials you use, and includes:
            </p>

            <h3>Personal Data</h3>
            <p>
              Demographic and other personally identifiable information (such as
              your name and email address) that you voluntarily give to us when
              choosing to participate in various activities related to the
              Application, such as chat, posting messages in comment sections or
              in our forums, liking posts, sending feedback, and responding to
              surveys. If you choose to share data about yourself via your
              profile, online chat, or other interactive areas of the
              Application, please be advised that all data you disclose in these
              areas is public and your data will be accessible to anyone who
              accesses the Application.
            </p>

            <h3>Derivative Data</h3>
            <p>
              Information our servers automatically collect when you access the
              Application, such as your native actions that are integral to the
              Application, including liking, re- blogging, or replying to a
              post, as well as other interactions with the Application and other
              users via server log files.
            </p>

            <h3>Financial Data</h3>
            <p>
              Financial information, such as data related to your payment method
              (e.g. valid credit card number, card brand, expiration date) that
              we may collect when you purchase, order, return, exchange, or
              request information about our services from the Application. We
              store only very limited, if any, financial information that we
              collect. Otherwise, all financial information is stored by our
              payment processor, [Payment Processor Name], and you are
              encouraged to review their privacy policy and contact them
              directly for responses to your questions.
            </p>

            <h3>Facebook Permissions</h3>
            <p>
              The Application may by default access your Facebook basic account
              information, including your name, email, gender, birthday, current
              city, and profile picture URL, as well as other information that
              you choose to make public. We may also request access to other
              permissions related to your account, such as friends, checkins,
              and likes, and you may choose to grant or deny us access to each
              individual permission. For more information regarding Facebook
              permissions, refer to the Facebook Permissions Reference page.
            </p>

            <h3>Data from Social Networks</h3>
            <p>
              User information from social networking sites, such as [social
              media sites that your mobile app connects to], including your
              name, your social network username, location, gender, birth date,
              email address, profile picture, and public data for contacts, if
              you connect your account to such social networks. This information
              may also include the contact information of anyone you invite to
              use and/or join the Application.
            </p>

            <h3>Geo-Location Information</h3>
            <p>
              We may request access or permission to and track location-based
              information from your mobile device, either continuously or while
              you are using the Application, to provide location-based services.
              If you wish to change our access or permissions, you may do so in
              your device’s settings.
            </p>

            <h3>Mobile Device Access</h3>
            <p>
              We may request access or permission to certain features from your
              mobile device, including your mobile device’s [list all features
              that your app can connect to (eg. bluetooth)]. If you wish to
              change our access or permissions, you may do so in your device’s
              settings.
            </p>

            <h3>Mobile Device Data</h3>
            <p>
              Device information such as your mobile device ID number, model,
              and manufacturer, version of your operating system, phone number,
              country, location, and any other data you choose to provide.
            </p>

            <h3>Push Notifications</h3>
            <p>
              We may request to send you push notifications regarding your
              account or the Application. If you wish to opt-out from receiving
              these types of communications, you may turn them off in your
              device’s settings.
            </p>

            <h3>Third-Party Data</h3>
            <p>
              Information from third parties, such as personal information or
              network friends, if you connect your account to the third party
              and grant the Application permission to access this information.
            </p>

            <h3>Data From Contests, Giveaways, and Surveys</h3>
            <p>
              Personal and other information you may provide when entering
              contests or giveaways and/or responding to surveys.
            </p>
          </div>
        </section>
        <footer>
          <p>
            <Link to="/index">Go Back Home</Link>
          </p>
        </footer>
      </div>
    );
}

export default Policy
