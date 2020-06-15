import React from 'react';

export const Privacy = () => {
  return (
    <section style={styles.container}>
      <section style={styles.privacy}>
        <h1>PRIVACY POLICY</h1>
        <h2>Last updated June 14, 2020</h2>
        <article>
          <p>
            Thank you for choosing to be part of our community at Project:Muse,
          doing business as :Muse (“<strong>:Muse</strong>, "<strong>we</strong>”, “<strong>us</strong>”, or “<strong>our</strong>”). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us at info@projectmuse.co.
      </p>
          <p>
            When you visit our website projectmuse.co, mobile application, and use our services, you trust us with your personal information. We take your privacy very seriously. In this privacy policy, we seek to explain to you in the clearest way possible what information we collect, how we use it and what rights you have in relation to it. We hope you take some time to read through it carefully, as it is important. If there are any terms in this privacy policy that you do not agree with, please discontinue use of our Sites or Apps and our services.
        </p>
          <p>
            This privacy policy applies to all information collected through our website (such as projectmuse.co), mobile application, ("<strong>Apps</strong>"), and/or any related services, sales, marketing or events (we refer to them collectively in this privacy policy as the "<strong>Services</strong>").
        </p>
          <p>
            <strong>
              Please read this privacy policy carefully as it will help you make informed decisions about sharing your personal information with us.
          </strong>
          </p>
        </article>
      </section>
    </section>
  )
}

const styles = {
  container: {
    background: 'var(--color)',
    padding: '150px 580px 70px 70px',
  },
  privacy: {
    backgroundColor: 'white',
    padding: '30px 50px',
    borderRadius: '5px',

  }
}