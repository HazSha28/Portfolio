import { useEffect, useMemo, useState } from "react";

import {

  ArrowRight,

  ExternalLink,

  Globe,

  Github,

  Instagram,

  Linkedin,

  Mail,

  Menu,

  Moon,

  Phone,

  Sun,

  X,

  BarChart3,

} from "lucide-react";

import StatsAnalytics from "./components/StatsAnalytics.jsx";





const PROFILE = {

  name: "AYISHATHUL HAZEENA S",

  role: "B.Tech Computer Science And Business Systems | Full-Stack & Frontend Developer",

  location: "Coimbatore, Tamil Nadu, India",

  summary:

    "Student, KIT – Kalaignarkarunanidhi Institute of Technology. Computer Science and Business Systems student blending technology, creativity, and communication to craft meaningful digital solutions. Skilled in Java and problem-solving, with hands-on experience in AI-driven, user-focused projects. Known for impactful design, clear expression, and empathetic thinking. When passion meets purpose, effort turns into excellence— I give my best to what truly matters. ✨",

  email: "tohazsha@gmail.com",

  phone: "+91 8015594087",

  links: {

    github: "https://github.com/HazSha28",

    linkedin: "https://www.linkedin.com/in/hazeena-shahul-hameed-b01838292/",

    codolio: "https://codolio.com/profile/Hazeena%20S",

    instagram: "https://www.instagram.com/_.hazeenashahulhameed._/",

    resume: "https://drive.google.com/file/d/1Os8qFqcdKtsKANJ_GGc0ExmZELPgloiq/view?usp=drive_link",

  },

};



const NAV_ITEMS = [

  { id: "home", label: "Home" },

  { id: "about", label: "About" },

  { id: "projects", label: "Projects" },

  { id: "skills", label: "Skills" },

  { id: "stats", label: "Stats", icon: BarChart3 },

  { id: "resume", label: "Resume" },

  { id: "contact", label: "Contact" }

];



const PROJECTS = [

  {

    title: "Hadith Master",

    image: "/assets/cc32b272984929648f7e96fb7186f034.jpg",

    flipCard: true,

    description:

      "AI-powered Islamic text app for searching and exploring verified Hadith with advanced filtering and audio analysis.",

    tags: ["Next.js", "React", "TypeScript", "Tailwind", "Firebase"],

    live: "https://github.com/HazSha28/Hadith--Master",

    repo: "https://github.com/HazSha28/Hadith--Master",

  },

  {

    title: "Flavour Fusion",

    image: "/assets/9eed6b469461df52ce88408beaf6f5ea.jpg",

    flipCard: true,

    description:

      "Recipe website with journaling features, step-by-step tutorials, and accessibility-focused design for optimal user experience.",

    tags: ["HTML", "CSS", "Node.js", "Express", "UI/UX", "Firebase"],

    live: "https://flavour-fusion-blond.vercel.app/",

    repo: "https://github.com/HazSha28/Flavour-Fusion",

  },

  {

    title: "Expense Tracker",

    image: "/assets/4b52b3bdf0c6c521413a16432916859e.jpg",

    flipCard: true,

    description:

      "On-device expense tracking with elegant dashboard and budget planning tools. Features accessibility-focused UI design.",

    tags: ["Spring Boot", "Java", "Maven", "Spring Data JPA", "JavaFX/Swing"],

    live: "https://github.com/HazSha28/Expense-Tracker",

    repo: "https://github.com/HazSha28/Expense-Tracker",

  },

   {

    title: "Todo List",

    image: "/assets/06f77ea4683af86c14a7b36e9b5f639a.jpg",

    flipCard: true,

    description:

      "Local task management app with elegant dashboard and progress tracking. Built with accessibility-first design for optimal usability.",

    tags: ["Spring Boot", "Java", "Maven", "Spring Data JPA", "JavaFX/Swing"],

    live: "https://github.com/HazSha28/Expense-Tracker",

    repo: "https://github.com/HazSha28/Expense-Tracker",

  },

  {

    title: "VulnixAI",

    image: "/assets/vulnix.jpg",

    flipCard: true,

    description:

      "AI-powered DevSecOps platform for automated security scanning & patching. Connect → Scan → Analyze → Patch → Ship.",

    tags: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Groq AI", "Tailwind", "shadcn/ui"],

    live: "https://vulnixai-mxxo.vercel.app/",

    repo: "https://github.com/prakashb96/Vulnixai",

  },

  {

    title: "Sarah Jewellers Email Generator",

    image: "/assets/sarah.jpg",

    flipCard: true,

    description:

      "Smart email automation platform for a jewellery business — auto-generates personalized birthday, anniversary & festival campaigns with Excel import and admin dashboard.",

    tags: ["React.js", "Spring Boot", "Java", "MySQL", "JWT", "JavaMail", "Apache POI"],

    live: "https://github.com/HazSha28/Sarah-Email-Generator",

    repo: "https://github.com/HazSha28/Sarah-Email-Generator",

  },

];



const SKILL_GROUPS = [

  {

    title: "Languages",

    items: ["C", "Java", "Python", "SQL", "JavaScript", "TypeScript"],

  },

  {

    title: "Frontend",

    items: [

      "React.js",

      "Next.js",

      "Tailwind CSS",

      "Bootstrap",

      "HTML",

      "CSS",

      "Responsive UI",

      "Accessibility",

      "UI/UX",

    ],

  },

  {

    title: "Backend & Database",

    items: [

      "Node.js",

      "Express.js",

      "Spring Boot",

      "Firebase",

      "MongoDB",

      "REST APIs",

    ],

  },

  {

    title: "Tools",

    items: ["Git", "GitHub", "Maven", "Power BI"],

  },

];



const EDUCATION = {

  institute:

    "KIT - Kalaignarkarunanidhi Institute of Technology, Coimbatore, Tamil Nadu, India",

  duration: "2023 – 2027",

  degree: "B.Tech. Computer Science and Business Systems (Pre-Final Year)",

  cgpa: "9.16/10.0",

  coursework:

    "Data Science Foundation, Operating Systems, DBMS, Computer Networks, OOP in Java, DSA, UI/UX",

};



