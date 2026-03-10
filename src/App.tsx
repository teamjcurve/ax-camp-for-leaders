import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, animate, AnimatePresence, useSpring, useMotionTemplate } from 'motion/react';
import { JOURNEY_MODULES, ASSETS, AGENTS, PADLET_LINKS } from './constants';
import { VideoCard, AudioCard, ImageCard, WebCard } from './components/Cards';
import { Sparkles, Brain, Database, ArrowRight, Quote, Globe, X, ExternalLink, Play, Music, Eye } from 'lucide-react';
import { Asset } from './types';

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

const Header = ({ onOpenModal, mouseX, mouseY }: { onOpenModal: () => void, mouseX: any, mouseY: any }) => {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      // Show header when scrolling past the first section (RobotStage)
      if (latest > window.innerHeight * 0.8) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, [scrollY]);

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5, ease: "circOut" }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Subtle Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-lg-red/20 to-transparent" />
      
      <div className="bg-zinc-950/60 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <DynamicLogo />
            <div>
              <SpotlightText text="LG AX CAMP" mouseX={mouseX} mouseY={mouseY} />
              <p className="text-[10px] font-bold text-lg-red tracking-widest uppercase">For Leaders</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-10">
            {['Journey', 'Showcase', 'Intelligence', 'Vision'].map((item) => (
              <NavItem key={item} item={item} />
            ))}
          </nav>
          
          <div className="flex flex-col items-end gap-1.5">
            <div className="flex items-center gap-2 mr-1">
              <div className="w-8 h-px bg-gradient-to-r from-transparent to-white/20" />
              <p className="text-[9px] text-white/40 font-bold tracking-[0.15em] uppercase">Archive Showcase</p>
            </div>
            <button 
              onClick={onOpenModal}
              className="px-6 py-2.5 bg-[linear-gradient(-45deg,#A50034,#FF0055,#800026,#D00040)] animate-liquid text-white text-[10px] font-black rounded-full hover:shadow-[0_0_30px_rgba(165,0,52,0.5)] transition-all tracking-[0.2em] border border-white/10"
            >
              LG WAY 2030
            </button>
          </div>
        </div>
      </div>
      
      {/* Bottom Light Bleed */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </motion.header>
  );
};

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
          className="relative w-full max-w-[95vw] lg:max-w-7xl bg-zinc-950 rounded-[40px] shadow-[0_0_100px_rgba(0,0,0,0.5)] overflow-hidden border border-white/10"
        >
          <div className="p-10 border-b border-white/5 flex items-center justify-between bg-gradient-to-r from-zinc-900 to-zinc-950">
            <div>
              <h2 className="text-3xl font-black tracking-tighter text-white mb-1">AX CAMP 결과물</h2>
              <p className="text-[10px] font-bold text-lg-red tracking-[0.2em] uppercase mb-2">Executive AI Transformation Archive</p>
              <div className="space-y-1">
                <p className="text-xs text-white/50 font-medium">아래 각 차수를 클릭하면 1~6차수 참가자들의 전체 결과물들을 확인해보실 수 있습니다.</p>
                <p className="text-[10px] text-white/30 font-bold italic">* 참가자들의 결과물(패들렛 등)은 보안 상의 이유로 일정 기간 이후 삭제처리 될 수 있습니다.</p>
              </div>
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

