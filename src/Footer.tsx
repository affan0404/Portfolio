interface FooterProps {
  darkMode: boolean;
}

export default function Footer({ darkMode }: FooterProps) {
  return (
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
  );
}