const INTERNSHIP = {

  company: "LearnLogicify Technologies LLP",

  location: "Coimbatore",

  duration: "Oct 2025 · 1 Month · Remote/Onsite",

  bullets: [

    "Developed responsive web interfaces using HTML, CSS, JavaScript, and Bootstrap, improving UI consistency and mobile performance.",

    "Built interactive components and reusable templates, reducing development time for internal project pages.",

  ],

  link: "https://drive.google.com/file/d/1EjD5z3CiGOfNnHyzvkCYEuzFkEAIdYyV/view",

};



const CERTIFICATIONS = [

  { title: "AWS - Cloud Computing", meta: "2026", link: "https://drive.google.com/file/d/1tc-Pw01a5FbpvjrdFh1DNBOaqoXedH7E/view" },

  {

    title: "NPTEL – C Programming, Computer Networks, DBMS",

    meta: "2024",

    link: "https://drive.google.com/drive/folders/1C3U9fn_QuwSO7TGXTEW63B_91p3D08VN",

  },

  {

    title: "Infosys – Python Foundations, Java Essentials, Web Development",

    meta: "2024",

    link: "https://drive.google.com/drive/folders/113UcDfY5gbCQf3N1j87h_9k7lXNfuPQ2",

  },

  { title: "Coursera – SQL, WordPress", meta: "2024", link: "https://drive.google.com/drive/folders/1FiqAZ2VZHZLaLiByc7XA4S-qiHmLeV61" },

  {

    title: "Cisco – Python Essentials, Cybersecurity",

    meta: "2025",

    link: "https://drive.google.com/drive/folders/1-EXmm4ZeSh_4QUD6gMCk7RURJ9MQe6Hg",

  },

];



const COMPETITIVE = [

  {

    platform: "LeetCode",

    link: "https://leetcode.com/u/kit27csbs11",

    rating: 1842,

    maxRating: 1842,

    solved: 276,

    globalRank: "50,030/833,176",

    contestRank: 6.18,

    attended: 10,

    acceptance: 84.22,

    beats: {

      easy: 89.4,

      medium: 88.6,

      hard: 84.15

    },

    problemsByDifficulty: {

      easy: 95,

      medium: 126,

      hard: 29

    },

    colorClass: "orange",

    gradientFrom: "from-orange-500",

    gradientTo: "to-orange-400",

  },

  {

    platform: "CodeChef",

    link: "https://www.codechef.com/users/hazeena28",

    rating: 1824,

    maxRating: 1824,

    solved: 447,

    contests: 103,

    globalRank: "4496",

    countryRank: "3753",

    stars: 3,

    altAccount: "https://www.codechef.com/users/kit27csbs11",

    colorClass: "purple",

    gradientFrom: "from-purple-500",

    gradientTo: "to-purple-400",

  },

  {

    platform: "GeeksforGeeks",

    link: "https://www.geeksforgeeks.org/profile/tohazzwgh?tab=activity",

    rating: 238,

    maxRating: 238,

    solved: 77,

    articles: 0,

    instituteRank: 68,

    monthlyScore: 30,

    colorClass: "green",

    gradientFrom: "from-green-500",

    gradientTo: "to-green-400",

  },

  {

    platform: "Codeforces",

    link: "https://codeforces.com/profile/Hazeena",

    rating: 1112,

    maxRating: 1202,

    solved: 30,

    extra: "200+ DSA problems",

    colorClass: "red",

    gradientFrom: "from-red-500",

    gradientTo: "to-red-400"

  },

];



const ACHIEVEMENTS = [

  {

    text: "Presented the research paper “AI-Integrated Full-Stack Web Application for Business Analytics, Process Automation, and Market Forecasting” at ICCCSS 2025 (Rathinam College of Engineering).",

  },

  { text: "Participated in 105+ contests across multiple competitive programming platforms." },

  {

    text: "Ranked Top 14 in a 24-hour hackathon 2025 organized by my college.",

  },

];



const VOLUNTEERING = [

  {

    text: "Public Speaking: Active participant in clubs like Toastmasters to build communication and leadership.",

  },

  {

    text: "Mentoring: Teaching competitive programming fundamentals to juniors through sessions and guided practice.",

  },

];



function cx(...parts) {

  return parts.filter(Boolean).join(" ");

}



function IconLink({ href, label, children, className, ...props }) {

  return (

    <a

      className={cx(

        "inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-100 transition hover:border-white/20 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70",

        className

      )}

      href={href}

      target={href?.startsWith("http") ? "_blank" : undefined}

      rel={href?.startsWith("http") ? "noreferrer" : undefined}

      aria-label={label}

      title={label}

      {...props}

    >

      {children}

    </a>

  );

}



function Pill({ children }) {

  return (

    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200">

      {children}

    </span>

  );

}



function SectionHeading({ eyebrow, title, subtitle }) {

  return (

    <div className="max-w-2xl">

      <div className="text-xs font-semibold uppercase tracking-widest text-cyan-200/80">

        {eyebrow}

      </div>

      <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">

        {title}

      </h2>

      {subtitle ? (

        <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">

          {subtitle}

        </p>

      ) : null}

    </div>

  );

}



