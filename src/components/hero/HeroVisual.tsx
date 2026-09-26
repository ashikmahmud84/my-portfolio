import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Terminal, Copy, Check, Code2, User, Sparkles } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import profileImg from '../../assets/profile.jpg';
import { developerProfile } from '../../data/developer';

export const HeroVisual: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'photo' | 'code'>('photo');
  const [imgError, setImgError] = useState(false);
  const [copied, setCopied] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const codeString = `const developer = {
  name: "${developerProfile.name}",
  role: "${developerProfile.role}",
  subRole: "${developerProfile.subRole}",
  location: "${developerProfile.location}",
  stack: [
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS"
  ],
  status: "${developerProfile.status}"
};`;

  const handleCopy = () => {
    navigator.clipboard?.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full max-w-md lg:max-w-none mx-auto">
      {/* Background ambient halo glow */}
      <div
        className="absolute -inset-2 bg-gradient-to-r from-emerald-500/15 via-teal-500/10 to-cyan-500/15 rounded-3xl blur-2xl opacity-70 pointer-events-none"
        aria-hidden="true"
      />

      {/* Floating Tech Badge 1 - Top Right: React & Next.js */}
      <motion.div
        animate={shouldReduceMotion ? {} : { y: [-3, 3, -3] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-3.5 -right-2 sm:-right-3 z-30 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0f131d]/95 backdrop-blur-md border border-white/10 shadow-lg shadow-black/40 text-xs font-mono text-neutral-200"
      >
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
        <span>React • Next.js</span>
      </motion.div>

      {/* Floating Tech Badge 2 - Bottom Left: Node & MongoDB */}
      <motion.div
        animate={shouldReduceMotion ? {} : { y: [3, -3, 3] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
        className="absolute -bottom-3.5 -left-2 sm:-left-3 z-30 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0f131d]/95 backdrop-blur-md border border-white/10 shadow-lg shadow-black/40 text-xs font-mono text-neutral-200"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>Node.js • MongoDB</span>
      </motion.div>

      {/* Main Glass Showcase Card */}
      <GlassCard
        variant="default"
        className="relative z-10 p-0 overflow-hidden border-white/[0.1] bg-[#0c0f17]/95 shadow-2xl rounded-2xl"
      >
        {/* Card Titlebar with View Switcher Tabs */}
        <div className="flex items-center justify-between px-2.5 sm:px-4 py-2 sm:py-2.5 bg-[#090b11] border-b border-white/[0.08] select-none gap-2">
          {/* Window control dots */}
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/80 inline-block" />
          </div>

          {/* Tab Switcher: Photo & Code */}
          <div className="flex items-center p-0.5 rounded-lg bg-[#121622] border border-white/[0.06] text-[11px] sm:text-xs font-mono">
            <button
              type="button"
              onClick={() => setActiveTab('photo')}
              className={`flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1 rounded-md transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'photo'
                  ? 'bg-emerald-500/15 text-emerald-300 font-semibold shadow-sm border border-emerald-500/30'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
              aria-label="View Profile Photo"
            >
              <User className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400 shrink-0" />
              <span>Developer</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('code')}
              className={`flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1 rounded-md transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'code'
                  ? 'bg-emerald-500/15 text-emerald-300 font-semibold shadow-sm border border-emerald-500/30'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
              aria-label="View Developer Code"
            >
              <Code2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cyan-400 shrink-0" />
              <span>developer.js</span>
            </button>
          </div>

          {/* Right Action / Status */}
          <div className="flex items-center shrink-0">
            {activeTab === 'code' ? (
              <button
                type="button"
                onClick={handleCopy}
                className="p-1.5 rounded text-neutral-400 hover:text-neutral-200 hover:bg-white/5 transition-colors cursor-pointer"
                title="Copy code snippet"
                aria-label="Copy snippet"
              >
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            ) : (
              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400">
                <Sparkles className="w-3 h-3 text-emerald-400" />
                <span>Verified</span>
              </span>
            )}
          </div>
        </div>

        {/* TAB 1: Profile Photo View */}
        {activeTab === 'photo' && (
          <div className="p-4 sm:p-5 bg-[#090c13] flex flex-col items-center justify-center">
            <div className="relative w-full aspect-[4/4.6] sm:aspect-[4/4.5] max-w-[340px] rounded-xl overflow-hidden border border-white/[0.1] bg-[#0c1017] shadow-inner group">
              {!imgError ? (
                <img
                  src={profileImg}
                  alt={`${developerProfile.name} - ${developerProfile.role}`}
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="eager"
                />
              ) : (
                /* Fallback if image is missing or failed */
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-[#101524] to-[#0a0d16]">
                  <div className="w-20 h-20 rounded-full bg-emerald-500/10 border-2 border-emerald-500/30 flex items-center justify-center font-mono text-2xl font-bold text-emerald-400 mb-4 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                    AA
                  </div>
                  <h4 className="text-base font-bold text-neutral-100 mb-1">
                    {developerProfile.name}
                  </h4>
                  <p className="text-xs font-mono text-emerald-400 mb-3">
                    {developerProfile.role}
                  </p>
                  <span className="text-[11px] text-neutral-400 font-mono px-3 py-1.5 rounded bg-white/[0.04] border border-white/[0.08]">
                    Place your photo at /src/assets/profile.jpg
                  </span>
                </div>
              )}

              {/* Bottom Gradient Shade & Name Plate Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-3.5 bg-gradient-to-t from-[#080a0f] via-[#080a0f]/80 to-transparent flex flex-col justify-end">
                <div className="flex items-center justify-between gap-2">
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm sm:text-base font-bold text-neutral-100 tracking-tight leading-tight truncate">
                      {developerProfile.name}
                    </h3>
                    <p className="text-[11px] sm:text-xs font-mono text-emerald-400 truncate">
                      {developerProfile.subRole || developerProfile.role}
                    </p>
                  </div>
                  <div className="shrink-0 px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.08] backdrop-blur-md border border-white/[0.1] text-neutral-300">
                    BD
                  </div>
                </div>
              </div>
            </div>

            
          </div>
        )}

        {/* TAB 2: Developer Code View */}
        {activeTab === 'code' && (
          <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed bg-[#0a0c13] overflow-x-auto min-h-[340px]">
            <div className="flex gap-4">
              {/* Line numbers */}
              <div
                className="select-none text-neutral-600 text-right font-mono text-xs space-y-0.5 pt-0.5"
                aria-hidden="true"
              >
                <div>01</div>
                <div>02</div>
                <div>03</div>
                <div>04</div>
                <div>05</div>
                <div>06</div>
                <div>07</div>
                <div>08</div>
                <div>09</div>
                <div>10</div>
                <div>11</div>
                <div>12</div>
                <div>13</div>
                <div>14</div>
                <div>15</div>
                <div>16</div>
              </div>

              {/* Formatted Code Block */}
              <pre className="font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto text-neutral-300">
                <code>
                  <div>
                    <span className="text-emerald-400">const</span>{' '}
                    <span className="text-neutral-100 font-semibold">developer</span>{' '}
                    <span className="text-neutral-400">=</span> &#123;
                  </div>
                  <div className="pl-4">
                    <span className="text-cyan-300/90">name</span>
                    <span className="text-neutral-400">:</span>{' '}
                    <span className="text-emerald-300">&quot;{developerProfile.name}&quot;</span>
                    <span className="text-neutral-400">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-cyan-300/90">role</span>
                    <span className="text-neutral-400">:</span>{' '}
                    <span className="text-emerald-300">&quot;{developerProfile.role}&quot;</span>
                    <span className="text-neutral-400">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-cyan-300/90">subRole</span>
                    <span className="text-neutral-400">:</span>{' '}
                    <span className="text-emerald-300">&quot;{developerProfile.subRole}&quot;</span>
                    <span className="text-neutral-400">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-cyan-300/90">location</span>
                    <span className="text-neutral-400">:</span>{' '}
                    <span className="text-emerald-300">&quot;{developerProfile.location}&quot;</span>
                    <span className="text-neutral-400">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-cyan-300/90">stack</span>
                    <span className="text-neutral-400">:</span> [
                  </div>
                  <div className="pl-8 text-emerald-300/90">
                    <div>&quot;React&quot;,</div>
                    <div>&quot;Next.js&quot;,</div>
                    <div>&quot;Node.js&quot;,</div>
                    <div>&quot;Express.js&quot;,</div>
                    <div>&quot;MongoDB&quot;</div>
                  </div>
                  <div className="pl-4">
                    ]<span className="text-neutral-400">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-cyan-300/90">status</span>
                    <span className="text-neutral-400">:</span>{' '}
                    <span className="text-emerald-300">&quot;{developerProfile.status}&quot;</span>
                  </div>
                  <div>
                    &#125;<span className="text-neutral-400">;</span>
                  </div>
                </code>
              </pre>
            </div>
          </div>
        )}

        {/* Card Footer Status Bar */}
        <div className="px-3 sm:px-4 py-2 sm:py-2.5 bg-[#090b11] border-t border-white/[0.08] flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-neutral-400 gap-2 min-w-0">
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <Terminal className="w-3 h-3 text-emerald-400" />
            <span className="text-neutral-300">MERN Stack</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <span className="hidden md:inline">JavaScript</span>
            <span className="hidden md:inline text-white/20">•</span>
            <span className="text-emerald-400 flex items-center gap-1.5 min-w-0 truncate">
              <span className="w-1.5 h-1.5 shrink-0 rounded-full bg-emerald-400 animate-pulse" />
              <span className="truncate">Available</span>
              <span className="hidden xs:inline truncate">for Work</span>
            </span>
          </div>
        </div>
      </GlassCard>
    </div>
  );
};
