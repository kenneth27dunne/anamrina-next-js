import React from 'react'

export const metadata = {
  title: "Cookies Policy - Anamrina Recruitment",
  description: "Cookies Policy for Anamrina Recruitment. Learn about how we use cookies and similar technologies on our website.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://anamrinarecruitment.com/cookies-policy",
  },
};

export default function CookiesPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero div */}
      <div className="bg-[#08163B] text-white py-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Cookies Policy</h1>
            <p className="text-xl text-gray-300">
              This policy explains how we use cookies and similar technologies on our website.
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </div>

      {/* Content div */}
      <div className="py-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#08163B] mb-4">What Are Cookies?</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Cookies are small text files that are placed on your computer or mobile device when you visit 
                    a website. They are widely used to make websites work more efficiently and to provide information 
                    to website owners.
                  </p>
                  <p>
                    Cookies allow a website to recognize a user's device and remember information about their visit, 
                    such as their preferred language and other settings. This can make your next visit easier and 
                    the site more useful to you.
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#08163B] mb-4">How We Use Cookies</h2>
                <div className="space-y-4 text-gray-700">
                  <p>We use cookies for the following purposes:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>To ensure our website functions properly</li>
                    <li>To maintain form state during submission</li>
                    <li>To provide basic website functionality</li>
                    <li>To improve our website's performance and user experience</li>
                    <li>To store temporary data for contact form processing</li>
                  </ul>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#08163B] mb-4">Types of Cookies We Use</h2>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h3 className="text-lg font-semibold text-[#08163B] mb-3">Essential Cookies</h3>
                    <p className="text-gray-700 mb-2">
                      These cookies are necessary for the website to function and cannot be switched off in our systems.
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
                      <li>Session management and security</li>
                      <li>User authentication</li>
                      <li>Load balancing</li>
                      <li>Remembering your cookie preferences</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-green-500 pl-6">
                    <h3 className="text-lg font-semibold text-[#08163B] mb-3">Performance Cookies</h3>
                    <p className="text-gray-700 mb-2">
                      These cookies help us monitor and improve our website's performance.
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
                      <li>Next.js built-in performance monitoring</li>
                      <li>Website loading and response time tracking</li>
                      <li>Basic error tracking and reporting</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-yellow-500 pl-6">
                    <h3 className="text-lg font-semibold text-[#08163B] mb-3">Functional Cookies</h3>
                    <p className="text-gray-700 mb-2">
                      These cookies enable enhanced website functionality.
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
                      <li>Storing form data temporarily during submission</li>
                      <li>Maintaining contact form state</li>
                      <li>Remembering user preferences for form fields</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-lg font-semibold text-[#08163B] mb-3">Social Media Cookies</h3>
                    <p className="text-gray-700 mb-2">
                      These cookies are used for social media integration and sharing features.
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
                      <li>Social media sharing buttons (Facebook, Instagram, LinkedIn, Twitter)</li>
                      <li>Social media platform integration</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#08163B] mb-4">Third-Party Services</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Our website integrates with the following third-party services that may set their own cookies:
                  </p>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-[#08163B] mb-3">Third-Party Services We Use:</h3>
                    <ul className="list-disc list-inside space-y-2">
                      <li><strong>Strapi CMS:</strong> Content management system for website content</li>
                      <li><strong>Cloudinary:</strong> Image hosting and optimization service</li>
                      <li><strong>Nodemailer:</strong> Email service for contact form submissions</li>
                      <li><strong>Social Media Platforms:</strong> Facebook, Instagram, LinkedIn, and Twitter for social sharing</li>
                      <li><strong>Google Maps:</strong> For location and address information</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#08163B] mb-4">Managing Your Cookie Preferences</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    You have several options for managing cookies:
                  </p>
                  
                  <h3 className="text-lg font-semibold text-[#08163B] mt-6 mb-3">Browser Settings</h3>
                  <p>
                    Most web browsers allow you to control cookies through their settings preferences. 
                    You can set your browser to refuse cookies or delete certain cookies. However, 
                    if you choose to delete or refuse cookies, some features of our website may not work properly.
                  </p>
                  
                  <h3 className="text-lg font-semibold text-[#08163B] mt-6 mb-3">Cookie Consent</h3>
                  <p>
                    When you first visit our website, you will see a cookie consent banner. You can 
                    choose which types of cookies you want to accept. You can change your preferences 
                    at any time by clicking the cookie settings link in our website footer.
                  </p>
                  
                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-[#08163B] mb-2">Important Note</h4>
                    <p>
                      Essential cookies cannot be disabled as they are necessary for the website to function. 
                      Disabling other types of cookies may affect your experience on our website.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#08163B] mb-4">Cookie Duration</h2>
                <div className="space-y-4 text-gray-700">
                  <p>Cookies can be either:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Session Cookies:</strong> Temporary cookies that are deleted when you close your browser</li>
                    <li><strong>Persistent Cookies:</strong> Cookies that remain on your device for a set period or until you delete them</li>
                  </ul>
                  <p>
                    The duration of persistent cookies varies depending on their purpose. Most cookies we use 
                    expire within 12 months, but some may have longer durations for specific functionality.
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#08163B] mb-4">Updates to This Policy</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    We may update this Cookies Policy from time to time to reflect changes in our practices 
                    or for other operational, legal, or regulatory reasons. We will notify you of any material 
                    changes by posting the updated policy on this page and updating the "Last updated" date.
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#08163B] mb-4">Contact Us</h2>
                <div className="space-y-4 text-gray-700">
                  <p>If you have any questions about our use of cookies, please contact us:</p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p><strong>Email:</strong> <a href="mailto:info@anamrinarecruitment.com" className="text-blue-600 hover:text-blue-800">info@anamrinarecruitment.com</a></p>
                    <p><strong>Phone:</strong> +353 858 239 516 (Ireland) | +91 896 819 0404 (India)</p>
                    <p><strong>Address:</strong></p>
                    <div className="ml-4">
                      <p>Ireland Office:<br />
                      95 Millennium Business Park,<br />
                      Cappagh Road, Ballycoolin,<br />
                      Dublin 11, D11 YK25, Ireland</p>
                      <p className="mt-2">India Office:<br />
                      613-617, 6th Floor,<br />
                      Motiaz Royal Business Park,<br />
                      Zirakpur - 140603, Punjab, India</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
