import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  ExternalLink,
  Globe,
  Github,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Phone,
  Sun,
  X,
} from "lucide-react";

const PROFILE = {
  name: "AYISHATHUL HAZEENA S",
  role: "B.Tech Computer Science And Business Systems | Full-Stack & Frontend Developer",
  location: "Coimbatore, Tamil Nadu, India",
  summary:
    "Pre-final year CSBS student focused on building responsive, accessible web apps with clean UI/UX and strong problem-solving skills.",
  email: "tohazsha@gmail.com",
  phone: "+91 8015594087",
  links: {
    github: "https://github.com/HazSha28",
    linkedin: "https://linkedin.com/in/https://www.linkedin.com/in/hazeena-shahul-hameed-b01838292/",
    codolio: "https://codolio.com/profile/Hazeena%20S",
    resume: "https://drive.google.com/file/d/1Os8qFqcdKtsKANJ_GGc0ExmZELPgloiq/view?usp=drive_link",
  },
};

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

const PROJECTS = [
  {
    title: "Hadith Master",
    description:
      "AI-powered authenticated Islamic text app to search, filter, and explore verified Hadith. Built with a simple UX to reduce complexity; includes advanced search and filtering plus audio recording and pronunciation analysis for AI-driven feedback.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind", "Firebase"],
    live: "https://github.com/HazSha28/Hadith--Master",
    repo: "https://github.com/HazSha28/Hadith--Master",
  },
  {
    title: "Flavour Fusion",
    description:
      "Culinary platform for discovering and sharing recipes with embedded tutorials and step-by-step guidance. Includes personal/public journaling and community sharing. Designed adaptive accessibility UI (high contrast, large targets) and hands-free interaction using head-pose estimation + voice commands.",
    tags: ["HTML", "CSS", "Node.js", "Express", "UI/UX", "Firebase"],
    live: "https://flavour-fusion-blond.vercel.app/",
    repo: "https://github.com/HazSha28/Flavour-Fusion",
  },
  {
    title: "Expense Tracker",
    description:
      "On-device expense tracking and visualization tool with an elegant, minimalist dashboard. Helps budgeting and long-term discipline without cloud processing; includes adaptive accessibility UI with high contrast and large targets.",
    tags: ["Spring Boot", "Java", "Maven", "Spring Data JPA", "JavaFX/Swing"],
    live: "https://github.com/HazSha28/Expense-Tracker",
    repo: "https://github.com/HazSha28/Expense-Tracker",
  },
   {
    title: "Todo List",
    description:
      "A sophisticated Todo List application designed for local task management with an elegant, minimalist dashboard. Features intuitive task organization, progress visualization, and analytics to help users build and maintain long-term discipline. Built with accessibility-first principles including high contrast modes, large interactive targets, and keyboard navigation for optimal usability across all devices.",
    tags: ["Spring Boot", "Java", "Maven", "Spring Data JPA", "JavaFX/Swing"],
    live: "https://github.com/HazSha28/Expense-Tracker",
    repo: "https://github.com/HazSha28/Expense-Tracker",
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
    link: "https://leetcode.com/u/kit27csbs11/",
    rating: 1756,
    maxRating: 1756,
    solved: 230,
    globalRank: "Top 10.4%",
    contestRank: 200,
    color: "orange"
  },
  {
    platform: "CodeChef",
    link: "https://www.codechef.com/users/hazeena28",
    rating: 1683,
    maxRating: 1683,
    solved: 430,
    stars: 3,
    color: "purple"
  },
  {
    platform: "CodeStudio",
    rating: 1533,
    maxRating: 1533,
    badge: "Topper of College",
    color: "blue"
  },
  {
    platform: "Codeforces",
    link: "https://codeforces.com/profile/Hazeena",
    rating: 1199,
    maxRating: 1199,
    solved: 30,
    extra: "200+ DSA problems",
    color: "red"
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
          className="scroll-mt-24 border-b border-white/10"
        >
          <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl items-center gap-10 px-4 pb-16 pt-28 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:pb-24 lg:pt-32">
            <div className="relative order-2 lg:order-2 flex justify-center lg:justify-end lg:pr-8">
              <div className="relative w-96 h-96 group">
                {/* Bead background */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    {[...Array(12)].map((_, i) => {
                      const angle = (i * 30) * (Math.PI / 180);
                      const distance = 160;
                      const size = 16 + Math.random() * 8;
                      return (
                        <div 
                          key={i}
                          className="absolute rounded-full bg-gradient-to-br from-cyan-400/80 to-purple-500/80 shadow-lg shadow-cyan-400/20 animate-float"
                          style={{
                            width: `${size}px`,
                            height: `${size}px`,
                            left: `calc(50% - ${size/2}px + ${Math.cos(angle) * distance}px)`,
                            top: `calc(50% - ${size/2}px + ${Math.sin(angle) * distance}px)`,
                            animationDelay: `${i * 0.2}s`,
                            animationDuration: `${4 + Math.random() * 3}s`
                          }}
                        />
                      );
                    })}
                  </div>
                </div>
                
                {/* Profile photo with bounce animation */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl group-hover:shadow-3xl group-hover:shadow-cyan-400/40 transition-all duration-700 animate-bounce-slow transform group-hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/30 to-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <img 
                      src="/assets/hasee photo.jpg" 
                      alt={PROFILE.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 rounded-full border-2 border-white/40 group-hover:border-cyan-300/80 transition-all duration-700"></div>
                  </div>
                </div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/20 to-purple-500/20 opacity-0 group-hover:opacity-100 blur-3xl transition-all duration-1500"></div>
              </div>
            </div>
            <div className="order-1 lg:order-1 lg:pl-20">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-xs font-medium text-slate-200">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                Available for freelance & full-time
              </div>

              <h1 className="mt-12 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Hi, I'm{" "}
                <span className="inline-block animate-gradient bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-[length:200%_100%] bg-clip-text text-transparent">
                  AYISHATHUL HAZEENA S.
                </span>
              </h1>

              <p className="mt-8 text-lg leading-relaxed text-slate-300 sm:text-xl">
                B.Tech Computer Science And Business Systems | Full-Stack & Frontend Developer · Coimbatore, Tamil Nadu, India
              </p>

              <p className="mt-8 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base text-justify">
                Pre-final year CSBS student focused on building responsive, accessible web apps with clean UI/UX and strong problem-solving skills.
              </p>

              <div className="mt-14 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 shadow-glow transition hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"
                >
                  View Projects
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"
                >
                  Contact Me
                </a>

                <a
                  href={PROFILE.links.resume}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-transparent px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-white/20 hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"
                >
                  Resume
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
            </div>
          </div>
        </section>

        <section id="resume" className="scroll-mt-24 border-b border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <SectionHeading
              eyebrow="Resume"
              title="Education, experience & accomplishments"
              subtitle="A condensed, readable version of your resume with quick links."
            />

            <div className="mt-10 grid gap-6 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-glow">
                  <div className="text-sm font-semibold text-white">Internship</div>
                  <div className="mt-3 text-sm text-slate-200">
                    {INTERNSHIP.company} · {INTERNSHIP.location}
                  </div>
                  <div className="mt-1 text-sm text-slate-400">
                    {INTERNSHIP.duration}
                  </div>

                  <ul className="mt-4 space-y-2 text-sm text-slate-300">
                    {INTERNSHIP.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>

                  <a
                    href={INTERNSHIP.link}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-cyan-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"
                    target={INTERNSHIP.link?.startsWith("http") ? "_blank" : undefined}
                    rel={INTERNSHIP.link?.startsWith("http") ? "noreferrer" : undefined}
                  >
                    View proof / link
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-glow">
                  <div className="text-sm font-semibold text-white">
                    Certifications & Courses
                  </div>

                  <div className="mt-4 space-y-3">
                    {CERTIFICATIONS.map((c) => (
                      <div
                        key={c.title}
                        className="rounded-xl border border-white/10 bg-slate-950/30 p-4"
                      >
                        <div className="text-sm font-semibold text-white">
                          {c.title}
                        </div>
                        <div className="mt-1 flex items-center justify-between gap-3 text-sm text-slate-300">
                          <div>{c.meta}</div>
                          <a
                            href={c.link}
                            className="inline-flex items-center gap-2 font-semibold text-slate-100 transition hover:text-cyan-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"
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

              <div className="lg:col-span-6">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-glow">
                  <div className="text-sm font-semibold text-white">
                    Competitive Programming
                  </div>
                  <div className="mt-4 space-y-4">
                    {COMPETITIVE.map((platform) => (
                      <div
                        key={platform.platform}
                        className="rounded-xl border border-white/10 bg-slate-950/30 p-4"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <div className={`w-3 h-3 rounded-full bg-${platform.color}-400`}></div>
                            <div className="text-sm font-semibold text-white">
                              {platform.platform}
                            </div>
                          </div>
                          {platform.link && (
                            <a
                              href={platform.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
                            >
                              View Profile →
                            </a>
                          )}
                        </div>
                        
                        {platform.rating && (
                          <div className="space-y-2">
                            <div className="flex justify-between text-xs">
                              <span className="text-slate-400">Rating</span>
                              <span className="text-white font-medium">{platform.rating}</span>
                            </div>
                            <div className="w-full bg-slate-700 rounded-full h-2">
                              <div 
                                className={`h-2 rounded-full bg-gradient-to-r from-${platform.color}-500 to-${platform.color}-400 transition-all duration-500`}
                                style={{ width: `${Math.min((platform.rating / 2000) * 100, 100)}%` }}
                              ></div>
                            </div>
                          </div>
                        )}
                        
                        {platform.solved && (
                          <div className="flex justify-between text-xs mt-2">
                            <span className="text-slate-400">Problems Solved</span>
                            <span className="text-white font-medium">{platform.solved}+</span>
                          </div>
                        )}
                        
                        {platform.globalRank && (
                          <div className="flex justify-between text-xs mt-1">
                            <span className="text-slate-400">Global Rank</span>
                            <span className="text-green-400 font-medium">{platform.globalRank}</span>
                          </div>
                        )}
                        
                        {platform.stars && (
                          <div className="flex justify-between text-xs mt-1">
                            <span className="text-slate-400">Stars</span>
                            <div className="flex gap-1">
                              {[...Array(platform.stars)].map((_, i) => (
                                <span key={i} className="text-yellow-400">★</span>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {platform.badge && (
                          <div className="flex justify-between text-xs mt-1">
                            <span className="text-slate-400">Achievement</span>
                            <span className="text-purple-400 font-medium">{platform.badge}</span>
                          </div>
                        )}
                        
                        {platform.extra && (
                          <div className="flex justify-between text-xs mt-1">
                            <span className="text-slate-400">Additional</span>
                            <span className="text-slate-300 font-medium">{platform.extra}</span>
                          </div>
                        )}
                        
                        {platform.stats && (
                          <div className="text-sm text-slate-300 mt-2">
                            {platform.stats}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-glow">
                  <div className="text-sm font-semibold text-white">Achievements</div>
                  <ul className="mt-4 space-y-2 text-sm text-slate-300">
                    {ACHIEVEMENTS.map((a) => (
                      <li key={a.text}>{a.text}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-glow">
                  <div className="text-sm font-semibold text-white">Volunteering</div>
                  <ul className="mt-4 space-y-2 text-sm text-slate-300">
                    {VOLUNTEERING.map((v) => (
                      <li key={v.text}>{v.text}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="scroll-mt-24 border-b border-white/10"
        >
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <SectionHeading
              eyebrow="About"
              title="A bit about me"
              subtitle="Pre-final year CSBS student with a focus on responsive UI, accessibility, and strong DSA fundamentals."
            />

            <div className="mt-10 grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <div className="space-y-4 text-sm leading-relaxed text-slate-300 sm:text-base">
                  <p>
                    I build user-centric applications with clean UI/UX and
                    responsive design. I enjoy making interfaces simpler and
                    more accessible while keeping performance in mind.
                  </p>
                  <p>
                    My recent work includes authenticated web apps, advanced
                    search and filtering, and accessibility-first experiences
                    (high contrast, large targets, and inclusive interactions).
                  </p>
                  <p>
                    I also participate actively in competitive programming and
                    mentor juniors with problem-solving practice.
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  <Pill>Design systems</Pill>
                  <Pill>Component-driven UI</Pill>
                  <Pill>Clean architecture</Pill>
                  <Pill>Pixel polish</Pill>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-glow">
                    <div className="text-sm font-semibold text-white">Education</div>
                    <div className="mt-3 text-sm text-slate-200">
                      {EDUCATION.degree}
                    </div>
                    <div className="mt-2 text-sm text-slate-300">
                      {EDUCATION.institute}
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="inline-flex items-center rounded-full border border-white/10 bg-slate-950/30 px-3 py-1 text-xs font-medium text-slate-200">
                        {EDUCATION.duration}
                      </span>
                      <span className="inline-flex items-center rounded-full border border-white/10 bg-slate-950/30 px-3 py-1 text-xs font-medium text-slate-200">
                        CGPA: {EDUCATION.cgpa}
                      </span>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-glow">
                    <div className="text-sm font-semibold text-white">
                      Coursework
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-slate-300">
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
          className="scroll-mt-24 border-b border-white/10"
        >
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <SectionHeading
              eyebrow="Projects"
              title="Selected work"
              subtitle="A card layout that scales nicely across breakpoints and keeps content scannable."
            />

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {PROJECTS.map((project) => (
                <article
                  key={project.title}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 shadow-glow transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 focus-within:ring-2 focus-within:ring-cyan-300/70"
                >
                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br from-cyan-300/20 to-indigo-300/20 blur-2xl transition group-hover:from-cyan-300/30 group-hover:to-indigo-300/30" />

                  <div className="relative">
                    <h3 className="text-base font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300">
                      {project.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-full border border-white/10 bg-slate-950/30 px-2.5 py-1 text-xs font-medium text-slate-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      <a
                        href={project.live}
                        className="inline-flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-xs font-semibold text-slate-950 transition hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"
                        target={project.live?.startsWith("http") ? "_blank" : undefined}
                        rel={project.live?.startsWith("http") ? "noreferrer" : undefined}
                      >
                        Live
                        <ExternalLink className="h-4 w-4" />
                      </a>
                      <a
                        href={project.repo}
                        className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-transparent px-3 py-2 text-xs font-semibold text-white transition hover:border-white/20 hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"
                        target={project.repo?.startsWith("http") ? "_blank" : undefined}
                        rel={project.repo?.startsWith("http") ? "noreferrer" : undefined}
                      >
                        Code
                        <Github className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
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
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-glow"
                >
                  <div className="text-sm font-semibold text-white">
                    {group.title}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center rounded-full border border-white/10 bg-slate-950/30 px-3 py-1 text-xs font-medium text-slate-200"
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
                <div className="text-slate-500">Built with React + Tailwind</div>
              </div>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}