export default function App() {

  const [mobileOpen, setMobileOpen] = useState(false);

  const [activeSection, setActiveSection] = useState("home");

  const [isDarkMode, setIsDarkMode] = useState(true);

  const [flippedCards, setFlippedCards] = useState({});



  const year = useMemo(() => new Date().getFullYear(), []);



  useEffect(() => {

    const onKeyDown = (e) => {

      if (e.key === "Escape") setMobileOpen(false);

    };



    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);

  }, []);



  useEffect(() => {

    if (isDarkMode) {

      document.documentElement.classList.add('dark');

      document.body.classList.add('bg-slate-950', 'text-slate-100');

      document.body.classList.remove('bg-slate-50', 'text-slate-900');

    } else {

      document.documentElement.classList.remove('dark');

      document.body.classList.add('bg-slate-50', 'text-slate-900');

      document.body.classList.remove('bg-slate-950', 'text-slate-100');

    }

  }, [isDarkMode]);



  useEffect(() => {

    const mq = window.matchMedia("(min-width: 768px)");

    const onChange = (e) => {

      if (e.matches) setMobileOpen(false);

    };



    onChange(mq);



    if (mq.addEventListener) mq.addEventListener("change", onChange);

    else mq.addListener(onChange);



    return () => {

      if (mq.removeEventListener) mq.removeEventListener("change", onChange);

      else mq.removeListener(onChange);

    };

  }, []);



  useEffect(() => {

    if (!mobileOpen) return;



    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";



    return () => {

      document.body.style.overflow = originalOverflow;

    };

  }, [mobileOpen]);



  useEffect(() => {

    const sectionEls = NAV_ITEMS.map((item) =>

      document.getElementById(item.id)

    ).filter(Boolean);



    if (!sectionEls.length) return;



    const observer = new IntersectionObserver(

      (entries) => {

        for (const entry of entries) {

          if (entry.isIntersecting) {

            setActiveSection(entry.target.id);

          }

        }

      },

      {

        root: null,

        rootMargin: "-40% 0px -55% 0px",

        threshold: 0.01,

      }

    );



    sectionEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();

  }, []);



  const navLinkClass = (id) =>

    cx(

      "rounded-xl px-3 py-2 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 transition-colors duration-300",

      activeSection === id

        ? isDarkMode ? "bg-white/10 text-white" : "bg-slate-900/10 text-slate-900"

        : isDarkMode ? "text-slate-300 hover:bg-white/5 hover:text-white" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"

    );



  const toggleFlipCard = (title) => {

    setFlippedCards(prev => ({

      ...prev,

      [title]: !prev[title]

    }));

  };



  return (

    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>

      <a

        href="#main"

        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-xl focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate-950 focus:shadow-glow focus:outline-none"

        onClick={() => document.getElementById("main")?.focus()}

      >

        Skip to content

      </a>



      <header className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur supports-[backdrop-filter]: transition-colors duration-300 ${isDarkMode ? 'border-white/10 bg-slate-950/60 supports-[backdrop-filter]:bg-slate-950/40' : 'border-slate-200/10 bg-white/60 supports-[backdrop-filter]:bg-white/40'}`}>

        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">

          <a

            href="#home"

            className={`group inline-flex items-center gap-2 rounded-xl px-2 py-2 font-semibold tracking-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}

            onClick={() => setMobileOpen(false)}

          >

            <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-cyan-300 to-indigo-300 shadow" />

            <span className="text-sm sm:text-base animate-gradient bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-[length:200%_100%] bg-clip-text text-transparent">{PROFILE.name}</span>

          </a>



          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">

            {NAV_ITEMS.map((item) => (

              <a

                key={item.id}

                href={`#${item.id}`}

                className={navLinkClass(item.id)}

                aria-current={activeSection === item.id ? "page" : undefined}

              >

                {item.icon && <item.icon className="h-4 w-4 mr-2" />}

                {item.label}

              </a>

            ))}

          </nav>



          <div className="hidden items-center gap-2 md:flex">

            <button

              type="button"

              onClick={() => setIsDarkMode(!isDarkMode)}

              className={`inline-flex items-center justify-center rounded-xl border bg-white/5 p-2 transition hover:border-white/20 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 transition-colors duration-300 ${isDarkMode ? 'border-white/10 text-white' : 'border-slate-300/10 text-slate-900 hover:border-slate-300/20 hover:bg-slate-100'}`}

              aria-label="Toggle theme"

            >

              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}

            </button>

            <IconLink href={PROFILE.links.github} label="GitHub">

              <Github className="h-5 w-5" />

            </IconLink>

            <IconLink href={PROFILE.links.linkedin} label="LinkedIn">

              <Linkedin className="h-5 w-5" />

            </IconLink>

            <IconLink href={PROFILE.links.codolio} label="Codolio">

              <Globe className="h-5 w-5" />

            </IconLink>

            <IconLink href={`mailto:${PROFILE.email}`} label="Email">

              <Mail className="h-5 w-5" />

            </IconLink>

            <IconLink href={`tel:${PROFILE.phone.replace(/\s/g, "")}`} label="Phone">

              <Phone className="h-5 w-5" />

            </IconLink>

          </div>



          <button

            type="button"

            className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-white transition hover:border-white/20 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 md:hidden"

            onClick={() => setMobileOpen((v) => !v)}

            aria-label={mobileOpen ? "Close menu" : "Open menu"}

            aria-expanded={mobileOpen}

            aria-controls="mobile-menu"

          >

            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}

          </button>

        </div>



        <div

          id="mobile-menu"

          aria-hidden={!mobileOpen}

          className={cx(

            "md:hidden",

            "overflow-hidden border-t border-white/10 bg-slate-950/80 backdrop-blur",

            "transition-[max-height,opacity] duration-200",

            mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"

          )}

        >

          <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6 lg:px-8">

            <div className="flex flex-col gap-1">

              {NAV_ITEMS.map((item) => (

                <a

                  key={item.id}

                  href={`#${item.id}`}

                  className={navLinkClass(item.id)}

                  aria-current={activeSection === item.id ? "page" : undefined}

                  tabIndex={mobileOpen ? 0 : -1}

                  onClick={() => setMobileOpen(false)}

                >

                  {item.icon && <item.icon className="h-4 w-4 mr-2" />}

                  {item.label}

                </a>

              ))}

            </div>



            <div className="mt-3 flex items-center gap-2">

              <IconLink

                href={PROFILE.links.github}

                label="GitHub"

                tabIndex={mobileOpen ? 0 : -1}

              >

                <Github className="h-5 w-5" />

              </IconLink>

              <IconLink

                href={PROFILE.links.linkedin}

                label="LinkedIn"

                tabIndex={mobileOpen ? 0 : -1}

              >

                <Linkedin className="h-5 w-5" />

              </IconLink>

              <IconLink

                href={PROFILE.links.codolio}

                label="Codolio"

                tabIndex={mobileOpen ? 0 : -1}

              >

                <Globe className="h-5 w-5" />

              </IconLink>

              <IconLink

                href={PROFILE.links.instagram}

                label="Instagram"

                tabIndex={mobileOpen ? 0 : -1}

              >

                <Instagram className="h-5 w-5" />

              </IconLink>

              <IconLink

                href={`mailto:${PROFILE.email}`}

                label="Email"

                tabIndex={mobileOpen ? 0 : -1}

              >

                <Mail className="h-5 w-5" />

              </IconLink>

              <IconLink

                href={`tel:${PROFILE.phone.replace(/\s/g, "")}`}

                label="Phone"

                tabIndex={mobileOpen ? 0 : -1}

              >

                <Phone className="h-5 w-5" />

              </IconLink>

            </div>

          </div>

        </div>

      </header>



      {mobileOpen ? (

        <button

          type="button"

          className="fixed inset-0 top-16 z-40 bg-slate-950/60 md:hidden"

          aria-label="Close menu"

          onClick={() => setMobileOpen(false)}

        />

      ) : null}



      <main id="main" tabIndex={-1}>

        <section

          id="home"

          className="scroll-mt-24 border-b border-white/10 relative overflow-hidden"

        >

          {/* Enhanced animated background */}

          <>

            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950">

              <div className="absolute inset-0 opacity-30">

                <div className="absolute inset-0 bg-grid-pattern"></div>

              </div>

            </div>

            <div className="absolute inset-0 bg-animated-gradient opacity-10"></div>

          </>

          

          <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-16 px-4 pb-16 pt-28 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8 lg:pb-24 lg:pt-32 relative z-10">

            <div className="relative order-2 lg:order-2 flex justify-center lg:justify-end lg:pr-20 lg:translate-x-8">

              <div className="relative w-[400px] h-[400px] group">

                {/* Enhanced bead background */}

                <div className="absolute inset-0 flex items-center justify-center">

                  <div className="relative w-full h-full">

                    {[...Array(16)].map((_, i) => {

                      const angle = (i * 22.5) * (Math.PI / 180);

                      const distance = 180;

                      const size = 12 + Math.random() * 12;

                      return (

                        <div 

                          key={i}

                          className="absolute rounded-full bg-gradient-to-br from-cyan-400/70 to-purple-500/70 shadow-lg shadow-cyan-400/30 animate-float"

                          style={{

                            width: `${size}px`,

                            height: `${size}px`,

                            left: `calc(50% - ${size/2}px + ${Math.cos(angle) * distance}px)`,

                            top: `calc(50% - ${size/2}px + ${Math.sin(angle) * distance}px)`,

                            animationDelay: `${i * 0.15}s`,

                            animationDuration: `${3 + Math.random() * 4}s`

                          }}

                        />

                      );

                    })}

                  </div>

                </div>

                

                {/* Enhanced profile photo */}

                <div className="relative w-full h-full flex items-center justify-center">

                  <div className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-white/40 shadow-2xl group-hover:shadow-xl group-hover:shadow-cyan-400/20 transition-all duration-500 animate-bounce-slow transform group-hover:scale-102">

                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>

                    <img 

                      src="/assets/hasee photo.jpg" 

                      alt={PROFILE.name}

                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"

                    />

                    <div className="absolute inset-0 rounded-full border-2 border-white/60 group-hover:border-cyan-300/60 transition-all duration-500"></div>

                  </div>

                </div>

                

                {/* Enhanced glow effect */}

                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/15 to-purple-500/15 opacity-0 group-hover:opacity-50 blur-2xl transition-all duration-1000"></div>

              </div>

            </div>

            

            <div className="order-1 lg:order-1 lg:pl-32 space-y-8">

              {/* Enhanced availability badge */}

              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-6 py-3 text-sm font-medium text-cyan-200 group transition-all duration-300 hover:border-cyan-500/50 hover:bg-cyan-500/20 hover:shadow-lg hover:shadow-cyan-400/30">

                <span className="h-2 w-2 rounded-full bg-cyan-400 group-hover:animate-pulse"></span>

                Available for freelance & full-time opportunities

              </div>



              {/* Enhanced name */}

              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-justify">

                Hi,I'm{" "}

                <span className="inline-block animate-gradient bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-[length:200%_100%] bg-clip-text text-transparent group-hover:animate-pulse text-bright">

                  AYISHATHUL HAZEENA S.

                </span>

              </h1>



              {/* Enhanced role */}

              <p className="text-lg leading-relaxed text-slate-200 sm:text-xl text-clear group transition-colors duration-300 group-hover:text-cyan-100">

                B.Tech Computer Science & Business Systems | Full-Stack Developer & UI/UX Enthusiast

              </p>



              {/* Enhanced introduction */}

              <div className="max-w-3xl">

                <p className="text-base leading-8 text-justify text-slate-300">

                  Student, KIT – Kalaignarkarunanidhi Institute of Technology.

                  Computer Science and Business Systems student with a passion for crafting

                  meaningful digital solutions. Skilled in Java and problem-solving,

                  experienced in AI-driven, user-focused projects. When passion meets purpose, effort turns into excellence - I give my best to what truly matters.

                </p>

              </div>



              {/* Enhanced action buttons */}

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center pt-8">

                <a

                  href="#projects"

                  className="inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 text-base font-bold text-white shadow-glow-lg transition-all duration-300 hover:from-cyan-600 hover:to-blue-600 hover:shadow-glow-cyan hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"

                >

                  View Projects

                  <ArrowRight className="h-5 w-5" />

                </a>



                <a

                  href="#contact"

                  className="inline-flex items-center justify-center gap-3 rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-8 py-4 text-base font-bold text-cyan-100 transition-all duration-300 hover:border-cyan-500/50 hover:bg-cyan-500/20 hover:text-white hover:shadow-glow-cyan hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"

                >

                  Contact Me

                </a>



                <a

                  href={PROFILE.links.resume}

                  className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/10 px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:border-white/30 hover:bg-white/20 hover:shadow-glow-lg hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"

                  target="_blank"

                  rel="noopener noreferrer"

                >

                  Resume

                  <ExternalLink className="h-5 w-5" />

                </a>

              </div>

            </div>

          </div>

        </section>



        <section

          id="about"

          className="scroll-mt-24 border-b border-white/10 relative overflow-hidden"

        >

          {/* Animated Background */}

          <>

            <div className="absolute inset-0 bg-gradient-to-br from-purple-950/20 via-cyan-950/10 to-slate-950"></div>

            <div className="absolute inset-0 opacity-30">

              <div className="absolute inset-0 bg-grid-pattern"></div>

            </div>

          </>

          

          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20 relative z-10">

            <SectionHeading

              eyebrow="About"

              title="A bit about me"

              subtitle="Pre-final year CSBS student with a focus on responsive UI, accessibility, and strong DSA fundamentals."

            />



            <div className="mt-10 grid gap-8 lg:grid-cols-12">

              <div className="lg:col-span-7">

                <div className="space-y-6 text-sm leading-relaxed text-slate-300 sm:text-base">

                  <div className="group rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 transition-all duration-500 hover:border-cyan-500/30 hover:bg-gradient-to-br hover:from-cyan-500/10 hover:to-purple-500/10 hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-[1.02] relative overflow-hidden">

                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <h4 className="text-base font-semibold text-white mb-3 transition-colors duration-300 group-hover:text-cyan-200 relative z-10">

                      <span className="inline-block mr-2 text-2xl animate-bounce">🚀</span>

                      My Journey

                    </h4>

                    <p className="transition-colors duration-300 group-hover:text-slate-200 relative z-10">

                      I'm a passionate pre-final year Computer Science student at KIT, Coimbatore, with a CGPA of 9.16/10. My journey into tech began with curiosity about how things work and evolved into a deep love for creating elegant, user-centric solutions that make a real difference.

                    </p>

                  </div>



                  <div className="group rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 transition-all duration-500 hover:border-cyan-500/30 hover:bg-gradient-to-br hover:from-cyan-500/10 hover:to-purple-500/10 hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-[1.02] relative overflow-hidden">

                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <h4 className="text-base font-semibold text-white mb-3 transition-colors duration-300 group-hover:text-cyan-200 relative z-10">

                      <span className="inline-block mr-2 text-2xl animate-pulse">💻</span>

                      Technical Expertise

                    </h4>

                    <p className="transition-colors duration-300 group-hover:text-slate-200 relative z-10">

                      I specialize in building full-stack applications with React, Next.js, and Node.js. My expertise spans from crafting pixel-perfect UIs with Tailwind CSS to designing robust backend architectures with Spring Boot and Firebase. I'm particularly passionate about accessibility and creating inclusive digital experiences.

                    </p>

                  </div>



                  <div className="group rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 transition-all duration-500 hover:border-cyan-500/30 hover:bg-gradient-to-br hover:from-cyan-500/10 hover:to-purple-500/10 hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-[1.02] relative overflow-hidden">

                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <h4 className="text-base font-semibold text-white mb-3 transition-colors duration-300 group-hover:text-cyan-200 relative z-10">

                      <span className="inline-block mr-2 text-2xl">🧠</span>

                      Problem Solving

                    </h4>

                    <p className="transition-colors duration-300 group-hover:text-slate-200 relative z-10">

                      Beyond development, I'm passionate about competitive programming and problem-solving. I actively participate in coding contests and have solved numerous problems across various platforms. This experience sharpens my analytical thinking and helps me approach complex challenges systematically, enhancing my ability to develop efficient and optimized solutions.

                    </p>

                  </div>



                  <div className="group rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 transition-all duration-500 hover:border-cyan-500/30 hover:bg-gradient-to-br hover:from-cyan-500/10 hover:to-purple-500/10 hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-[1.02] relative overflow-hidden">

                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <h4 className="text-base font-semibold text-white mb-3 transition-colors duration-300 group-hover:text-cyan-200 relative z-10">

                      <span className="inline-block mr-2 text-2xl animate-pulse">🌱</span>

                      Growth & Learning

                    </h4>

                    <p className="transition-colors duration-300 group-hover:text-slate-200 relative z-10">

                      I believe in continuous learning and have earned certifications from AWS, Cisco, Infosys, and NPTEL. I actively mentor juniors in competitive programming and have presented research on AI-integrated web applications at ICCCSS 2025. I'm always eager to learn new technologies and tackle challenging projects.

                    </p>

                  </div>

                </div>

              </div>



              <div className="lg:col-span-5">

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">

                  <div className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-5 shadow-glow transition-all duration-500 hover:border-cyan-500/30 hover:bg-gradient-to-br hover:from-cyan-500/10 hover:to-purple-500/10 hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-[1.02] relative overflow-hidden">

                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="text-sm font-semibold text-white group-hover:text-cyan-200 transition-colors duration-300 relative z-10">

                      <span className="inline-block mr-2 text-xl">🎓</span>

                      Education

                    </div>

                    <div className="mt-3 text-sm text-slate-200 group-hover:text-cyan-100 transition-colors duration-300 relative z-10">

                      {EDUCATION.degree}

                    </div>

                    <div className="mt-2 text-sm text-slate-300 group-hover:text-cyan-200 transition-colors duration-300 relative z-10">

                      {EDUCATION.institute}

                    </div>

                    <div className="mt-3 flex flex-wrap gap-2 relative z-10">

                      <span className="inline-flex items-center rounded-full border border-white/10 bg-gradient-to-r from-slate-950/30 to-slate-950/20 px-3 py-1 text-xs font-medium text-slate-200 transition-all duration-300 hover:border-cyan-300/50 hover:bg-gradient-to-r hover:from-cyan-950/30 hover:to-purple-950/30 hover:text-cyan-200">

                        {EDUCATION.duration}

                      </span>

                      <span className="inline-flex items-center rounded-full border border-white/10 bg-gradient-to-r from-slate-950/30 to-slate-950/20 px-3 py-1 text-xs font-medium text-slate-200 transition-all duration-300 hover:border-cyan-300/50 hover:bg-gradient-to-r hover:from-cyan-950/30 hover:to-purple-950/30 hover:text-cyan-200">

                        CGPA: {EDUCATION.cgpa}

                      </span>

                    </div>

                  </div>



                  <div className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-5 shadow-glow transition-all duration-500 hover:border-cyan-500/30 hover:bg-gradient-to-br hover:from-cyan-500/10 hover:to-purple-500/10 hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-[1.02] relative overflow-hidden">

                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="text-sm font-semibold text-white group-hover:text-cyan-200 transition-colors duration-300 relative z-10">

                      <span className="inline-block mr-2 text-xl">📚</span>

                      Coursework

                    </div>

                    <p className="mt-3 text-sm leading-relaxed text-slate-300 group-hover:text-cyan-200 transition-colors duration-300 relative z-10">

                      {EDUCATION.coursework}

                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>



        <section

          id="projects"

          className="scroll-mt-24 border-b border-white/10 relative overflow-hidden"

        >

          {/* Attractive animated background */}

          <>

            <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 via-purple-800/10 to-slate-800/50">

              <div className="absolute inset-0 opacity-40">

                <div className="absolute inset-0 bg-grid-pattern"></div>

              </div>

            </div>

            <div className="absolute inset-0 bg-animated-gradient opacity-20"></div>

          </>

          

          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20 relative z-10">

            <SectionHeading

              eyebrow="Projects"

              title="Selected work"

              subtitle="A responsive card layout showcasing AI-driven projects with flip interactions, featuring Hadith Master, Flavour Fusion, Expense Tracker, Todo List, VulnixAI, and Sarah Jewellers applications."

            />



            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

              {PROJECTS.map((project) => (

                <div

                  key={project.title}

                  className="relative h-96 perspective-1000"

                >

                  <div

                    className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${

                      flippedCards[project.title] ? 'rotate-y-180' : ''

                    }`}

                    onClick={() => toggleFlipCard(project.title)}

                  >

                    {/* Front of card */}

                    <div className="absolute inset-0 backface-hidden">

                      <article className="group relative overflow-hidden rounded-2xl border border-emerald-500/10 bg-gradient-to-br from-emerald-950/20 via-teal-950/15 to-slate-950/40 p-5 shadow-glow h-full transition-all duration-500 hover:border-emerald-500/25 hover:bg-gradient-to-br hover:from-emerald-950/25 hover:via-teal-950/20 hover:to-slate-950/45 hover:shadow-xl hover:shadow-emerald-500/30 hover:-translate-y-4">

                        <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br from-emerald-400/20 to-teal-400/20 blur-2xl transition-all duration-700 group-hover:from-emerald-400/40 group-hover:to-teal-400/40 group-hover:scale-110" />

                        <div className="absolute -left-16 -bottom-16 h-32 w-32 rounded-full bg-gradient-to-br from-cyan-400/15 to-emerald-400/15 blur-xl transition-all duration-700 group-hover:from-cyan-400/25 group-hover:to-emerald-400/25 group-hover:scale-110" />



                        <div className="relative h-full flex flex-col">

                          {project.image && (

                            <div className="mb-4 -mx-5 -mt-5 overflow-hidden rounded-t-2xl">

                              <img 

                                src={project.image} 

                                alt={project.title}

                                className="w-full h-44 object-cover transition-transform duration-700 group-hover:scale-110"

                              />

                              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                            </div>

                          )}

                          

                          <div className={project.image ? "px-0" : ""}>

                            <h3 className="text-base font-semibold text-white transition-all duration-500 group-hover:text-emerald-300 group-hover:translate-y-1">

                              {project.title}

                            </h3>

                            <p className="mt-2 text-sm leading-relaxed text-slate-300 transition-all duration-500 group-hover:text-slate-100">

                              {project.description}

                            </p>

                          </div>



                          <div className="mt-auto">

                            <div className="flex flex-wrap gap-2">

                              {project.tags.map((tag) => (

                                <span

                                  key={tag}

                                  className="inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-950/30 px-3 py-1 text-xs font-medium text-emerald-300 transition-all duration-500 group-hover:border-emerald-500/30 group-hover:bg-emerald-950/40 group-hover:text-emerald-200 hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/50"

                                >

                                  {tag}

                                </span>

                              ))}

                            </div>

                            

                            <div className="mt-3 flex items-center justify-center">

                              <div className="text-xs text-slate-400 flex items-center gap-1 animate-pulse">

                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">

                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4 4m0 0l-4 4" />

                                </svg>

                                <span>Click to flip</span>

                              </div>

                            </div>

                          </div>

                        </div>

                      </article>

                    </div>



                    {/* Back of card */}

                    <div className="absolute inset-0 rotate-y-180 backface-hidden">

                      <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-5 shadow-glow h-full transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:shadow-glow-lg hover:shadow-cyan-400/20">

                        <div className="relative h-full flex flex-col">

                          <h3 className="text-base font-semibold text-white transition-colors duration-300 group-hover:text-cyan-200">

                            {project.title}

                          </h3>

                          

                          <div className="mt-4 space-y-3">

                            <div>

                              <h4 className="text-sm font-semibold text-cyan-200">Key Features</h4>

                              <ul className="mt-2 text-sm text-slate-300 space-y-1">

                                {project.title === "Hadith Master" && (

                                  <>

                                    <li>• AI-powered Hadith search & filtering</li>

                                    <li>• Audio recording & pronunciation analysis</li>

                                    <li>• Verified Islamic text database</li>

                                    <li>• Simple, user-friendly interface</li>

                                  </>

                                )}

                                {project.title === "Flavour Fusion" && (

                                  <>

                                    <li>• Recipe discovery & sharing platform</li>

                                    <li>• Step-by-step cooking tutorials</li>

                                    <li>• Personal & public journaling</li>

                                    <li>• Accessibility-focused UI design</li>

                                  </>

                                )}

                                {project.title === "Expense Tracker" && (

                                  <>

                                    <li>• On-device expense tracking</li>

                                    <li>• Elegant minimalist dashboard</li>

                                    <li>• Budget planning tools</li>

                                    <li>• Accessibility-focused UI</li>

                                  </>

                                )}

                                {project.title === "Todo List" && (

                                  <>

                                    <li>• Local task management system</li>

                                    <li>• Progress visualization & analytics</li>

                                    <li>• Accessibility-first design</li>

                                    <li>• Keyboard navigation support</li>

                                  </>

                                )}

                                {project.title === "VulnixAI" && (

                                  <>

                                    <li>• GitHub repo & website vulnerability scanning</li>

                                    <li>• AI-based auto patch generation (Groq AI)</li>

                                    <li>• One-click GitHub Pull Request creation</li>

                                    <li>• Built-in Monaco Editor for fix review</li>

                                    <li>• Pen testing, load testing & monitoring</li>

                                  </>

                                )}

                                {project.title === "Sarah Jewellers Email Generator" && (

                                  <>

                                    <li>• Auto-generate birthday & anniversary drafts</li>

                                    <li>• Festival broadcast to all customers</li>

                                    <li>• Edit emails + attach images/GIFs</li>

                                    <li>• Excel import for customer data</li>

                                    <li>• Dashboard with campaign stats</li>

                                  </>

                                )}

                                {project.title === "Sarah Jewellers Email Generator" && (

                                  <>

                                    <li>• Auto-generate birthday & anniversary drafts</li>

                                    <li>• Festival broadcast to all customers</li>

                                    <li>• Edit emails + attach images/GIFs</li>

                                    <li>• Excel import for customer data</li>

                                    <li>• Dashboard with campaign stats</li>

                                  </>

                                )}

                              </ul>

                            </div>



                            <div>

                              <h4 className="text-sm font-semibold text-cyan-200">Technologies</h4>

                              <div className="mt-2 flex flex-wrap gap-2">

                                {project.tags.map((tag) => (

                                  <span

                                    key={tag}

                                    className="inline-flex items-center rounded-full border border-white/10 bg-slate-950/30 px-3 py-1 text-xs font-medium text-slate-200 transition-all duration-300 group-hover:border-white/20 group-hover:bg-slate-950/50 group-hover:text-cyan-200 hover:scale-105"

                                  >

                                    {tag}

                                  </span>

                                ))}

                              </div>

                            </div>

                          </div>



                          <div className="mt-auto">

                            <div className="flex gap-3">

                              {project.live && (

                                <a

                                  href={project.live}

                                  target="_blank"

                                  rel="noopener noreferrer"

                                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-slate-800 px-3 py-2 text-xs font-medium text-white transition-all duration-300 hover:border-cyan-300/50 hover:bg-cyan-950/50 hover:text-cyan-200"

                                >

                                  Live Demo

                                  <ExternalLink className="h-3 w-3" />

                                </a>

                              )}

                              {project.repo && (

                                <a

                                  href={project.repo}

                                  target="_blank"

                                  rel="noopener noreferrer"

                                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-slate-800 px-3 py-2 text-xs font-medium text-white transition-all duration-300 hover:border-cyan-300/50 hover:bg-cyan-950/50 hover:text-cyan-200"

                                >

                                  Source Code

                                  <ExternalLink className="h-3 w-3" />

                                </a>

                              )}

                            </div>

                          </div>

                        </div>

                      </article>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </section>



        {/* Minimal Stats Dashboard Section */}

        <section id="stats" className="scroll-mt-24">

          <StatsAnalytics competitiveStats={COMPETITIVE} />

        </section>



        <section

          id="skills"

          className="scroll-mt-24 border-b border-white/10"

        >

          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">

            <SectionHeading

              eyebrow="Skills"

              title="Tech I use"

              subtitle="Grouped chips that wrap naturally on small screens and stay tidy on large screens."

            />



            <div className="mt-10 grid gap-6 md:grid-cols-3">

              {SKILL_GROUPS.map((group) => (

                <div

                  key={group.title}

                  className="group rounded-2xl border border-white/10 bg-white/5 p-5 shadow-glow transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 hover:shadow-glow-lg hover:shadow-cyan-400/20"

                >

                  <div className="text-sm font-semibold text-white transition-colors duration-300 group-hover:text-cyan-200">

                    {group.title}

                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">

                    {group.items.map((item) => (

                      <span

                        key={item}

                        className="inline-flex items-center rounded-full border border-white/10 bg-slate-950/30 px-3 py-1 text-xs font-medium text-slate-200 transition-all duration-300 group-hover:border-white/20 group-hover:bg-slate-950/50 group-hover:text-cyan-200 hover:scale-105"

                      >

                        {item}

                      </span>

                    ))}

                  </div>

                </div>

              ))}

            </div>

          </div>

        </section>



        <section id="resume" className="scroll-mt-24 border-b border-white/10 relative overflow-hidden">

          {/* Enhanced background for resume section */}

          <>

            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950">

              <div className="absolute inset-0 opacity-30">

                <div className="absolute inset-0 bg-grid-pattern"></div>

              </div>

            </div>

            <div className="absolute inset-0 bg-animated-gradient opacity-15"></div>

          </>

          

          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20 relative z-10">

            <SectionHeading

              eyebrow="Resume"

              title="Education, experience & accomplishments"

              subtitle="A comprehensive overview of my professional journey with interactive elements and quick access links."

            />



            <div className="mt-10 grid gap-8 lg:grid-cols-12">

              <div className="lg:col-span-6">

                <div className="group relative overflow-hidden rounded-2xl border border-indigo-500/20 bg-gradient-to-br from-indigo-950/30 via-blue-950/20 to-slate-950/50 p-6 shadow-glow-lg transition-all duration-500 hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-500/30 hover:-translate-y-3 hover:scale-[1.02]">

                  <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br from-indigo-400/30 to-blue-400/30 blur-2xl transition-all duration-700 group-hover:from-indigo-400/50 group-hover:to-blue-400/50 group-hover:scale-110"></div>

                  <div className="absolute -left-12 -bottom-12 h-24 w-24 rounded-full bg-gradient-to-br from-cyan-400/20 to-indigo-400/20 blur-xl transition-all duration-700 group-hover:from-cyan-400/40 group-hover:to-indigo-400/40 group-hover:scale-110"></div>

                  

                  <div className="relative z-10">

                    <div className="text-sm font-bold text-white group-hover:text-indigo-200 transition-colors duration-500 group-hover:translate-y-1">

                      <span className="inline-block mr-2 text-xl animate-pulse">💼</span>

                      Internship

                    </div>

                    <div className="mt-3 text-sm text-slate-200 group-hover:text-indigo-100 transition-colors duration-500">

                      {INTERNSHIP.company} · {INTERNSHIP.location}

                    </div>

                    <div className="mt-1 text-sm text-slate-400 group-hover:text-indigo-200 transition-colors duration-500">

                      {INTERNSHIP.duration}

                    </div>



                    <ul className="mt-4 space-y-3 text-sm text-slate-300">

                      {INTERNSHIP.bullets.map((b) => (

                        <li key={b} className="group-hover:text-indigo-100 transition-all duration-500 group-hover:translate-x-2 transform flex items-start">

                          <span className="inline-block mr-2 text-indigo-400 group-hover:text-indigo-300">•</span>

                          {b}

                        </li>

                      ))}

                    </ul>



                    <a

                      href={INTERNSHIP.link}

                      className="mt-6 inline-flex items-center gap-3 rounded-xl border border-indigo-500/30 bg-indigo-950/40 px-4 py-2 text-sm font-bold text-indigo-200 transition-all duration-500 hover:border-indigo-500/50 hover:bg-indigo-950/60 hover:text-indigo-100 hover:shadow-lg hover:shadow-indigo-500/50 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/70"

                      target={INTERNSHIP.link?.startsWith("http") ? "_blank" : undefined}

                      rel={INTERNSHIP.link?.startsWith("http") ? "noreferrer" : undefined}

                    >

                      <span className="group-hover:animate-pulse">View proof / link</span>

                      <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-500" />

                    </a>

                  </div>

                </div>



                <div className="mt-8 relative overflow-hidden rounded-2xl border border-indigo-500/20 bg-gradient-to-br from-indigo-950/30 via-blue-950/20 to-slate-950/50 p-6 shadow-glow-lg transition-all duration-500 hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-500/30 hover:-translate-y-3 hover:scale-[1.02]">

                  <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br from-indigo-400/30 to-blue-400/30 blur-2xl transition-all duration-700 group-hover:from-indigo-400/50 group-hover:to-blue-400/50 group-hover:scale-110"></div>

                  <div className="absolute -left-12 -bottom-12 h-24 w-24 rounded-full bg-gradient-to-br from-cyan-400/20 to-indigo-400/20 blur-xl transition-all duration-700 group-hover:from-cyan-400/40 group-hover:to-indigo-400/40 group-hover:scale-110"></div>

                  

                  <div className="relative z-10">

                    <div className="text-sm font-bold text-white transition-colors duration-500 group-hover:text-indigo-200 group-hover:translate-y-1">

                      <span className="inline-block mr-2 text-xl animate-pulse">🎓</span>

                      Certifications & Courses

                    </div>



                    <div className="mt-4 space-y-3">

                      {CERTIFICATIONS.map((c) => (

                        <div

                          key={c.title}

                          className="group relative overflow-hidden rounded-xl border border-indigo-500/20 bg-indigo-950/30 p-4 transition-all duration-500 hover:border-indigo-500/40 hover:bg-indigo-950/50 hover:shadow-lg hover:shadow-indigo-500/30 hover:scale-[1.02]"

                        >

                          <div className="text-sm font-semibold text-white transition-colors duration-500 group-hover:text-indigo-200">

                            {c.title}

                          </div>

                        <div className="mt-1 flex items-center justify-between gap-3 text-sm text-slate-300">

                          <div className="transition-colors duration-300 group-hover:text-slate-200">{c.meta}</div>

                          <a

                            href={c.link}

                            className="inline-flex items-center gap-2 font-semibold text-slate-100 transition-all duration-300 hover:text-cyan-200 hover:translate-x-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"

                            target={c.link?.startsWith("http") ? "_blank" : undefined}

                            rel={c.link?.startsWith("http") ? "noreferrer" : undefined}

                          >

                            Link

                            <ExternalLink className="h-4 w-4" />

                          </a>

                        </div>

                        </div>

                    ))}

                  </div>

                </div>

              </div>

            </div>



              <div className="lg:col-span-6">

                <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-glow transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 hover:shadow-glow-lg hover:shadow-cyan-400/20">

                  <div className="text-sm font-semibold text-white transition-colors duration-300 group-hover:text-cyan-200">

                    Achievements

                  </div>

                  <ul className="mt-4 space-y-2 text-sm text-slate-300">

                    {ACHIEVEMENTS.map((achievement, index) => (

                      <li 

                        key={index}

                        className="transition-all duration-300 hover:text-cyan-200 hover:translate-x-1"

                      >

                        {achievement.text}

                      </li>

                    ))}

                  </ul>

                </div>



                <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-glow transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 hover:shadow-glow-lg hover:shadow-cyan-400/20">

                  <div className="text-sm font-semibold text-white transition-colors duration-300 group-hover:text-cyan-200">Volunteering</div>

                  <ul className="mt-4 space-y-2 text-sm text-slate-300">

                    {VOLUNTEERING.map((v, index) => (

                      <li 

                        key={index}

                        className="transition-all duration-300 hover:text-cyan-200 hover:translate-x-1"

                      >

                        {v.text}

                      </li>

                    ))}

                  </ul>

                </div>

              </div>

            </div>

          </div>

        </section>





        <section id="contact" className="scroll-mt-24">

          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">

            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">

              <div className="lg:col-span-7">

                <SectionHeading

                  eyebrow="Contact"

                  title="Let’s build something"

                  subtitle="If you have a role, a project idea, or just want to connect, send me a message."

                />



                <div className="mt-7 flex flex-col gap-3 sm:flex-row">

                  <a

                    href={`mailto:${PROFILE.email}`}

                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 shadow-glow transition hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"

                  >

                    Email Me

                    <Mail className="h-4 w-4" />

                  </a>



                  <a

                    href={PROFILE.links.linkedin}

                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"

                    target={PROFILE.links.linkedin?.startsWith("http") ? "_blank" : undefined}

                    rel={PROFILE.links.linkedin?.startsWith("http") ? "noreferrer" : undefined}

                  >

                    LinkedIn

                    <ExternalLink className="h-4 w-4" />

                  </a>

                </div>

              </div>



              <div className="lg:col-span-5">

                <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 shadow-glow">

                  <div className="text-sm font-semibold text-white">

                    Prefer socials?

                  </div>

                  <p className="mt-2 text-sm leading-relaxed text-slate-300">

                    You can find my latest work and updates here.

                  </p>



                  <div className="mt-5 flex items-center gap-2">

                    <IconLink href={PROFILE.links.github} label="GitHub">

                      <Github className="h-5 w-5" />

                    </IconLink>

                    <IconLink href={PROFILE.links.linkedin} label="LinkedIn">

                      <Linkedin className="h-5 w-5" />

                    </IconLink>

                    <IconLink href={PROFILE.links.codolio} label="Codolio">

                      <Globe className="h-5 w-5" />

                    </IconLink>

                    <IconLink href={PROFILE.links.instagram} label="Instagram">

                      <Instagram className="h-5 w-5" />

                    </IconLink>

                    <IconLink href={`mailto:${PROFILE.email}`} label="Email">

                      <Mail className="h-5 w-5" />

                    </IconLink>

                    <IconLink href={`tel:${PROFILE.phone.replace(/\s/g, "")}`} label="Phone">

                      <Phone className="h-5 w-5" />

                    </IconLink>

                  </div>



                  <div className="mt-6 rounded-xl border border-white/10 bg-slate-950/30 p-4">

                    <div className="text-xs font-semibold uppercase tracking-widest text-slate-200/80">

                      Location

                    </div>

                    <div className="mt-2 text-sm text-slate-200">

                      {PROFILE.location}

                    </div>

                  </div>

                </div>

              </div>

            </div>



            <footer className="mt-14 border-t border-white/10 pt-6 text-sm text-slate-400">

              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

                <div>

                  © {year} <span className="animate-gradient bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-[length:200%_100%] bg-clip-text text-transparent">{PROFILE.name}</span>. All rights reserved.

                </div>

                <div className="text-slate-500">Crafted with creativity ❤️</div>

              </div>

            </footer>

          </div>

        </section>

      </main>

    </div>

  );

}