const MouseFollower = ({ mouseX, mouseY, glowX, glowY }: { mouseX: any, mouseY: any, glowX: any, glowY: any }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[10000]">
      {/* 1. Atmospheric Trail - Very Elastic & Slow */}
      <motion.div 
        style={{ x: glowX, y: glowY }}
        className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="w-[400px] h-[400px] bg-lg-red/5 rounded-full blur-[120px]" />
      </motion.div>

      {/* 2. Organic Light Source (Blob) - Medium Elasticity */}
      <motion.div 
        style={{ x: mouseX, y: mouseY }}
        className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2"
      >
        {/* The "Blob" Light Source */}
        <motion.div
          animate={{
            borderRadius: [
              "30% 70% 70% 30% / 30% 30% 70% 70%",
              "50% 50% 20% 80% / 25% 80% 20% 75%",
              "67% 33% 47% 53% / 37% 48% 52% 63%",
              "39% 61% 74% 26% / 69% 65% 35% 31%",
              "30% 70% 70% 30% / 30% 30% 70% 70%"
            ],
            scale: [1, 1.15, 0.9, 1.1, 1],
            rotate: [0, 15, -15, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-28 h-28 relative"
        >
          {/* Main Glow Body */}
          <div className="absolute inset-0 bg-gradient-to-br from-lg-red via-lg-red/90 to-lg-red/40 rounded-[inherit] blur-2xl opacity-70" />
          
          {/* Inner Core Light - Pulsing */}
          <motion.div 
            animate={{ 
              opacity: [0.2, 0.5, 0.2],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-[20%] bg-white/30 rounded-full blur-xl" 
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

const SpotlightText = ({ text, mouseX, mouseY }: { text: string, mouseX: any, mouseY: any }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Calculate local coordinates from global mouse springs
  const localX = useTransform(mouseX, (x: number) => {
    if (!containerRef.current) return 0;
    return x - containerRef.current.getBoundingClientRect().left;
  });
  const localY = useTransform(mouseY, (y: number) => {
    if (!containerRef.current) return 0;
    return y - containerRef.current.getBoundingClientRect().top;
  });

  const maskImage = useMotionTemplate`radial-gradient(circle 60px at ${localX}px ${localY}px, black 0%, transparent 100%)`;

  return (
    <div 
      ref={containerRef} 
      className="relative group cursor-default"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h1 className="text-sm font-black tracking-tighter leading-none text-zinc-300 dark:text-zinc-700">
        {text}
      </h1>
      <motion.h1 
        style={{ 
          opacity: isHovered ? 1 : 0,
          maskImage: maskImage,
          WebkitMaskImage: maskImage,
        }}
        className="absolute top-0 left-0 text-sm font-black tracking-tighter leading-none text-lg-red pointer-events-none transition-opacity duration-300"
      >
        {text}
      </motion.h1>
    </div>
  );
};

const InteractiveBackgroundTitle = ({ scrollYProgress, mouseX, mouseY }: { scrollYProgress: any, mouseX: any, mouseY: any }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Viewport-relative mask to avoid scroll coordinate issues
  const maskImage = useMotionTemplate`radial-gradient(circle 400px at ${mouseX}px ${mouseY}px, black 0%, transparent 100%)`;

  return (
    <div ref={containerRef} className="relative flex items-center justify-center pointer-events-none overflow-visible">
      <div className="relative whitespace-nowrap">
        <motion.h2 
          style={{ 
            opacity: useTransform(scrollYProgress, [0, 0.4, 0.8], [0.15, 0.2, 0.05]),
            scale: useTransform(scrollYProgress, [0, 1], [1, 1.1]),
            color: "rgba(255, 255, 255, 0.2)",
            filter: useTransform(scrollYProgress, [0, 0.6], ["blur(0px)", "blur(8px)"]),
          }}
          className="text-[12vw] md:text-[15vw] font-black tracking-tighter uppercase leading-none text-center select-none"
        >
          LG AX CAMP
        </motion.h2>
        
        <motion.h2 
          style={{ 
            opacity: useTransform(scrollYProgress, [0, 0.4, 0.8], [0.8, 1, 0.3]),
            scale: useTransform(scrollYProgress, [0, 1], [1, 1.1]),
            color: "#A50034",
            maskImage: maskImage,
            WebkitMaskImage: maskImage,
            filter: useTransform(scrollYProgress, [0, 0.6], ["blur(2px)", "blur(10px)"]),
          }}
          className="absolute top-0 left-0 w-full text-[12vw] md:text-[15vw] font-black tracking-tighter uppercase leading-none text-center select-none drop-shadow-[0_0_40px_rgba(165,0,52,0.6)]"
        >
          LG AX CAMP
        </motion.h2>
      </div>
    </div>
  );
};

const RobotStage = ({ mouseX, mouseY }: { mouseX: any, mouseY: any }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTitleHovered, setIsTitleHovered] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const introScale = useMotionValue(isMobile ? 1.1 : 1.2); 
  const introY = useMotionValue(isMobile ? 5 : 10); 

  useEffect(() => {
    const controls = [
      animate(introScale, 1, { duration: 3, ease: [0.22, 1, 0.36, 1] }),
      animate(introY, 0, { duration: 3, ease: [0.22, 1, 0.36, 1] })
    ];
    return () => controls.forEach(c => c.stop());
  }, [isMobile]);

  const baseScale = useTransform(scrollYProgress, [0, 1], [isMobile ? 1.4 : 1.8, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  const scale = useTransform([baseScale, introScale], ([s, i]) => Number(s) * Number(i));

  return (
    <section ref={containerRef} className="relative bg-lg-dark overflow-hidden min-h-screen flex flex-col">
      {/* Title Interaction Zone - Exclusive focus on title effects */}
      <div 
        className="w-full pt-12 md:pt-16 pb-20 md:pb-32 text-center relative z-20 cursor-default pointer-events-auto"
        onMouseEnter={() => setIsTitleHovered(true)}
        onMouseLeave={() => setIsTitleHovered(false)}
      >
        <InteractiveBackgroundTitle scrollYProgress={scrollYProgress} mouseX={mouseX} mouseY={mouseY} />
      </div>

      {/* Robot Interaction Zone - Only active when title is not hovered */}
      <div 
        className={`relative flex-1 w-full flex items-center justify-center overflow-visible z-10 transition-all duration-700 ${
          isTitleHovered ? 'pointer-events-none opacity-40 blur-[2px]' : 'pointer-events-auto opacity-100 blur-0'
        }`}
      >
        <motion.div 
          style={{ scale, opacity }}
          className="w-full h-[70vh] md:h-[85vh]"
        >
          <iframe 
            src='https://my.spline.design/nexbotrobotcharacterconcept-AwIw7KZBfTCOYkorUHYnM6Ee/' 
            frameBorder='0' 
            width='100%' 
            height='100%'
            className="origin-center"
          ></iframe>
        </motion.div>
        
        {/* Bottom fade and mask */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-lg-dark to-transparent z-20 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-48 h-12 bg-lg-dark z-30 pointer-events-none" />
      </div>
    </section>
  );
};

const SpotlightSpan = ({ children, mouseX, mouseY }: { children: React.ReactNode, mouseX: any, mouseY: any }) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const localX = useTransform(mouseX, (x: number) => {
    if (!containerRef.current) return 0;
    return x - containerRef.current.getBoundingClientRect().left;
  });
  const localY = useTransform(mouseY, (y: number) => {
    if (!containerRef.current) return 0;
    return y - containerRef.current.getBoundingClientRect().top;
  });

  const maskImage = useMotionTemplate`radial-gradient(circle 100px at ${localX}px ${localY}px, black 30%, transparent 100%)`;

  return (
    <span 
      ref={containerRef} 
      className="relative inline-block group cursor-default"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="text-white transition-opacity duration-500">
        {children}
      </span>
      <motion.span 
        style={{ 
          color: "#A50034",
          opacity: isHovered ? 1 : 0,
          maskImage: maskImage,
          WebkitMaskImage: maskImage,
        }}
        className="absolute top-0 left-0 w-full pointer-events-none transition-opacity duration-300"
      >
        {children}
      </motion.span>
    </span>
  );
};

const Hero = ({ mouseX, mouseY }: { mouseX: any, mouseY: any }) => (
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
          <SpotlightSpan mouseX={mouseX} mouseY={mouseY}>AI Native</SpotlightSpan>의 미래
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

const InteractiveTitle = ({ children, className = "", dark = false }: { children: React.ReactNode, className?: string, dark?: boolean }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useSpring(0, { damping: 30, stiffness: 200 });
  const mouseY = useSpring(0, { damping: 30, stiffness: 200 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const maskImage = useMotionTemplate`radial-gradient(circle 120px at ${mouseX}px ${mouseY}px, black 0%, transparent 100%)`;

  return (
    <div 
      ref={containerRef} 
      className={`relative inline-block group cursor-default ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2 className={`transition-colors duration-500 ${dark ? 'text-zinc-400' : 'text-zinc-500'}`}>
        {children}
      </h2>
      <motion.h2 
        style={{ 
          color: "#A50034",
          opacity: isHovered ? 1 : 0,
          maskImage: maskImage,
          WebkitMaskImage: maskImage,
        }}
        className="absolute top-0 left-0 w-full pointer-events-none transition-opacity duration-300"
      >
        {children}
      </motion.h2>
    </div>
  );
};

const JourneySection = () => (
  <section id="journey" className="py-24 md:py-40 px-6 bg-zinc-900 text-white relative overflow-hidden">
    {/* Sophisticated background variations */}
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    <div className="absolute -left-20 top-40 w-96 h-96 bg-lg-red/5 blur-[120px] rounded-full pointer-events-none" />
    <div className="absolute -right-20 bottom-20 w-80 h-80 bg-white/5 blur-[100px] rounded-full pointer-events-none" />
    
    <div className="max-w-7xl mx-auto relative z-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 md:mb-32 gap-8">
        <div>
          <InteractiveTitle dark={true} className="text-5xl md:text-7xl font-black tracking-tighter mb-8">
            The 6-Day Journey
          </InteractiveTitle>
          <p className="text-zinc-400 font-bold text-xl md:text-2xl italic">리더들이 거쳐온 3단계의 핵심 모듈</p>
        </div>
        <div className="flex gap-4">
          <div className="w-20 h-1.5 bg-lg-red rounded-full shadow-[0_0_15px_rgba(165,0,52,0.5)]" />
          <div className="w-8 h-1.5 bg-white/10 rounded-full" />
          <div className="w-8 h-1.5 bg-white/10 rounded-full" />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {JOURNEY_MODULES.map((module, idx) => (
          <motion.div 
            key={module.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, duration: 0.8, ease: "circOut" }}
            className="bg-zinc-950/50 backdrop-blur-xl p-12 rounded-[48px] border border-white/5 hover:border-lg-red/30 transition-all group relative overflow-hidden shadow-2xl"
          >
            {/* Liquid Gradient Accent */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-lg-red/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-bl-full" />
            
            <div className="flex items-center gap-6 mb-10">
              <div className="w-16 h-16 bg-zinc-900 rounded-[24px] flex items-center justify-center text-lg-red font-black text-2xl group-hover:bg-lg-red group-hover:text-white transition-all duration-500 shadow-inner border border-white/5">
                {module.id}
              </div>
              <h3 className="text-2xl font-black tracking-tighter leading-tight text-white">{module.title}</h3>
            </div>
            
            <p className="text-lg font-bold text-zinc-400 mb-10 leading-relaxed group-hover:text-zinc-300 transition-colors">
              {module.description}
            </p>
            
            <ul className="space-y-5">
              {module.details.map((detail, i) => (
                <li key={i} className="flex items-start gap-4 text-sm font-bold text-zinc-500 group-hover:text-zinc-400 transition-colors">
                  <div className="w-2 h-2 bg-lg-red/40 rounded-full mt-1.5 shrink-0 group-hover:bg-lg-red group-hover:scale-125 transition-all" />
                  {detail}
                </li>
              ))}
            </ul>

            {/* Bottom Shine Effect */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-lg-red/0 to-transparent group-hover:via-lg-red/40 transition-all duration-1000" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const AssetModal = ({ asset, onClose }: { asset: Asset; onClose: () => void }) => (
  <AnimatePresence>
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/90 backdrop-blur-xl"
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative w-full max-w-[95vw] lg:max-w-[90vw] bg-zinc-950 rounded-[32px] overflow-hidden border border-white/10 shadow-2xl flex flex-col h-[90vh]"
      >
        <div className="p-6 border-b border-white/5 flex items-center justify-between bg-zinc-900/50">
          <div>
            <h2 className="text-xl font-black text-white">{asset.title}</h2>
            <p className="text-[10px] font-bold text-lg-red uppercase tracking-widest">{asset.author}</p>
          </div>
          <button 
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-white/50 hover:bg-lg-red hover:text-white transition-all"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="flex-1 overflow-auto p-4 md:p-8 flex items-center justify-center bg-black">
          {asset.type === 'video' && (
            <div className="w-full h-full flex items-center justify-center bg-black">
              <video 
                src={asset.url} 
                controls 
                autoPlay 
                className="max-w-full max-h-full rounded-xl shadow-2xl"
              />
            </div>
          )}
          {asset.type === 'audio' && (
            <div className="flex flex-col items-center gap-8 w-full max-w-md">
              <div className="w-64 h-64 rounded-3xl bg-lg-red/10 flex items-center justify-center border border-lg-red/20 shadow-2xl">
                <Play size={80} fill="#A50034" className="text-lg-red" />
              </div>
              <audio src={asset.url} controls autoPlay className="w-full" />
            </div>
          )}
          {asset.type === 'image' && (
            <img src={asset.url || asset.thumbnail} className="max-w-full max-h-full object-contain rounded-xl" referrerPolicy="no-referrer" />
          )}
          {asset.type === 'web' && (
            <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-900 p-8">
              <div className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 group mb-8">
                <img 
                  src={asset.thumbnail} 
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity" 
                  referrerPolicy="no-referrer" 
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-20 h-20 bg-lg-red rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(165,0,52,0.4)]">
                    <Globe size={40} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-2">{asset.title}</h3>
                  <p className="text-white/40 text-sm max-w-md mb-8">보안 정책상 외부 사이트는 팝업 내 임베드가 제한될 수 있습니다. 아래 버튼을 눌러 새 창에서 확인해 주세요.</p>
                  <a 
                    href={asset.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-10 py-4 bg-lg-red text-white font-black rounded-full hover:shadow-[0_0_30px_rgba(165,0,52,0.4)] transition-all flex items-center gap-2"
                  >
                    포트폴리오 새 창에서 열기 <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div className="p-6 bg-zinc-900/50 border-t border-white/5">
          <p className="text-sm text-white/60 leading-relaxed max-w-3xl mx-auto text-center italic">
            "{asset.description}"
          </p>
        </div>
      </motion.div>
    </div>
  </AnimatePresence>
);

const ShowcaseSection = ({ onSelectAsset }: { onSelectAsset: (asset: Asset) => void }) => (
  <section id="showcase" className="py-24 md:py-40 px-6 bg-zinc-950 relative overflow-hidden">
    {/* Background variations */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(165,0,52,0.03),transparent_50%)]" />
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    
    <div className="max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-20 md:mb-24">
        <InteractiveTitle dark={true} className="text-4xl md:text-5xl font-black tracking-tight mb-6">
          AX Multi-modal Assets
        </InteractiveTitle>
        <p className="text-zinc-500 font-bold text-lg">Veo, Lyria, Gemini 모델로 탄생한 혁신의 결과물</p>
      </div>

      <div className="space-y-20 md:space-y-32">
        {/* Videos */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
              <Play size={24} className="text-lg-red" />
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-white">Strategy Videos</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {ASSETS.filter(a => a.type === 'video').map(asset => (
              <VideoCard key={asset.id} asset={asset} onClick={() => onSelectAsset(asset)} />
            ))}
          </div>
        </div>

        {/* Music */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
              <Music size={24} className="text-lg-red" />
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-white">Leader's Philosophy Tracks</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {ASSETS.filter(a => a.type === 'audio').map(asset => (
              <AudioCard key={asset.id} asset={asset} onClick={() => onSelectAsset(asset)} />
            ))}
          </div>
        </div>

        {/* Images & Web */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
                <Eye size={24} className="text-lg-red" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-white">Vision Boards</h3>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {ASSETS.filter(a => a.type === 'image').map(asset => (
                <ImageCard key={asset.id} asset={asset} onClick={() => onSelectAsset(asset)} />
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
                <Globe size={24} className="text-lg-red" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-white">Web Portfolios</h3>
            </div>
            <div className="grid grid-cols-1 gap-8">
              {ASSETS.filter(a => a.type === 'web').map(asset => (
                <WebCard key={asset.id} asset={asset} onClick={() => onSelectAsset(asset)} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const IntelligenceHub = () => (
  <section id="intelligence" className="py-24 md:py-40 px-6 bg-zinc-900 text-white overflow-hidden relative">
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    <div className="absolute top-0 right-0 w-1/2 h-full opacity-30 pointer-events-none">
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_50%,#A50034_0%,transparent_70%)]" />
    </div>
    <div className="max-w-7xl mx-auto relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <InteractiveTitle dark={true} className="text-3xl md:text-4xl font-black tracking-tight mb-6">
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
              <motion.a 
                key={i}
                href={agent.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 5, backgroundColor: 'rgba(255,255,255,0.08)' }}
                className="flex gap-5 p-5 bg-white/5 border border-white/10 rounded-2xl transition-all group"
              >
                <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-white/10 bg-zinc-800">
                  <img 
                    src={agent.avatar} 
                    alt={agent.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h5 className="font-bold text-sm md:text-base group-hover:text-lg-red transition-colors">{agent.name}</h5>
                    <span className="text-[9px] px-2 py-0.5 bg-lg-red/20 border border-lg-red/30 rounded text-lg-red font-bold uppercase tracking-tighter">{agent.role}</span>
                  </div>
                  <p className="text-[11px] text-white/40 leading-relaxed line-clamp-2">{agent.description}</p>
                </div>
              </motion.a>
            ))}
          </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-32 px-6 bg-zinc-950 border-t border-white/5">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center gap-10">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-4 mb-8">
            <DynamicLogo />
            <h1 className="text-2xl font-black tracking-tighter text-white uppercase">AX CAMP FOR LEADERS</h1>
          </div>
          <p className="text-base text-zinc-500 font-medium max-w-2xl leading-relaxed">
            리더십의 본질을 지키며 AI로 역량을 증강(Augmentation)하는 LG의 새로운 일하는 방식.<br className="hidden md:block" />
            LG AI Native Stage에 오신 것을 환영합니다.
          </p>
        </div>
      </div>
      <div className="mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] text-zinc-600 font-bold tracking-wider">© 2026 LG DIGITAL INNOVATION TEAM. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-8 text-[10px] text-zinc-600 font-bold tracking-wider">
          <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
          <a href="#" className="hover:text-white transition-colors">TERMS OF SERVICE</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);

  // Unified high-performance mouse tracking
  const mouseX = useSpring(0, { damping: 25, stiffness: 150, mass: 0.5 });
  const mouseY = useSpring(0, { damping: 25, stiffness: 150, mass: 0.5 });
  const glowX = useSpring(0, { damping: 40, stiffness: 80, mass: 1.5 });
  const glowY = useSpring(0, { damping: 40, stiffness: 80, mass: 1.5 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      glowX.set(e.clientX);
      glowY.set(e.clientY);
      
      // Sync to CSS variables for non-React components or complex masks
      document.documentElement.style.setProperty('--raw-mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--raw-mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-lg-red selection:text-white">
      <MouseFollower mouseX={mouseX} mouseY={mouseY} glowX={glowX} glowY={glowY} />
      <Header onOpenModal={() => setIsModalOpen(true)} mouseX={mouseX} mouseY={mouseY} />
      <main>
        <RobotStage mouseX={mouseX} mouseY={mouseY} />
        <Hero mouseX={mouseX} mouseY={mouseY} />
        <JourneySection />
        <ShowcaseSection onSelectAsset={(asset) => setSelectedAsset(asset)} />
        <IntelligenceHub />
        
        {/* Closing Section */}
        <section id="vision" className="py-24 md:py-40 px-6 text-center bg-zinc-950 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(165,0,52,0.05),transparent_70%)]" />
          
          <div className="max-w-4xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <InteractiveTitle dark={true} className="text-4xl md:text-7xl font-black tracking-tight mb-10">
                LG <span className="text-lg-red">AI Native</span> Stage
              </InteractiveTitle>
              <p className="text-xl md:text-2xl text-zinc-400 mb-16 leading-relaxed px-4 font-medium italic">
                "기술은 도구일 뿐, 혁신의 완성은 리더의 통찰력에서 시작됩니다."
              </p>
              
              {/* YouTube Video Embed */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative max-w-4xl mx-auto mb-20 aspect-video rounded-[32px] overflow-hidden shadow-[0_40px_100px_rgba(165,0,52,0.2)] border border-white/10"
              >
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/E3lR-QdC8gY" 
                  title="LG AI Native Stage Video" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                  className="absolute inset-0"
                ></iframe>
              </motion.div>

              <div className="w-24 h-1.5 bg-lg-red mx-auto mb-16 rounded-full" />
              <p className="text-xs md:text-base font-black tracking-[0.4em] text-zinc-500 uppercase">
                Augmenting Leadership with AI
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />

      <PadletModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      {selectedAsset && <AssetModal asset={selectedAsset} onClose={() => setSelectedAsset(null)} />}
    </div>
  );
}
