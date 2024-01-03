import React from 'react'

function Page() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto p-8 rounded-md shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-purple-800">Buddhimotta Terms and Conditions</h1>

        <p className="mb-4">
          {
            `Welcome to Buddhimotta! These Terms and Conditions govern your use of our mobile application
            ("App"). By accessing and using the App, you agree to be bound by these Terms. Please read them
            carefully before using the App.`
          }
        </p>

        <h2 className="text-xl font-bold mb-4">1. About Buddhimotta and Our Mission</h2>
        <p className="mb-4">
          Buddhimotta is an innovative mobile app aimed at revolutionizing self-discovery and personalized
          learning, particularly within Bengali communities.
        </p>
        <p className="mb-4">
          We are driven by two core goals:
          <ul className="list-disc ml-8">
            <li>
              {
                `        Democratizing Understanding of Cognitive Profiles: We believe everyone deserves access to tools
        that unlock their unique cognitive strengths and talents. Buddhimotta empowers individuals to
        understand their own cognitive profiles, fostering self-awareness and informed learning choices.`
              }
            </li>
            <li>
              {
                `Elevating Personalized Learning and Education: By illuminating individual cognitive preferences,
                Buddhimotta informs the development of effective and engaging learning strategies. Our research
                aims to contribute to a future where education is tailor-made to each student's unique potential.`
              }
            </li>
          </ul>
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">2. Data Privacy and Security</h2>
          <p className="mb-4">
            We are committed to protecting your privacy and the security of your personal information. We will not:
          </p>
          <ul className="list-disc ml-8">
            <li>
              <strong>Collect or store personal information:</strong> We only collect minimal info for your Buddhimotta journey, including your name for a personal touch, email for updates (never shared!), a password for security, and age/gender to tailor the experience (no ads or third parties!). Profession will help us gather data on user demographics for potential research purposes. It will not be used to identify you or linked to your personal information.
            </li>
            <li>
              <strong>Track your use of the App:</strong> We do not collect data on your location, browsing history, or other online activity.
            </li>
            <li>
              <strong>Share your information with anyone:</strong> We will not sell, rent, or otherwise disclose your information to any third parties.
            </li>
          </ul>
        </section>

        {/* Section 4: Research and Data Usage */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">3. Research and Data Usage</h2>
          <p className="mb-4">
            We may use anonymized data from the App for research purposes. This data will not contain any personal information that could identify you. For example, we may use data to study the effectiveness of different learning methods or to identify trends in cognitive abilities.
          </p>
        </section>

        {/* Section 6: Disclaimer */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">4. Disclaimer</h2>
          <p className="mb-4">
            {
              `            The App is provided "as is" and without warranties of any kind, express or implied. We do not guarantee that the App will be error-free or uninterrupted. We are not responsible for any damages arising from your use of the App.
  `
            }          </p>
        </section>

        {/* Section 7: Termination */}
        <section>
          <h2 className="text-xl font-bold mb-4">5. Termination</h2>
          <p>
            We may terminate your access to the App at any time, for any reason, without notice.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-4">6. Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us through E-mail.</p>
        </section>

        <p>
          Email: <a href="mailto:trimatrix01@gmail.com" className='text-blue-700'>trimatrix01@gmail.com</a>
        </p>
        <p className="mt-8">Thank you!</p>
        <p>{`Team TriMatrix`}</p>
      </div>
    </div>
  )
}

export default Page