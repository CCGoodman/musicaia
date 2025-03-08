"use client";

import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        
        <div className="space-y-6 text-gray-300">
          <p>Contact us at: carechomusic@gmail.com</p>
          
          <p className="font-semibold text-white">Do not install or use the App if you have not read and accepted these terms.</p>
          
          <div className="space-y-4">
            <p>By using the App, you undertake to respect our intellectual rights (intellectual rights related to the App's source code, UI/UX design, content material, copyright and trademarks, hereinafter referred to as the "Intellectual Property Rights") as well as those owned by third parties.</p>
            
            <p>You may use our App solely for your own non-commercial purposes. You are bound to respect the copyrighted material within the App, you cannot sell pictures and/or other content available in the App.</p>
            
            <p>In order to use the App, you are required to have a compatible mobile device, and internet access.</p>
            
            <p>The App is available for downloading and installing on handheld compatible mobile devices running Apple iOS Operating System 14.5 or later.</p>
            
            <p>The version of the App may be upgraded from time to time to add support for new functions and services.</p>
            
            <p>The App is provided on a free basis. Once you download the App, you'll have access to its basic features.</p>
            
            <p>Access to some services and/or additional features within the App ("Premium options") requires paid subscriptions. You may have an opportunity to try Premium options during the free trial period as provided on the signup screen. After the free trial period expires an auto-renewing subscription period will start on a regular basis. Please mind that you will be charged automatically unless you cancel your subscription at least 24 hours before the end of the free trial period. When you cancel your subscription you will still have access to basic functions of the App. Premium options are available during the whole free trial period.</p>
            
            <p>You can choose different subscription options. You will have all necessary information about your subscription plan and duration of the free trial period (if applicable) on the signup screen before the purchase and/or subscription activation.</p>
            
            <p>Subscription with a free trial period will automatically renew to a paid subscription. Any unused portion of a free trial period, if offered, will be forfeited when the user purchases a subscription, where applicable. We reserve the right to modify, terminate or otherwise amend our offered subscription plans at any time.</p>
            
            <p>Your subscription will be automatically renewed within 24 hours before the current subscription ends. Auto-renew option for subscription made through the Apple App Store can be turned off in your Apple ID Account Settings at least 24 hours before the end of the current period. Payment will be charged to Apple ID Account at confirmation of purchase. Subscriptions made through the Apple App Store are managed by you.</p>
            
            <p>When you uninstall the App, it doesn't remove your subscription.</p>
            
            <p>All charges imposed by your communication services provider, including data roaming charges, are solely your responsibility. If you do not pay the bills related to your mobile phone or tablet device, then we assume that you have the permission from the person that does it before incurring any of these charges.</p>
            
            <p>The App is provided "as is" and "as available". We make no warranty that your access to the App or its functions will be uninterrupted or error-free.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}