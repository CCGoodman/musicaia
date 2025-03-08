"use client";

import { motion } from "framer-motion";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">What personal information do we collect from you?</h2>
            <p>We collect your information in three ways: Information You Provide, Automatically Collected Information, and Information from Other Sources. More detail is provided below.</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-white mb-3">Information you provide</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>User Content. We may collect the content you create or publish through the Service, such as AI cover songs, and the associated metadata (such as when, where, and by whom the content was created). Even if you are not a user, information about you may appear in content created or published by users on the Platform.</li>
              <li>Surveys, Research, and Promotions. We may collect information you provide if you choose to participate in a survey, research, promotion, contest, marketing campaign, or event conducted or sponsored by us.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-white mb-3">Automatically Collected Information</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Technical Information, the certain device and network connection information we may collect when you access the Service. This information includes your device model, operating system, IP address, and system language. We also collect service-related, diagnostic, and performance information, including crash reports and performance logs. We automatically assign you a device ID and user ID. Where you log-in from multiple devices, we use information such as your device ID and user ID to identify your activity across devices to give you a seamless log-in experience and for security purposes.</li>
              <li>User-Generated Information, the information uploaded, provided, or created by users while using the Service, including information about the content you view, the duration and frequency of your use, your engagement with other users, your search history and your settings.</li>
              <li>Content Characteristics and Features, the characteristics and features we detect and collect about the videos, images, and audio recordings that are part of your User Content, for example, by identifying objects and scenery, the existence or location within an image of a face or other body parts; and the text of words spoken in your User Content. We do this, for example, for content moderation and to provide special effects such as AI cover songs.</li>
            </ul>
          </section>

          <section>
            <p>We aim to process the personal data of users in accordance with general principles of privacy.</p>
            <p className="mt-4">Your personal data, which you provided/will provide to our Company and/or obtained by our Company by any means, may be processed by our Company as "Data Controller";</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>In the context of the objective of processing your personal data and in connection with this purpose, in a limited and measured manner,</li>
              <li>By maintaining the accuracy and up-to-date version of the personal data as reported or notified to our Company,</li>
              <li>May be recorded, stored, preserved, reorganized and be transferred to the institutions authorized to request such personal data by law and shall be transferred, classified and shared with third parties within the country or abroad under the conditions stipulated by legislation and upon your explicit consent if necessary, and they may be processed by other means listed under the legislation and be subject to other procedures set forth in the legislation.</li>
            </ul>
          </section>

          <section>
            <p>This Privacy Policy describes the data collected, intended use of the data, storage of the data, protection of the data and how the collected data will be shared, withdraw of your consent for the processing of these data and how the data will be corrected and revised.</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-white mb-3">Transferring Personal Data to Third Parties</h3>
            <p>Your personal data may be transferred abroad for the following reasons:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Conducting storage and archive activities</li>
              <li>Conducting business activities</li>
              <li>Conducting after-sales support services for goods/services</li>
              <li>Managing customer relationship management processes</li>
            </ul>
            <p className="mt-4">We may also transfer your personal data to services providers of our Company, third parties such as Facebook SDK, Adjust and Firebase Analytics which are embedded into our service for the following purposes:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Sharing identity, communication and transaction security information with authorized public institutions and organizations for the purpose of execution of activities in compliance with legislation, monitor and execution of legal affairs, informing authorized persons, institutions and organizations.</li>
              <li>Sharing identity and contact information to manage after-sales support services, conduct business activities and manage customer relationship management processes.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-white mb-3">Contact Us</h3>
            <p>Don't hesitate to contact us if you have any questions.</p>
            <p className="mt-2">Via Email: <a href="mailto:carechomusic@gmail.com" className="text-blue-400 hover:text-blue-300">carechomusic@gmail.com</a></p>
          </section>
        </div>
      </motion.div>
    </div>
  );
}