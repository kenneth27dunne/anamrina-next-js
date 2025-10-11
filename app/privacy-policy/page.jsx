import React from 'react'

export const metadata = {
  title: "Privacy Policy - Anamrina Recruitment",
  description: "Privacy Policy for Anamrina Recruitment. Learn how we collect, use, and protect your personal information.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://anamrinarecruitment.com/privacy-policy",
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero div */}
      <div className="bg-[#08163B] text-white py-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-gray-300">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
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
                <h2 className="text-2xl font-bold text-[#08163B] mb-4">1. Information We Collect</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    We collect information you provide directly to us through our contact forms and 
                    when you communicate with us about our recruitment services.
                  </p>
                  <h3 className="text-lg font-semibold text-[#08163B] mt-6 mb-3">Information You Provide</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Name and email address (from contact forms)</li>
                    <li>Professional information (role type, years of experience, skills)</li>
                    <li>Company name (optional)</li>
                    <li>Messages and inquiries you send to us</li>
                    <li>Communication preferences</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold text-[#08163B] mt-6 mb-3">Automatically Collected Information</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>IP address and browser information</li>
                    <li>Website usage data through Next.js built-in analytics</li>
                    <li>Form submission data (temporarily stored during processing)</li>
                  </ul>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#08163B] mb-4">2. How We Use Your Information</h2>
                <div className="space-y-4 text-gray-700">
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Respond to your inquiries and provide recruitment services</li>
                    <li>Match your skills and experience with relevant job opportunities</li>
                    <li>Connect you with potential employers or candidates</li>
                    <li>Send you emails about our services (using Nodemailer)</li>
                    <li>Improve our website and user experience</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#08163B] mb-4">3. Information Sharing</h2>
                <div className="space-y-4 text-gray-700">
                  <p>We may share your information in the following circumstances:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>With Employers:</strong> Your professional information and skills (with your consent)</li>
                    <li><strong>With Job Seekers:</strong> Job opportunities and employer information</li>
                    <li><strong>Email Service:</strong> Your contact information is processed through our email system (Nodemailer)</li>
                    <li><strong>Strapi CMS:</strong> Website content is managed through our content management system</li>
                    <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                    <li><strong>Business Transfers:</strong> In connection with mergers or acquisitions</li>
                  </ul>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#08163B] mb-4">4. Data Security</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    We implement appropriate technical and organizational measures to protect your personal 
                    information against unauthorized access, alteration, disclosure, or destruction.
                  </p>
                  <p>
                    However, no method of transmission over the internet or electronic storage is 100% secure. 
                    While we strive to protect your information, we cannot guarantee absolute security.
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#08163B] mb-4">5. Your Rights</h2>
                <div className="space-y-4 text-gray-700">
                  <p>Depending on your location, you may have the following rights:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Access to your personal information</li>
                    <li>Correction of inaccurate information</li>
                    <li>Deletion of your personal information</li>
                    <li>Restriction of processing</li>
                    <li>Data portability</li>
                    <li>Objection to processing</li>
                    <li>Withdrawal of consent</li>
                  </ul>
                  <p className="mt-4">
                    To exercise these rights, please contact us using the information provided in the 
                    "Contact Us" div below.
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#08163B] mb-4">6. Cookies and Tracking</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Our website uses minimal cookies and tracking technologies. We primarily use:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Essential cookies for website functionality</li>
                    <li>Next.js built-in performance monitoring</li>
                    <li>Form data temporarily stored during submission</li>
                  </ul>
                  <p>
                    For detailed information about our use of cookies, please see our 
                    <a href="/cookies-policy" className="text-blue-600 hover:text-blue-800 underline"> Cookies Policy</a>.
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#08163B] mb-4">7. International Data Transfers</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    As a global recruitment platform, we may transfer your personal information to countries 
                    outside your country of residence. We ensure appropriate safeguards are in place to protect 
                    your information in accordance with applicable data protection laws.
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#08163B] mb-4">8. Data Retention</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    We retain your personal information for as long as necessary to provide our services, 
                    comply with legal obligations, resolve disputes, and enforce our agreements. When we no 
                    longer need your information, we will securely delete or anonymize it.
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#08163B] mb-4">9. Children's Privacy</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Our services are not intended for children under 16 years of age. We do not knowingly 
                    collect personal information from children under 16. If we become aware that we have 
                    collected information from a child under 16, we will take steps to delete such information.
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#08163B] mb-4">10. Changes to This Policy</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    We may update this Privacy Policy from time to time. We will notify you of any material 
                    changes by posting the new Privacy Policy on this page and updating the "Last updated" date. 
                    We encourage you to review this Privacy Policy periodically.
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#08163B] mb-4">11. Contact Us</h2>
                <div className="space-y-4 text-gray-700">
                  <p>If you have any questions about this Privacy Policy, please contact us:</p>
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
