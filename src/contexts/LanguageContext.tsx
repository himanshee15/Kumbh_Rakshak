import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'hi' | 'bn' | 'te' | 'mr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    title: 'Kumbh Rakshak',
    subtitle: 'Sacred Journey, Digital Guidance',
    description: 'Experience the divine gathering with AI-powered family tracking, instant issue resolution, and real-time crowd management for a blessed and safe pilgrimage.',
    pilgrimPortal: 'Pilgrim Portal',
    adminAccess: 'Admin Access',
    register: 'Register',
    login: 'Login',
    // Registration form
    registration: 'Pilgrim Registration',
    aadharNumber: 'Aadhar Number',
    familyId: 'Family Unique ID',
    mobileNumber: 'Mobile Number',
    name: 'Full Name',
    dateOfBirth: 'Date of Birth',
    generateQR: 'Generate QR Code',
    // Features
    aiFamilyGrouping: 'AI Family Grouping',
    liveTracking: 'Live Family Tracking',
    lostFound: 'Smart Lost & Found',
    crowdDensity: 'Crowd Density Map',
    qrSystem: 'Aadhar QR System',
    issueResolution: 'Issue Resolution'
  },
  hi: {
    title: 'कुंभ रक्षक',
    subtitle: 'पवित्र यात्रा, डिजिटल मार्गदर्शन',
    description: 'AI-संचालित पारिवारिक ट्रैकिंग, तत्काल समस्या समाधान, और वास्तविक समय में भीड़ प्रबंधन के साथ दिव्य सभा का अनुभव करें।',
    pilgrimPortal: 'तीर्थयात्री पोर्टल',
    adminAccess: 'व्यवस्थापक पहुंच',
    register: 'पंजीकरण',
    login: 'लॉग इन',
    registration: 'तीर्थयात्री पंजीकरण',
    aadharNumber: 'आधार संख्या',
    familyId: 'पारिवारिक विशिष्ट ID',
    mobileNumber: 'मोबाइल नंबर',
    name: 'पूरा नाम',
    dateOfBirth: 'जन्म तिथि',
    generateQR: 'QR कोड जनरेट करें',
    aiFamilyGrouping: 'AI पारिवारिक समूहीकरण',
    liveTracking: 'लाइव पारिवारिक ट्रैकिंग',
    lostFound: 'स्मार्ट खोया-पाया',
    crowdDensity: 'भीड़ घनत्व मानचित्र',
    qrSystem: 'आधार QR सिस्टम',
    issueResolution: 'समस्या समाधान'
  },
  bn: {
    title: 'কুম্ভ রক্ষক',
    subtitle: 'পবিত্র যাত্রা, ডিজিটাল গাইডেন্স',
    description: 'AI-চালিত পারিবারিক ট্র্যাকিং, তাৎক্ষণিক সমস্যা সমাধান এবং রিয়েল-টাইম ভিড় ব্যবস্থাপনা সহ ঐশ্বরিক সমাবেশের অভিজ্ঞতা নিন।',
    pilgrimPortal: 'তীর্থযাত্রী পোর্টাল',
    adminAccess: 'প্রশাসক অ্যাক্সেস',
    register: 'নিবন্ধন',
    login: 'লগ ইন',
    registration: 'তীর্থযাত্রী নিবন্ধন',
    aadharNumber: 'আধার নম্বর',
    familyId: 'পারিবারিক অনন্য ID',
    mobileNumber: 'মোবাইল নম্বর',
    name: 'পূর্ণ নাম',
    dateOfBirth: 'জন্ম তারিখ',
    generateQR: 'QR কোড তৈরি করুন',
    aiFamilyGrouping: 'AI পারিবারিক গ্রুপিং',
    liveTracking: 'লাইভ পারিবারিক ট্র্যাকিং',
    lostFound: 'স্মার্ট হারানো-পাওয়া',
    crowdDensity: 'ভিড়ের ঘনত্ব মানচিত্র',
    qrSystem: 'আধার QR সিস্টেম',
    issueResolution: 'সমস্যা সমাধান'
  },
  te: {
    title: 'కుంభ రక్షక్',
    subtitle: 'పవిత్ర యాత్ర, డిజిటల్ మార్గదర్శనం',
    description: 'AI-శక్తితో కూడిన కుటుంబ ట్రాకింగ్, తక్షణ సమస్య పరిష్కారం మరియు రియల్-టైమ్ గుంపు నిర్వహణతో దైవిక సమావేశాన్ని అనుభవించండి।',
    pilgrimPortal: 'యాత్రికుల పోర్టల్',
    adminAccess: 'అడ్మిన్ యాక్సెస్',
    register: 'నమోదు',
    login: 'లాగిన్',
    registration: 'యాత్రికుల నమోదు',
    aadharNumber: 'ఆధార్ నంబర్',
    familyId: 'కుటుంబ ప్రత్యేక ID',
    mobileNumber: 'మొబైల్ నంబర్',
    name: 'పూర్తి పేరు',
    dateOfBirth: 'పుట్టిన తేదీ',
    generateQR: 'QR కోడ్ జనరేట్ చేయండి',
    aiFamilyGrouping: 'AI కుటుంబ గ్రూపింగ్',
    liveTracking: 'లైవ్ కుటుంబ ట్రాకింగ్',
    lostFound: 'స్మార్ట్ దొరికిన-కోల్పోయిన',
    crowdDensity: 'గుంపు సాంద్రత మ్యాప్',
    qrSystem: 'ఆధార్ QR సిస్టమ్',
    issueResolution: 'సమస్య పరిష్కారం'
  },
  mr: {
    title: 'कुंभ रक्षक',
    subtitle: 'पवित्र प्रवास, डिजिटल मार्गदर्शन',
    description: 'AI-संचालित कौटुंबिक ट्रॅकिंग, तत्काळ समस्या निराकरण आणि रिअल-टाइम गर्दी व्यवस्थापनासह दैवी संमेलनाचा अनुभव घ्या।',
    pilgrimPortal: 'यात्रेकरू पोर्टल',
    adminAccess: 'प्रशासक प्रवेश',
    register: 'नोंदणी',
    login: 'लॉग इन',
    registration: 'यात्रेकरू नोंदणी',
    aadharNumber: 'आधार क्रमांक',
    familyId: 'कौटुंबिक अद्वितीय ID',
    mobileNumber: 'मोबाइल नंबर',
    name: 'पूर्ण नाव',
    dateOfBirth: 'जन्म तारीख',
    generateQR: 'QR कोड तयार करा',
    aiFamilyGrouping: 'AI कौटुंबिक गटबंधन',
    liveTracking: 'लाइव्ह कौटुंबिक ट्रॅकिंग',
    lostFound: 'स्मार्ट हरवलेले-सापडलेले',
    crowdDensity: 'गर्दी घनता नकाशा',
    qrSystem: 'आधार QR सिस्टम',
    issueResolution: 'समस्या निराकरण'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};