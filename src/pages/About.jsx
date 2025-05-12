import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import { assets } from '../assets/assets';
import { motion, AnimatePresence } from 'framer-motion'; 
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';

const About = () => {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('about');
  const [language, setLanguage] = useState('en');
  const tabs = ['about', 'team', 'vision', 'values'];

  const teamMembers = [
    {
      img: '',
      name: 'Sultan bashammakh',
      role: 'UA0439',
      bio: 'Student at University of Business and Technology, passionate about technology and innovation.',
      linkedin: 'https://www.linkedin.com/in/%D8%B3%D9%84%D8%B7%D8%A7%D9%86-%D8%A8%D8%A7%D8%B4%D9%85%D8%A7%D8%AE-161342264?trk=contact-info',
      github: 'https://github.com/SerenityCS',
    },
    {
      img: 'https://web.whatsapp.com/fea2818f-5500-4ea6-a2ef-566431dfad60',
      name: 'Majed Abdulaziz Altaifi',
      role: 'VA0255',
      bio: 'Student at University of Business and Technology, passionate about technology and innovation.',
      linkedin: 'https://www.linkedin.com/in/majed-al-taifi-8661122b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      github: 'https://github.com/majedaltaifi/Figma-for-UI-UX-Master-Web-Design-in-Figma',
    },
    {
      img: '',
      name: 'ABDULRAHMAN ALKAYALI',
      role: 'SA0067',
      bio: 'Student at University of Business and Technology, passionate about technology and innovation.',
      linkedin: 'https://www.linkedin.com/in/%D8%B9%D8%A8%D8%AF%D8%A7%D9%84%D8%B1%D8%AD%D9%85%D9%86-%D8%A7%D9%84%D9%83%D9%8A%D8%A7%D9%84%D9%8A-13543a313/',
      github: 'https://github.com/abdulrahmanxl',
    },
    {
      img: '',
      name: 'Mohammed aljadani',
      role: 'VA0104',
      bio: 'Student at University of Business and Technology, passionate about technology and innovation.',
      linkedin: 'https://www.linkedin.com/in/mohammed-aljadani-97b42a276?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      github: 'https://github.com/moha-jed',
    },
    {
      img: '',
      name: 'Raef sameer Malibari',
      role: 'VB0042',
      bio: 'Student at University of Business and Technology, passionate about technology and innovation.',
      linkedin: 'https://www.linkedin.com/in/raef-91a84a318?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      github: 'https://github.com/raef888/raef888',
    },
  ];
  
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      const nextIndex = tabs.indexOf(activeTab) + 1;
      if (nextIndex < tabs.length) {
        setActiveTab(tabs[nextIndex]);
      }
    },
    onSwipedRight: () => {
      const prevIndex = tabs.indexOf(activeTab) - 1;
      if (prevIndex >= 0) {
        setActiveTab(tabs[prevIndex]);
      }
    },
    trackMouse: true,
  });

  const tabContentVariants = {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 0.6 } },
    exit: { x: -100, opacity: 0, transition: { duration: 0.4 } },
  };

  const changeLanguage = (e) => setLanguage(e.target.value);

  const translateTab = (tab) => {
    const translations = {
      about: 'من نحن',
      team: 'فريق العمل',
      vision: 'رؤيتنا',
      values: 'قيمنا',
    };
    return language === 'en' ? tab.charAt(0).toUpperCase() + tab.slice(1) : translations[tab];
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-white transition-colors duration-700">

      {/* المربع الداخلي المتحرك */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }} 
        className="w-full max-w-6xl p-8 md:p-12 rounded-3xl shadow-2xl space-y-8 bg-gradient-to-bl from-blue-400 to-blue-300  transition-colors duration-700"
      >

        {/* الشريط العلوي: شعار + اختيار اللغة */}
        <div className="flex justify-between items-center mb-8">
          <img
            src={assets.logo_ubt}
            alt="Logo"
            className="w-20 h-20 rounded-full cursor-pointer hover:scale-110 transition-transform duration-300"
            onClick={() => navigate('/')}
          />
          <div className="flex items-center gap-4">
            {/* اختيار اللغة */}
            <select
              value={language}
              onChange={changeLanguage}
              className="px-5 py-2 rounded-full font-semibold  hover:bg-blue-200  text-black transition"
            >
              <option value="en">English</option>
              <option value="ar">العربية</option>
            </select>
          </div>
        </div>

        {/* أزرار التبويبات */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full text-sm md:text-base font-semibold transition shadow-md hover:shadow-lg
                ${activeTab === tab 
                  ? 'text-white bg-blue-400 hover:bg-blue-600' 
                  : 'text-white bg-blue-400 hover:bg-blue-600 dark:text-white'}
              `}
            >
              {translateTab(tab)}
            </button>
          ))}
        </div>

        {/* محتوى التبويب مع السحب والتنقل */}
        <div {...swipeHandlers} className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={tabContentVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute w-full"
            >
              {/* محتوى تبويب "من نحن" */}
              {activeTab === 'about' && (
                <div className="text-center space-y-4 p-6 rounded-lg">
                  <h2 className="text-4xl font-bold">{language === 'en' ? 'About Us' : 'من نحن'}</h2>
                  <p>{language === 'en' ? 'We are a team committed to excellence and innovation, driven by a passion for creating advanced technological solutions that elevate service quality and meet evolving market needs. United by a shared vision, we strive to deliver real value to users through professional practices, creative thinking, and adherence to the highest quality standards. We believe innovation is not just a choice — it is a way of life — and we continuously aim to improve our performance and expand our positive impact in the tech world.' 
                  : 
                  'نحن فريق ملتزم بالتميّز والابتكار، نعمل بشغف لصنع حلول تقنية متطورة ترتقي بمستوى الخدمات وتلبي احتياجات السوق المتجددة. يجمعنا هدف مشترك يتمثل في تقديم قيمة حقيقية للمستخدمين من خلال ممارسات احترافية، وتفكير إبداعي، واعتماد أعلى معايير الجودة. نؤمن بأن الابتكار ليس مجرد خيار، بل هو أسلوب حياة، ونسعى باستمرار إلى تحسين أدائنا وتوسيع أثرنا الإيجابي في عالم التقنية.'}</p>
                </div>
              )}

              {/* محتوى تبويب "فريق العمل" */}
              {activeTab === 'team' && (
                <div className="flex flex-row-reverse justify-center gap-8 p-6  rounded-full ">
                  {teamMembers.map((member, idx) => (
                    <div key={idx} className="rounded-lg p-4 text-center text-black">
                      <img
                        src={assets.logo_ubt}
                        alt={member.name}
                        className="w-24 h-24 mx-auto rounded-full mb-4"
                      />
                      <h3 className="text-lg font-semibold">{member.name}</h3>
                      <p className="text-white dark:text-white">{member.role}</p>
                      <p className="mt-2 text-sm">{member.bio}</p>
                      <div className="flex justify-center gap-4 mt-3">
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                          <FaLinkedin className="text-blue-600 dark:text-blue-400 hover:scale-110 transition" size={24} />
                        </a>
                        <a href={member.github} target="_blank" rel="noopener noreferrer">
                          <FaGithub className="text-gray-700 dark:text-gray-300 hover:scale-110 transition" size={24} />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* محتوى تبويب "رؤيتنا" */}
              {activeTab === 'vision' && (
                <div className="text-center space-y-4 p-6 rounded-lg ">
                  <h2 className="text-4xl font-bold">{language === 'en' ? 'Our Vision' : 'رؤيتنا'}</h2>
                  <p>{language === 'en' ? 'We aim to lead innovation across various industries by providing advanced technological solutions based on the latest developments in the tech world. Our focus is on designing intelligent and integrated systems that enhance efficiency, streamline operations, and meet the ever-evolving expectations of our clients. We aspire to be a driving force for positive change in the market through a creative approach and a long-term strategic vision that contributes to building a smarter and more sustainable digital future.' 
                  :
                  'نسعى إلى قيادة الابتكار في مختلف القطاعات من خلال تقديم حلول تقنية متطورة تعتمد على أحدث ما توصلت إليه التكنولوجيا، ونركز على تصميم أنظمة ذكية ومتكاملة تُعزز الكفاءة، وتُسهل العمليات، وتلبي تطلعات العملاء المتجددة. نطمح إلى أن نكون محركًا للتغيير الإيجابي في السوق عبر اعتماد نهج إبداعي ورؤية استراتيجية طويلة المدى، تسهم في بناء مستقبل رقمي أكثر ذكاءً واستدامة.'}</p>
                </div>
              )}

              {/* محتوى تبويب "قيمنا" */}
              {activeTab === 'values' && (
                <div className="text-center space-y-4 p-6  rounded-lg ">
                  <h2 className="text-4xl font-bold">{language === 'en' ? 'Our Values' : 'قيمنا'}</h2>
                  <p>{language === 'en' ? 'We believe that integrity is the foundation of trust, excellence is the outcome of relentless pursuit of quality, collaboration is the spirit that drives collective success, and innovation is the engine that powers meaningful progress and sustainable growth in everything we do.' 
                  :
                  'نحن نؤمن بأن النزاهة هي الأساس الذي تُبنى عليه الثقة، وأن التميز هو نتيجة السعي المستمر لتقديم الأفضل. كما نعتبر التعاون روح العمل الجماعي التي تقود إلى النجاح، ونعتمد على الابتكار كقوة دافعة لتحقيق التغيير والتطور المستدام في كل ما نقوم به.'}</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* زر الانتقال إلى صفحة تسجيل الدخول */}
        <div className="flex justify-center mt-8">
          <button 
            onClick={() => navigate('/')}
            className="px-6 py-2 rounded-full text-white bg-blue-400 hover:bg-blue-600 transition duration-300"
          >
            {language === 'en' ? 'Go to Login' : 'الذهاب إلى تسجيل الدخول'}
          </button>
        </div>

      </motion.div>

    </div>
  );
};

export default About;


