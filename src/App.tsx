import React from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, animate, AnimatePresence } from 'motion/react';
import { JOURNEY_MODULES, ASSETS, AGENTS, PADLET_LINKS } from './constants';
import { VideoCard, AudioCard, ImageCard, WebCard } from './components/Cards';
import { Sparkles, Brain, Database, ArrowRight, Quote, Globe, X, ExternalLink, Play } from 'lucide-react';

const NavItem: React.FC<{ item: string }> = ({ item }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  
  return (
    <a 
      href={`#${item.toLowerCase()}`} 
      className="relative text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-500 py-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ color: isHovered ? '#FFFFFF' : 'rgba(255, 255, 255, 0.4)' }}
    >
      {item}
      {isHovered && (
        <motion.span 
          layoutId="navUnderline"
          className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-lg-red to-transparent"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        />
      )}
      {isHovered && (
        <motion.div 
          layoutId="navGlow"
          className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-4 bg-lg-red/20 blur-xl rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />
      )}
    </a>
  );
};

const DynamicLogo = () => {
  const [char, setChar] = React.useState('L');

  React.useEffect(() => {
    const interval = setInterval(() => {
      setChar(prev => prev === 'L' ? 'G' : 'L');
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-10 h-10 bg-lg-red rounded-full flex items-center justify-center text-white font-bold text-xl shadow-[0_0_20px_rgba(165,0,52,0.4)] relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={char}
          initial={{ y: 10, opacity: 0, scale: 0.8 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: -10, opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5, ease: "circOut" }}
          className="absolute"
        >
          {char}
        </motion.span>
      </AnimatePresence>
      {/* Organic fluid effect background */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 90, 180, 270, 360],
          borderRadius: ["50%", "40%", "50%", "60%", "50%"]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "linear" 
        }}
        className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"
      />
    </div>
  );
};

const Header = ({ onOpenModal }: { onOpenModal: () => void }) => (
  <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
    {/* Subtle Top Glow */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-lg-red/20 to-transparent" />
    
    <div className="bg-zinc-950/60 backdrop-blur-2xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <DynamicLogo />
          <div>
            <SpotlightText text="LG AX CAMP" />
            <p className="text-[10px] font-bold text-lg-red tracking-widest uppercase">For Leaders</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-10">
          {['Journey', 'Showcase', 'Intelligence', 'Vision'].map((item) => (
            <NavItem key={item} item={item} />
          ))}
        </nav>
        
        <button 
          onClick={onOpenModal}
          className="px-5 py-2 bg-[linear-gradient(-45deg,#A50034,#FF0055,#800026,#D00040)] animate-liquid text-white text-[10px] font-bold rounded-full hover:shadow-[0_0_25px_rgba(165,0,52,0.6)] transition-all tracking-widest"
        >
          LG WAY 2030
        </button>
      </div>
    </div>
    
    {/* Bottom Light Bleed */}
    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />
  </header>
);

const PadletModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => (
  <AnimatePresence>
    {isOpen && (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          className="relative w-full max-w-4xl bg-zinc-950 rounded-[40px] shadow-[0_0_100px_rgba(0,0,0,0.5)] overflow-hidden border border-white/10"
        >
          <div className="p-10 border-b border-white/5 flex items-center justify-between bg-gradient-to-r from-zinc-900 to-zinc-950">
            <div>
              <h2 className="text-3xl font-black tracking-tighter text-white mb-1">AX CAMP 결과물</h2>
              <p className="text-[10px] font-bold text-lg-red tracking-[0.2em] uppercase">Executive AI Transformation Archive</p>
            </div>
            <button 
              onClick={onClose}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 text-white/50 hover:bg-lg-red hover:text-white transition-all duration-300"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-zinc-950">
            {PADLET_LINKS.map((link, i) => (
              <motion.a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.03)' }}
                className="relative group flex flex-col p-6 rounded-3xl border border-white/5 bg-white/[0.02] transition-all duration-500 overflow-hidden"
              >
                {/* Background Accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-lg-red/5 blur-3xl group-hover:bg-lg-red/10 transition-colors" />
                
                <div className="flex items-start justify-between mb-8">
                  <div className="flex flex-col">
                    <span className="text-[32px] font-black text-white/10 group-hover:text-lg-red/40 transition-colors leading-none mb-2 font-mono">
                      {link.label}
                    </span>
                    <div className="h-0.5 w-6 bg-lg-red/30 group-hover:w-12 transition-all duration-500" />
                  </div>
                  <div className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center text-white/20 group-hover:text-lg-red group-hover:bg-lg-red/10 transition-all duration-300">
                    <ExternalLink size={18} />
                  </div>
                </div>
                
                <h3 className="text-base font-bold text-white/90 group-hover:text-white transition-colors mb-2">
                  {link.title}
                </h3>
                <p className="text-[10px] text-white/30 font-medium uppercase tracking-widest">
                  View Workshop Board
                </p>
                
                {/* Bottom Shine */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-lg-red/0 to-transparent group-hover:via-lg-red/50 transition-all duration-700" />
              </motion.a>
            ))}
          </div>
          
          <div className="px-10 py-6 border-t border-white/5 bg-zinc-900/50 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-lg-red animate-pulse" />
              <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Live Archive System</span>
            </div>
            <p className="text-[9px] font-medium text-white/20 tracking-tight">
              © 2026 LG DIGITAL INNOVATION. CONFIDENTIAL AND PROPRIETARY.
            </p>
          </div>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);

const MouseFollower = () => {
  const [isMobile, setIsMobile] = React.useState(false);
  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  const innerX = useSpring(rawX, { damping: 30, stiffness: 300, mass: 0.05 });
  const innerY = useSpring(rawY, { damping: 30, stiffness: 300, mass: 0.05 });
  const outerX = useSpring(rawX, { damping: 40, stiffness: 150, mass: 0.15 });
  const outerY = useSpring(rawY, { damping: 40, stiffness: 150, mass: 0.15 });

  const innerXOffset = useTransform(innerX, v => v - 12);
  const innerYOffset = useTransform(innerY, v => v - 12);
  const outerXOffset = useTransform(outerX, v => v - 96);
  const outerYOffset = useTransform(outerY, v => v - 96);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  if (isMobile) return null;

  return (
    <>
      {/* Core soft glow */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 bg-lg-red/40 rounded-full pointer-events-none z-[10000] blur-[2px] shadow-[0_0_20px_rgba(165,0,52,0.8),0_0_40px_rgba(165,0,52,0.4)]"
        style={{ x: innerXOffset, y: innerYOffset }}
      />
      {/* Outer atmospheric bleed */}
      <motion.div
        className="fixed top-0 left-0 w-48 h-48 bg-lg-red/15 rounded-full blur-[60px] pointer-events-none z-[9999]"
        style={{ x: outerXOffset, y: outerYOffset }}
      />
    </>
  );
};

const SpotlightText = ({ text }: { text: string }) => {
  const textRef = React.useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = React.useState(false);
  const dx = useMotionValue(1000);
  const dy = useMotionValue(1000);

  const intensity = useTransform([dx, dy] as any, ([x, y]: number[]) =>
    Math.max(0, 1 - Math.sqrt(x * x + y * y) / 180)
  );
  const glowFilter = useTransform(intensity, v =>
    `drop-shadow(0 0 ${v * 10}px rgba(165,0,52,0.7))`
  );

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      if (!textRef.current) return;
      const rect = textRef.current.getBoundingClientRect();
      dx.set(e.clientX - (rect.left + rect.width / 2));
      dy.set(e.clientY - (rect.top + rect.height / 2));
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={textRef} className="relative">
      <h1 className="text-sm font-black tracking-tighter leading-none text-zinc-300 dark:text-zinc-700">
        {text}
      </h1>
      <motion.h1
        className="absolute top-0 left-0 text-sm font-black tracking-tighter leading-none text-lg-red pointer-events-none"
        style={{
          opacity: isMobile ? 1 : intensity,
          filter: isMobile ? 'none' : glowFilter,
        }}
      >
        {text}
      </motion.h1>
    </div>
  );
};

const InteractiveBackgroundTitle = ({ scrollYProgress }: { scrollYProgress: any }) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = React.useState({ x: -1000, y: -1000 });

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({ 
        x: e.clientX - rect.left, 
        y: e.clientY - rect.top 
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 flex items-center justify-center z-[-1] pointer-events-none pb-20 md:pb-32">
      <div className="relative">
        {/* Base Layer (Subtle Gray) */}
        <motion.h2 
          style={{ 
            opacity: useTransform(scrollYProgress, [0, 0.4, 0.8], [0.15, 0.2, 0.05]),
            scale: useTransform(scrollYProgress, [0, 1], [1, 1.2]),
            color: "rgba(255, 255, 255, 0.2)",
            filter: useTransform(scrollYProgress, [0, 0.6], ["blur(0px)", "blur(12px)"]),
          }}
          className="text-[15vw] font-black tracking-tighter uppercase leading-none text-center select-none"
        >
          LG AX CAMP
        </motion.h2>
        
        {/* Interactive Spotlight Layer (LG Red) */}
        <motion.h2 
          style={{ 
            opacity: useTransform(scrollYProgress, [0, 0.4, 0.8], [0.6, 0.8, 0.2]),
            scale: useTransform(scrollYProgress, [0, 1], [1, 1.2]),
            color: "#A50034",
            WebkitMaskImage: `radial-gradient(circle 200px at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`,
            maskImage: `radial-gradient(circle 200px at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`,
            filter: useTransform(scrollYProgress, [0, 0.6], ["blur(0px)", "blur(8px)"]),
          }}
          className="absolute top-0 left-0 w-full text-[15vw] font-black tracking-tighter uppercase leading-none text-center select-none"
        >
          LG AX CAMP
        </motion.h2>
      </div>
    </div>
  );
};

const RobotStage = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Intro animation values - Refined to prevent head cutting
  const introScale = useMotionValue(isMobile ? 1.1 : 1.2); 
  const introY = useMotionValue(isMobile ? 5 : 10); 

  React.useEffect(() => {
    const controls = [
      animate(introScale, 1, { duration: 3, ease: [0.22, 1, 0.36, 1] }),
      animate(introY, 0, { duration: 3, ease: [0.22, 1, 0.36, 1] })
    ];
    return () => controls.forEach(c => c.stop());
  }, [isMobile]);

  // Base scroll transforms - Adjusted end point to hide internal Spline logo
  const baseScale = useTransform(scrollYProgress, [0, 1], [isMobile ? 1.3 : 1.5, 0.85]);
  const baseY = useTransform(scrollYProgress, [0, 1], [isMobile ? "15%" : "25%", "0%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6]);

  // Combine intro and scroll values
  const scale = useTransform([baseScale, introScale], ([s, i]) => Number(s) * Number(i));
  const y = useTransform([baseY, introY], ([by, iy]) => {
    const baseNum = parseFloat(String(by));
    return `${baseNum + Number(iy)}%`;
  });

  return (
    <section ref={containerRef} className="relative h-[350vh] md:h-[450vh] w-full bg-lg-dark">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Background Title with Mouse Interaction */}
        <InteractiveBackgroundTitle scrollYProgress={scrollYProgress} />

        <motion.div 
          style={{ scale, opacity, y }}
          className="absolute inset-0 z-0"
        >
          <iframe 
            src='https://my.spline.design/nexbotrobotcharacterconcept-AwIw7KZBfTCOYkorUHYnM6Ee/' 
            frameBorder='0' 
            width='100%' 
            height='100%'
            className="origin-center"
          ></iframe>
        </motion.div>
        <div className="absolute bottom-0 left-0 w-full h-48 md:h-64 bg-gradient-to-t from-lg-dark to-transparent z-10" />
        {/* Spline Logo Mask */}
        <div className="absolute bottom-0 right-0 w-48 h-12 bg-lg-dark z-20" />
      </div>
    </section>
  );
};

const SpotlightSpan = ({ children }: { children: React.ReactNode }) => {
  const spanRef = React.useRef<HTMLSpanElement>(null);
  const [mousePos, setMousePos] = React.useState({ x: -1000, y: -1000 });
  const [isHovered, setIsHovered] = React.useState(false);

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!spanRef.current) return;
      const rect = spanRef.current.getBoundingClientRect();
      setMousePos({ 
        x: e.clientX - rect.left, 
        y: e.clientY - rect.top 
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <span 
      ref={spanRef} 
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="text-white transition-opacity duration-500">
        {children}
      </span>
      <motion.span 
        animate={{ opacity: isHovered ? 1 : 0 }}
        style={{ 
          color: "#A50034",
          WebkitMaskImage: `radial-gradient(circle 200px at ${mousePos.x}px ${mousePos.y}px, black 30%, transparent 100%)`,
          maskImage: `radial-gradient(circle 200px at ${mousePos.x}px ${mousePos.y}px, black 30%, transparent 100%)`,
        }}
        className="absolute top-0 left-0 w-full pointer-events-none"
      >
        {children}
      </motion.span>
    </span>
  );
};

const Hero = () => (
  <section className="relative py-20 md:py-32 px-6 overflow-hidden bg-lg-dark text-white border-t border-white/5">
    <div className="max-w-7xl mx-auto relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-black tracking-[0.2em] text-lg-red mb-6 uppercase border border-white/10">
          LG AI Native Leadership Journey
        </span>
        <h1 className="text-4xl md:text-8xl font-black tracking-tighter mb-8 leading-[1] md:leading-[0.9]">
          <span className="text-lg-red">AX CAMP</span> for Leaders<br />
          <SpotlightSpan>AI Native</SpotlightSpan>의 미래
        </h1>
        <p className="max-w-2xl mx-auto text-base md:text-lg text-white/60 font-medium leading-relaxed mb-12">
          LG 리더들이 직접 설계하고 구현한 AI 전환의 6일간의 여정.<br className="hidden md:block" />
          우리는 리더십의 본질을 지키며 AI로 역량을 증강합니다.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#journey" className="px-8 py-4 bg-white/10 border border-white/20 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-lg-red hover:border-lg-red transition-all backdrop-blur-sm shadow-lg hover:shadow-lg-red/20">
            커리큘럼 확인하기 <ArrowRight size={18} />
          </a>
          <a href="#showcase" className="px-8 py-4 border border-white/20 rounded-full font-bold hover:text-lg-red hover:border-lg-red/50 transition-all backdrop-blur-sm flex items-center justify-center gap-2">
            성과 쇼케이스 <Sparkles size={18} />
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

const InteractiveTitle = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = React.useState({ x: -1000, y: -1000 });
  const [isHovered, setIsHovered] = React.useState(false);

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({ 
        x: e.clientX - rect.left, 
        y: e.clientY - rect.top 
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2 className="transition-colors duration-500 text-zinc-300 dark:text-zinc-700">
        {children}
      </h2>
      <motion.h2 
        animate={{ opacity: isHovered ? 1 : 0 }}
        style={{ 
          color: "#A50034",
          WebkitMaskImage: `radial-gradient(circle 120px at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`,
          maskImage: `radial-gradient(circle 120px at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`,
        }}
        className="absolute top-0 left-0 w-full pointer-events-none"
      >
        {children}
      </motion.h2>
    </div>
  );
};

const JourneySection = () => (
  <section id="journey" className="py-16 md:py-24 px-6 bg-zinc-50 dark:bg-zinc-950">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
        <div>
          <InteractiveTitle className="text-3xl md:text-4xl font-black tracking-tight mb-4">
            The 6-Day Journey
          </InteractiveTitle>
          <p className="text-zinc-500 font-medium">리더들이 거쳐온 3단계의 핵심 모듈</p>
        </div>
        <div className="flex gap-2">
          <div className="w-12 h-1 bg-lg-red rounded-full" />
          <div className="w-4 h-1 bg-zinc-200 dark:bg-zinc-800 rounded-full" />
          <div className="w-4 h-1 bg-zinc-200 dark:bg-zinc-800 rounded-full" />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {JOURNEY_MODULES.map((module, idx) => (
          <motion.div 
            key={module.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-100 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all group"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-800 rounded-2xl flex items-center justify-center text-lg-red font-black group-hover:bg-lg-red group-hover:text-white transition-colors shrink-0">
                {module.id}
              </div>
              <h3 className="text-lg font-black leading-tight">{module.title}</h3>
            </div>
            <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100 mb-6 leading-relaxed">
              {module.description}
            </p>
            <ul className="space-y-3">
              {module.details.map((detail, i) => (
                <li key={i} className="flex items-center gap-2 text-xs font-bold text-zinc-600 dark:text-zinc-300">
                  <div className="w-1 h-1 bg-lg-red rounded-full" />
                  {detail}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const ShowcaseSection = () => (
  <section id="showcase" className="py-16 md:py-24 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16 md:mb-20">
        <InteractiveTitle className="text-3xl md:text-4xl font-black tracking-tight mb-4">
          AX Multi-modal Assets
        </InteractiveTitle>
        <p className="text-zinc-500 font-medium">Veo, Lyria, Gemini 모델로 탄생한 혁신의 결과물</p>
      </div>

      <div className="space-y-16 md:space-y-24">
        {/* Videos */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-zinc-100 dark:bg-zinc-900 rounded-lg">
              <Play size={20} className="text-lg-red" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-zinc-300">Strategy Videos</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {ASSETS.filter(a => a.type === 'video').map(asset => (
              <VideoCard key={asset.id} asset={asset} />
            ))}
          </div>
        </div>

        {/* Music */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-zinc-100 dark:bg-zinc-900 rounded-lg">
              <Quote size={20} className="text-lg-red" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-zinc-300">Leader's Philosophy Tracks</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {ASSETS.filter(a => a.type === 'audio').map(asset => (
              <AudioCard key={asset.id} asset={asset} />
            ))}
          </div>
        </div>

        {/* Images & Web */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-zinc-100 dark:bg-zinc-900 rounded-lg">
                <Brain size={20} className="text-lg-red" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-zinc-300">Vision Boards</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {ASSETS.filter(a => a.type === 'image').map(asset => (
                <ImageCard key={asset.id} asset={asset} />
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-zinc-100 dark:bg-zinc-900 rounded-lg">
                <Globe size={20} className="text-lg-red" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-zinc-300">Web Portfolios</h3>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {ASSETS.filter(a => a.type === 'web').map(asset => (
                <WebCard key={asset.id} asset={asset} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const IntelligenceHub = () => (
  <section id="intelligence" className="py-16 md:py-24 px-6 bg-lg-dark text-white overflow-hidden relative">
    <div className="absolute top-0 right-0 w-1/3 h-full opacity-20 pointer-events-none">
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,#A50034_0%,transparent_70%)]" />
    </div>
    <div className="max-w-7xl mx-auto relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <InteractiveTitle className="text-3xl md:text-4xl font-black tracking-tight mb-6">
            AI Intelligence Hub
          </InteractiveTitle>
          <p className="text-white/60 mb-8 md:mb-12 leading-relaxed text-sm md:text-base">
            리더들이 직접 구축한 실무형 AI 에이전트와 NotebookLM을 통한 지식 자산화의 결과입니다.
          </p>
          
          <div className="space-y-6">
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <Database size={20} className="text-lg-red" />
                <h4 className="font-bold">Knowledge Asset</h4>
              </div>
              <p className="text-xs text-white/40 leading-relaxed">
                NotebookLM을 통해 분석된 수백 권의 지식 인사이트 요약본이 리더들의 의사결정을 지원합니다.
              </p>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h4 className="text-xs font-black tracking-widest text-lg-red uppercase mb-6">AI Agents (Gems)</h4>
          {AGENTS.map((agent, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors cursor-default"
            >
              <div className="flex justify-between items-start mb-2">
                <h5 className="font-bold text-sm md:text-base">{agent.name}</h5>
                <span className="text-[10px] px-2 py-0.5 bg-lg-red rounded text-white font-bold">{agent.role}</span>
              </div>
              <p className="text-xs text-white/40 leading-relaxed">{agent.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-20 px-6 border-t border-zinc-100 dark:border-zinc-900">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-lg-red rounded-full flex items-center justify-center text-white font-bold text-lg">L</div>
            <h1 className="text-sm font-black tracking-tighter">AX CAMP FOR LEADERS</h1>
          </div>
          <p className="text-xs text-zinc-400 font-medium max-w-md leading-relaxed">
            리더십의 본질을 지키며 AI로 역량을 증강(Augmentation)하는 LG의 새로운 일하는 방식. 
            LG AI Native Stage에 오신 것을 환영합니다.
          </p>
        </div>
        <div className="flex gap-12">
          <div>
            <h5 className="text-[10px] font-black tracking-widest text-zinc-400 uppercase mb-4">Resources</h5>
            <ul className="space-y-2 text-xs font-bold">
              <li><a href="#" className="hover:text-lg-red">Brand Guide</a></li>
              <li><a href="#" className="hover:text-lg-red">AI Ethics</a></li>
              <li><a href="#" className="hover:text-lg-red">Contact</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-[10px] font-black tracking-widest text-zinc-400 uppercase mb-4">LG Group</h5>
            <ul className="space-y-2 text-xs font-bold">
              <li><a href="#" className="hover:text-lg-red">LG.com</a></li>
              <li><a href="#" className="hover:text-lg-red">Digital Innovation</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-20 pt-8 border-t border-zinc-100 dark:border-zinc-900 flex flex-col md:flex-row justify-between gap-4">
        <p className="text-[10px] text-zinc-400 font-bold">© 2026 LG DIGITAL INNOVATION TEAM. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-6 text-[10px] text-zinc-400 font-bold">
          <a href="#" className="hover:text-lg-red">PRIVACY POLICY</a>
          <a href="#" className="hover:text-lg-red">TERMS OF SERVICE</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-black selection:bg-lg-red selection:text-white">
      <MouseFollower />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main>
        <RobotStage />
        <Hero />
        <JourneySection />
        <ShowcaseSection />
        <IntelligenceHub />
        
        {/* Closing Section */}
        <section id="vision" className="py-20 md:py-32 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <InteractiveTitle className="text-3xl md:text-6xl font-black tracking-tight mb-8">
                LG <span className="text-lg-red">AI Native</span> Stage
              </InteractiveTitle>
              <p className="text-lg md:text-xl text-zinc-500 mb-12 leading-relaxed px-4">
                "기술은 도구일 뿐, 혁신의 완성은 리더의 통찰력에서 시작됩니다."
              </p>
              
              {/* YouTube Video Embed */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative max-w-3xl mx-auto mb-16 aspect-video rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(165,0,52,0.15)] border border-zinc-200 dark:border-zinc-800"
              >
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/ScMzIvxBSi4" 
                  title="LG AI Native Stage Video" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                  className="absolute inset-0"
                ></iframe>
              </motion.div>

              <div className="w-20 h-1 bg-lg-red mx-auto mb-12" />
              <p className="text-[10px] md:text-sm font-bold tracking-widest text-zinc-400 uppercase">
                Augmenting Leadership with AI
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />

      <PadletModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
