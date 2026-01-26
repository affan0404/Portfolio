import { useState, useEffect, useRef } from 'react';

// Supabase configuration
const SUPABASE_URL = 'https://peakbloaytdaxtazkfza.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBlYWtibG9heXRkYXh0YXprZnphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkzMTk3MDYsImV4cCI6MjA4NDg5NTcwNn0.TcEcvNVSXTRab0PgdOeavlcpWIK-fwpG-aL4O0QzetI';

export default function Portfolio() {
  const [hoveredExp, setHoveredExp] = useState<number | null>(null);
  const [darkMode, setDarkMode] = useState(false);
  const [likedProjects, setLikedProjects] = useState<{[key: number]: boolean}>({});
  const [projectLikeCounts, setProjectLikeCounts] = useState<{[key: number]: number}>({});
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [currentNameIndex, setCurrentNameIndex] = useState(0);
  const sectionRefs = useRef<{[key: string]: HTMLElement | null}>({});

  const nameTranslations = [
    'Affan Shahid',
    'عفان شاهد',
    '阿凡·沙希德',
    'Аффан Шахид',
  ];

  const workExperiences = [
    { 
      id: 1, 
      title: 'President', 
      company: 'UWindsor Computer Science Society', 
      logo: 'CSS.png', 
      period: 'April 2025 - Present',
      description: "Led 20 board members and 10-person dev team while managing $50K budget to serve 2,000+ Computer Science students through events, workshops, and hackathons",
      url: 'https://css.uwindsor.ca'
    },
    { 
      id: 2, 
      title: 'Network Technician', 
      company: 'Nature Fresh Farms', 
      logo: 'fresh.png', 
      period: 'April 2025 - November 2025',
      description: "Onboarded 100+ employees, closed 1000+ IT tickets, and maintained network infrastructure including server rooms and security systems",
      url: 'https://www.naturefresh.ca'
    },
    { 
      id: 3, 
      title: 'Software Engineering Intern', 
      company: 'JDC.ca', 
      logo: 'JDC.png', 
      period: 'August 2024 - November 2024',
      description: "Integrated new APIs and enhanced PowerShell packages serving 50+ companies, reducing user-reported issues by 23% for 1000+ users",
      url: 'https://www.jdc.ca/'
    },
    { 
      id: 4, 
      title: 'Seasonal Programming Instructor', 
      company: 'Al-Hijra Academy', 
      logo: 'ALHIJRA.webp', 
      period: 'Oct 2024 - Present',
      description: "Taught Python programming to 100+ students grades 5-8 and coached school robotics team to earn 3 trophies at Genius Cup competition",
      url: 'http://alhijramosque.com/'
    },
  ];

  const researchExperiences = [
    {
      id: 6,
      title: 'Research Assistant',
      company: 'WASP Labs',
      logo: 'waspp.webp',
      period: 'September 2025 - Present',
      description: "Designed 20+ experimental prompts and surveys collecting 300+ responses to analyze LLM memory and inference patterns in a multi-site research initiative with 100+ global participants",
      url: 'https://wasplab.github.io/guess-who-llm/'
    },
    {
      id: 7,
      title: 'Undergraduate Researcher',
      company: 'University of Windsor',
      logo: 'uwin.png',
      period: 'September 2025 - Present',
      description: 'Conducting systematic literature review on algorithmic bias in AI and ML systems (2005-2025) across SCOPUS, Web of Science, and Google Scholar. Analyzing bias evolution, categorization frameworks, and preparing research paper to make technical AI bias concepts accessible to non-technical audiences.',
      url: 'https://www.uwindsor.ca'
    },
  ];

  const projects = [
    { 
      id: 1, 
      name: 'Gym Clock', 
      url: 'https://gymclock.app/', 
      image: 'gym.png',
      description: "Won 2nd place at CUSEC (largest Canadian software engineering conference) for a workout-based alarm clock app requiring users to complete exercises to deactivate alarms, achieving 500+ wishlists",
      tags: ['React Native', 'Swift', 'Expo', 'supabase']
    },
    { 
      id: 2, 
      name: 'Quikli', 
      url: 'https://tryquikli.ca/', 
      image: 'quikli.png',
      description: "A comprehensive local service marketplace platform connecting users with verified service providers for seamless real-time task management, scheduling, and secure booking experiences, generating 1500+ wishlists",
      tags: ['React Native', 'Spring Boot', 'PostgreSQL']
    },
    { 
      id: 3, 
      name: 'DociMate', 
      url: 'https://docimate.com/', 
      image: 'birddd.png',
      description: "Won Best Overall, Best UI/UX, Best Finance at WinHacks 2025 and 3rd at Google DevFest 2025 for a document-processing app converting documents into structured tables",
      tags: ['React', 'TypeScript', 'Next.js', 'Gemini']
    },
  ];

  const extracurriculars = [
    {
      id: 1,
      title: 'President',
      organization: 'AI Club',
      logo: 'AI.png',
      period: 'December 2024 - May 2025',
      url: 'https://www.uwindsorai.club/'
    },
    {
      id: 2,
      title: 'Head Delegate',
      organization: 'CUSEC: Canadian University Software Engineering Conference',
      logo: 'CUSEC.png',
      period: 'April 2025 - January 2026',
      url: 'https://2026.cusec.net/'
    },
    {
      id: 3,
      title: 'Local Lead',
      organization: 'NASA International Space Apps Challenge',
      logo: 'NASA.png',
      period: 'March 2025 - October 2025',
      url: 'https://www.spaceappschallenge.org/'
    },
    {
      id: 4,
      title: 'Lead Organizer',
      organization: 'WinHacks',
      logo: 'Win.png',
      period: 'September 2025 - February 2026',
      url: 'https://winhacks.ca/#'
    },
    {
      id: 5,
      title: 'Representative, School of Computer Science',
      organization: 'UWSA: University of Windsor Student Alliance',
      logo: 'UWSA.webp',
      period: 'April 2025 - April 2026',
      url: 'https://www.uwsa.ca/'
    },
    {
      id: 6,
      title: 'Board Member (COOP Committee)',
      organization: 'University of Windsor',
      logo: 'uwin.png',
      period: 'October 2025 - Present',
      url: 'https://www.uwindsor.ca/'

    },
    {
      id: 7,
      title: 'Board Member (Social Committee)',
      organization: 'Al-Hijra Academy',
      logo: 'ALHIJRA.webp',
      period: 'October 2025 - Present',
      url: 'http://alhijramosque.com/'
    },
    {
      id: 8,
      title: 'Head Delegate',
      organization: 'CS Games 2026',
      logo: 'CSG.png',
      period: 'December 2025 - March 2026',
      url: 'https://csgames.org/en/'
    },
  ];

  // Load like counts from Supabase on mount
  useEffect(() => {
    const loadLikeCounts = async () => {
      try {
        const response = await fetch(`${SUPABASE_URL}/rest/v1/project_likes?select=*`, {
          headers: {
            'apikey': SUPABASE_ANON_KEY,
            'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
          }
        });
        const data = await response.json();
        
        const counts: {[key: number]: number} = {};
        data.forEach((item: any) => {
          counts[item.project_id] = item.like_count;
        });
        setProjectLikeCounts(counts);
      } catch (error) {
        console.error('Failed to load like counts:', error);
      }
    };
    loadLikeCounts();
  }, []);

  // Load user's liked projects from local storage
  useEffect(() => {
    const savedLikes = localStorage.getItem('userLikedProjects');
    if (savedLikes) {
      setLikedProjects(JSON.parse(savedLikes));
    }
  }, []);

  const toggleLike = async (projectId: number) => {
    const isCurrentlyLiked = likedProjects[projectId];
    const newLikedState = !isCurrentlyLiked;
    
    // Update user's liked state immediately for UI responsiveness
    const newLikedProjects = {
      ...likedProjects,
      [projectId]: newLikedState
    };
    setLikedProjects(newLikedProjects);
    localStorage.setItem('userLikedProjects', JSON.stringify(newLikedProjects));
    
    // Calculate new count
    const currentCount = projectLikeCounts[projectId] || 0;
    const newCount = newLikedState ? currentCount + 1 : Math.max(0, currentCount - 1);
    
    // Optimistically update UI
    setProjectLikeCounts(prev => ({
      ...prev,
      [projectId]: newCount
    }));
    
    try {
      // First, get the current row to update it
      const getResponse = await fetch(`${SUPABASE_URL}/rest/v1/project_likes?project_id=eq.${projectId}&select=*`, {
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
        }
      });
      
      const currentData = await getResponse.json();
      console.log('Current data:', currentData);
      
      if (currentData && currentData[0]) {
        // Update the like count using RPC or direct update
        const updateResponse = await fetch(`${SUPABASE_URL}/rest/v1/project_likes?project_id=eq.${projectId}`, {
          method: 'PATCH',
          headers: {
            'apikey': SUPABASE_ANON_KEY,
            'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
            'Content-Type': 'application/json',
            'Prefer': 'return=minimal'
          },
          body: JSON.stringify({ like_count: newCount })
        });
        
        console.log('Update response status:', updateResponse.status);
        
        if (!updateResponse.ok) {
          const errorText = await updateResponse.text();
          console.error('Update error:', errorText);
          throw new Error('Failed to update like count');
        }
      }
    } catch (error) {
      console.error('Failed to update like count:', error);
      // Revert on error
      setProjectLikeCounts(prev => ({
        ...prev,
        [projectId]: currentCount
      }));
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNameIndex((prev) => (prev + 1) % nameTranslations.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`min-h-screen w-full transition-all duration-500 ${
      darkMode 
        ? 'bg-gray-900' 
        : 'bg-gray-50'
    }`} style={{ scrollBehavior: 'smooth' }}>
      
      {/* Header Navigation */}
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        darkMode 
          ? 'bg-gray-900/95 backdrop-blur-sm border-b border-purple-500/20' 
          : 'bg-white/95 backdrop-blur-sm border-b border-pink-100'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`text-2xl font-bold transition-colors duration-300 hover:scale-105 ${
              darkMode ? 'text-white hover:text-purple-400' : 'text-gray-800 hover:text-purple-600'
            }`}
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif' }}
          >
            Portfolio
          </button>
          
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/mohammad-affan-shahid-26372a2b2/"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-8 py-3 rounded-full text-base font-semibold transition-all duration-300 hover:scale-105 shadow-lg ${
                darkMode 
                  ? 'bg-purple-600 text-white hover:bg-purple-500 hover:shadow-purple-500/50' 
                  : 'bg-purple-600 text-white hover:bg-purple-700 hover:shadow-purple-300/50'
              }`}
            >
              Contact
            </a>
            <a
              href="/affanportfolio.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-8 py-3 rounded-full text-base font-semibold transition-all duration-300 hover:scale-105 shadow-lg ${
                darkMode 
                  ? 'border-2 border-purple-500 text-purple-400 hover:bg-purple-500/10 hover:shadow-purple-500/30' 
                  : 'border-2 border-purple-600 text-purple-600 hover:bg-purple-50 hover:shadow-purple-300/50'
              }`}
            >
              Resume
            </a>
          </div>
        </div>
      </header>

      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 ${
          darkMode 
            ? 'bg-gray-800 border-2 border-purple-500/30' 
            : 'bg-white border-2 border-pink-200'
        }`}
      >
        {darkMode ? (
          <svg className="w-6 h-6 stroke-purple-400" fill="none" viewBox="0 0 24 24" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        ) : (
          <svg className="w-6 h-6 stroke-gray-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1" x2="12" y2="3"/>
            <line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/>
            <line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </svg>
        )}
      </button>

      {/* Hero Section */}
      <section 
        id="hero"
        ref={(el) => { if (el) sectionRefs.current['hero'] = el; }}
        className={`min-h-screen flex items-center justify-center px-4 transition-all duration-1000 ${
          darkMode 
            ? 'bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900' 
            : 'bg-gradient-to-b from-purple-50 via-pink-50 to-orange-50'
        }`}
      >
        <div className="text-center animate-fadeIn">
          <div className={`w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400 p-1 transform hover:scale-105 transition-transform duration-300 shadow-2xl ${
            darkMode ? 'shadow-purple-500/50' : 'shadow-pink-300/50'
          }`}>
            <div className={`w-full h-full rounded-full flex items-center justify-center overflow-hidden ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            }`}>
              <img src="pfp.png" alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
          <h1 
            key={currentNameIndex}
            className={`text-6xl mb-4 transition-colors duration-300 animate-writing ${
              darkMode ? 'text-white' : 'text-gray-800'
            }`} 
            style={{ 
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif', 
              fontWeight: 600 
            }}
          >
            {nameTranslations[currentNameIndex]}
          </h1>
          <p className={`text-xl mb-4 transition-colors duration-300 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Software Developer
          </p>
          <div className={`max-w-2xl mx-auto px-4 transition-colors duration-300 ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            <p className="text-base leading-relaxed">
              I'm a passionate software developer and researcher focused on building innovative solutions. Currently President of the UWindsor Computer Science Society and conducting research at WASP Labs. When I'm not coding, you'll find me traveling the world or training for my next marathon!
            </p>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section 
        id="work"
        ref={(el) => { if (el) sectionRefs.current['work'] = el; }}
        className={`py-16 px-4 transition-all duration-1000 ${
          visibleSections.has('work') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        } ${
          darkMode 
            ? 'bg-gray-800' 
            : 'bg-white'
        }`}
      >
        <div className="max-w-4xl mx-auto relative">
          <div className="mb-12">
            <h2 
              className={`text-4xl mb-4 transition-colors duration-300 ${
                darkMode ? 'text-white' : 'text-gray-800'
              }`}
              style={{ 
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif', 
                fontWeight: 600 
              }}
            >
              Work Experience
            </h2>
            <p className={`text-lg transition-colors duration-300 ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              My track record across academia and industry.
            </p>
          </div>

          <div 
            className={`absolute left-0 w-1 rounded-full transition-colors duration-300 ${
              darkMode 
                ? 'bg-gradient-to-b from-purple-500 via-pink-500 to-orange-500' 
                : 'bg-gradient-to-b from-purple-300 via-pink-300 to-orange-300'
            }`}
            style={{
              top: '8rem',
              bottom: '2rem'
            }}
          ></div>

          <div className="space-y-8 pl-12">
            {workExperiences.map((exp, index) => (
              <div
                key={exp.id}
                className="relative"
              >
                <div 
                  className={`absolute w-4 h-4 rounded-full border-4 transition-colors duration-300 ${
                    darkMode 
                      ? 'bg-pink-500 border-gray-800' 
                      : 'bg-pink-400 border-white'
                  }`}
                  style={{
                    left: '-3.25rem',
                    top: '2rem'
                  }}
                ></div>

                <div
                  className={`flex gap-6 p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] cursor-pointer ${
                    darkMode 
                      ? 'bg-gray-700/50 hover:bg-gray-700/70 border border-purple-500/20' 
                      : 'bg-gray-50 hover:shadow-xl border border-pink-100'
                  }`}
                  onMouseEnter={() => setHoveredExp(exp.id)}
                  onMouseLeave={() => setHoveredExp(null)}
                  onClick={() => window.open(exp.url, '_blank')}
                >
                  <div className={`flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center text-3xl transition-all duration-300 overflow-hidden ${
                    hoveredExp === exp.id 
                      ? 'scale-110' 
                      : ''
                  } ${
                    darkMode 
                      ? 'bg-gradient-to-br from-purple-600 to-pink-600' 
                      : 'bg-gradient-to-br from-purple-200 to-pink-200'
                  }`}>
                    <img src={exp.logo} alt={exp.company} className="w-full h-full object-cover" />
                  </div>

                  <div className="flex-1">
                    <h3 className={`text-xl font-semibold mb-1 transition-colors duration-300 ${
                      darkMode ? 'text-white' : 'text-gray-800'
                    }`}>
                      {exp.title}
                    </h3>
                    <p className={`text-sm mb-2 transition-colors duration-300 ${
                      darkMode ? 'text-purple-400' : 'text-purple-600'
                    }`}>
                      {exp.company} | {exp.period}
                    </p>
                    <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {exp.description}
                    </p>
                  </div>

                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                    darkMode 
                      ? 'bg-purple-600/30 text-purple-400' 
                      : 'bg-purple-100 text-purple-600'
                  }`}>
                    {index + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section 
        id="research"
        ref={(el) => { if (el) sectionRefs.current['research'] = el; }}
        className={`py-16 px-4 transition-all duration-1000 ${
          visibleSections.has('research') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        } ${
          darkMode 
            ? 'bg-gradient-to-b from-gray-800 via-purple-900 to-gray-800' 
            : 'bg-gradient-to-b from-white via-purple-50 to-white'
        }`}
      >
        <div className="max-w-4xl mx-auto relative">
          <div className="mb-12">
            <h2 
              className={`text-4xl mb-4 transition-colors duration-300 ${
                darkMode ? 'text-white' : 'text-gray-800'
              }`}
              style={{ 
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif', 
                fontWeight: 600 
              }}
            >
              Research
            </h2>
            <p className={`text-lg transition-colors duration-300 ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Academic research and scholarly contributions.
            </p>
          </div>

          <div 
            className={`absolute left-0 w-1 rounded-full transition-colors duration-300 ${
              darkMode 
                ? 'bg-gradient-to-b from-purple-500 via-pink-500 to-orange-500' 
                : 'bg-gradient-to-b from-purple-300 via-pink-300 to-orange-300'
            }`}
            style={{
              top: '8rem',
              bottom: '2rem'
            }}
          ></div>

          <div className="space-y-8 pl-12">
            {researchExperiences.map((exp, index) => (
              <div
                key={exp.id}
                className="relative"
              >
                <div 
                  className={`absolute w-4 h-4 rounded-full border-4 transition-colors duration-300 ${
                    darkMode 
                      ? 'bg-pink-500 border-gray-800' 
                      : 'bg-pink-400 border-white'
                  }`}
                  style={{
                    left: '-3.25rem',
                    top: '2rem'
                  }}
                ></div>

                <div
                  className={`flex gap-6 p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] cursor-pointer ${
                    darkMode 
                      ? 'bg-gray-700/50 hover:bg-gray-700/70 border border-purple-500/20' 
                      : 'bg-white hover:shadow-xl border border-pink-100'
                  }`}
                  onMouseEnter={() => setHoveredExp(exp.id)}
                  onMouseLeave={() => setHoveredExp(null)}
                  onClick={() => window.open(exp.url, '_blank')}
                >
                  <div className={`flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center text-3xl transition-all duration-300 overflow-hidden ${
                    hoveredExp === exp.id 
                      ? 'scale-110' 
                      : ''
                  } ${
                    darkMode 
                      ? 'bg-gradient-to-br from-purple-600 to-pink-600' 
                      : 'bg-gradient-to-br from-purple-200 to-pink-200'
                  }`}>
                    <img src={exp.logo} alt={exp.company} className="w-full h-full object-cover" />
                  </div>

                  <div className="flex-1">
                    <h3 className={`text-xl font-semibold mb-1 transition-colors duration-300 ${
                      darkMode ? 'text-white' : 'text-gray-800'
                    }`}>
                      {exp.title}
                    </h3>
                    <p className={`text-sm mb-2 transition-colors duration-300 ${
                      darkMode ? 'text-purple-400' : 'text-purple-600'
                    }`}>
                      {exp.company} · {exp.period}
                    </p>
                    <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {exp.description}
                    </p>
                  </div>

                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                    darkMode 
                      ? 'bg-purple-600/30 text-purple-400' 
                      : 'bg-purple-100 text-purple-600'
                  }`}>
                    {index + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section 
        id="projects"
        ref={(el) => { if (el) sectionRefs.current['projects'] = el; }}
        className={`py-16 px-4 transition-all duration-1000 ${
          visibleSections.has('projects') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        } ${
          darkMode 
            ? 'bg-gray-800' 
            : 'bg-white'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 
              className={`text-4xl mb-4 transition-colors duration-300 ${
                darkMode ? 'text-white' : 'text-gray-800'
              }`}
              style={{ 
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif', 
                fontWeight: 600 
              }}
            >
              Projects
            </h2>
            <p className={`text-lg transition-colors duration-300 ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Featured work and side projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] ${
                  darkMode 
                    ? 'bg-gray-700/50 border border-purple-500/20' 
                    : 'bg-gray-50 border border-pink-100 shadow-lg'
                }`}
              >
                <div 
                  className="aspect-square bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform overflow-hidden"
                  onClick={() => window.open(project.url, '_blank')}
                >
                  <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
                </div>

                <div className="p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <button 
                      onClick={() => toggleLike(project.id)}
                      className="hover:scale-110 transition-transform"
                    >
                      {likedProjects[project.id] ? (
                        <svg className="w-6 h-6 fill-red-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </svg>
                      ) : (
                        <svg className={`w-6 h-6 ${darkMode ? 'stroke-gray-400' : 'stroke-gray-600'}`} fill="none" viewBox="0 0 24 24" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </svg>
                      )}
                    </button>
                    <button 
                      className="hover:scale-110 transition-transform"
                      onClick={() => window.open(project.url, '_blank')}
                    >
                      <svg className={`w-6 h-6 ${darkMode ? 'stroke-gray-400' : 'stroke-gray-600'}`} fill="none" viewBox="0 0 24 24" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/>
                      </svg>
                    </button>
                  </div>

                  <p className={`text-xs font-semibold mb-2 transition-colors duration-300 ${
                    darkMode ? 'text-white' : 'text-gray-800'
                  }`}>
                    {projectLikeCounts[project.id] || 0} likes
                  </p>

                  <h3 className={`text-base font-bold mb-1 transition-colors duration-300 ${
                    darkMode ? 'text-white' : 'text-gray-800'
                  }`}>
                    {project.name}
                  </h3>

                  <p className={`text-xs mb-2 leading-relaxed transition-colors duration-300 ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className={`text-xs px-2 py-0.5 rounded-full transition-colors duration-300 ${
                          darkMode 
                            ? 'bg-purple-600/30 text-purple-400' 
                            : 'bg-purple-100 text-purple-600'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extracurricular Section */}
      <section 
        id="extracurricular"
        ref={(el) => { if (el) sectionRefs.current['extracurricular'] = el; }}
        className={`py-16 px-4 transition-all duration-1000 ${
          visibleSections.has('extracurricular') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        } ${
          darkMode 
            ? 'bg-gray-800' 
            : 'bg-white'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 
              className={`text-4xl mb-4 transition-colors duration-300 ${
                darkMode ? 'text-white' : 'text-gray-800'
              }`}
              style={{ 
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif', 
                fontWeight: 600 
              }}
            >
              Extracurricular
            </h2>
            <p className={`text-lg transition-colors duration-300 ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Leadership and community involvement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {extracurriculars.map((activity) => (
              <div
                key={activity.id}
                className={`rounded-2xl p-5 transition-all duration-300 hover:scale-[1.02] cursor-pointer ${
                  darkMode 
                    ? 'bg-gray-700/50 border border-purple-500/20 hover:bg-gray-700/70' 
                    : 'bg-gray-50 border border-pink-100 hover:shadow-lg'
                }`}
                onMouseEnter={() => setHoveredExp(activity.id + 100)}
                onMouseLeave={() => setHoveredExp(null)}
                onClick={() => window.open(activity.url, '_blank')}
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 overflow-hidden ${
                  hoveredExp === activity.id + 100 
                    ? 'scale-110' 
                    : ''
                } ${
                  darkMode 
                    ? 'bg-gradient-to-br from-purple-600 to-pink-600' 
                    : 'bg-gradient-to-br from-purple-200 to-pink-200'
                }`}>
                  <img src={activity.logo} alt={activity.organization} className="w-full h-full object-cover" />
                </div>

                <h3 className={`text-lg font-semibold mb-1 transition-colors duration-300 ${
                  darkMode ? 'text-white' : 'text-gray-800'
                }`}>
                  {activity.title}
                </h3>
                
                <p className={`text-sm mb-2 transition-colors duration-300 ${
                  darkMode ? 'text-purple-400' : 'text-purple-600'
                }`}>
                  {activity.organization}
                </p>

                <p className={`text-xs transition-colors duration-300 ${
                  darkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  {activity.period}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-4 border-t transition-all duration-300 ${
        darkMode 
          ? 'bg-gray-900 border-purple-500/20' 
          : 'bg-white border-pink-100'
      }`}>
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/m_affan0404"
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:scale-110 transition-transform duration-300 ${
                darkMode ? 'hover:opacity-70' : 'hover:opacity-70'
              }`}
              aria-label="Instagram"
            >
              <svg className={`w-6 h-6 ${darkMode ? 'stroke-gray-400' : 'stroke-gray-600'}`} fill="none" viewBox="0 0 24 24" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a
              href="https://github.com/affan0404"
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:scale-110 transition-transform duration-300 ${
                darkMode ? 'hover:opacity-70' : 'hover:opacity-70'
              }`}
              aria-label="GitHub"
            >
              <svg className={`w-6 h-6 ${darkMode ? 'stroke-gray-400' : 'stroke-gray-600'}`} fill="none" viewBox="0 0 24 24" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/mohammad-affan-shahid-26372a2b2/"
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:scale-110 transition-transform duration-300 ${
                darkMode ? 'hover:opacity-70' : 'hover:opacity-70'
              }`}
              aria-label="LinkedIn"
            >
              <svg className={`w-6 h-6 ${darkMode ? 'stroke-gray-400' : 'stroke-gray-600'}`} fill="none" viewBox="0 0 24 24" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>
          <p className={`text-sm transition-colors duration-300 ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            © 2026 Affan Shahid. All rights reserved.
          </p>
        </div>
      </footer>

      <style>{`
        * {
          scroll-behavior: smooth;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
        
        @keyframes writing {
          0% {
            opacity: 0;
            transform: translateX(-20px);
          }
          20% {
            opacity: 1;
            transform: translateX(0);
          }
          80% {
            opacity: 1;
            transform: translateX(0);
          }
          100% {
            opacity: 0;
            transform: translateX(20px);
          }
        }
        
        .animate-writing {
          animation: writing 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}


