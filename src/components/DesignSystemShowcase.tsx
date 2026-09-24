import React, { useState } from 'react';
import { Layers, ChevronDown, ChevronUp, Github, Linkedin, Mail, ArrowRight, Sparkles } from 'lucide-react';
import { Container } from './ui/Container';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { GlassCard } from './ui/GlassCard';
import { SocialIconButton } from './ui/SocialIconButton';

export const DesignSystemShowcase: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-12 border-t border-white/[0.08] bg-[#090b11]/80">
      <Container size="wide">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-emerald-400">STEP 1 DELIVERABLE</span>
                <span className="text-white/20">•</span>
                <Badge variant="accent" size="sm">Design System</Badge>
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-neutral-200">
                Core UI Component Foundation & Design Tokens
              </h3>
            </div>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsOpen(!isOpen)}
            rightIcon={isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          >
            {isOpen ? 'Hide Design Tokens' : 'Inspect Tokens & Components'}
          </Button>
        </div>

        {isOpen && (
          <div className="mt-8 pt-6 border-t border-white/[0.06] space-y-8 animate-in fade-in duration-300">
            {/* Color Palette Tokens */}
            <div>
              <h4 className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-3">
                Centralized Color Tokens
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-[#08090d] border border-white/10">
                  <div className="w-full h-8 rounded bg-[#08090d] border border-white/15 mb-2" />
                  <span className="font-semibold text-neutral-200 block">Near Black</span>
                  <span className="font-mono text-neutral-400 text-[10px]">#08090d</span>
                </div>
                <div className="p-3 rounded-lg bg-[#10131c] border border-white/10">
                  <div className="w-full h-8 rounded bg-[#10131c] border border-white/15 mb-2" />
                  <span className="font-semibold text-neutral-200 block">Dark Charcoal</span>
                  <span className="font-mono text-neutral-400 text-[10px]">#10131c</span>
                </div>
                <div className="p-3 rounded-lg bg-[#131722] border border-white/10">
                  <div className="w-full h-8 rounded bg-[#131722] border border-white/15 mb-2" />
                  <span className="font-semibold text-neutral-200 block">Card Surface</span>
                  <span className="font-mono text-neutral-400 text-[10px]">#131722</span>
                </div>
                <div className="p-3 rounded-lg bg-[#10131c] border border-white/10">
                  <div className="w-full h-8 rounded bg-emerald-500 mb-2" />
                  <span className="font-semibold text-neutral-200 block">Accent Emerald</span>
                  <span className="font-mono text-neutral-400 text-[10px]">#10b981</span>
                </div>
                <div className="p-3 rounded-lg bg-[#10131c] border border-white/10">
                  <div className="w-full h-8 rounded bg-[#f8fafc] mb-2" />
                  <span className="font-semibold text-neutral-200 block">High-Contrast Text</span>
                  <span className="font-mono text-neutral-400 text-[10px]">#f8fafc</span>
                </div>
                <div className="p-3 rounded-lg bg-[#10131c] border border-white/10">
                  <div className="w-full h-8 rounded bg-[#94a3b8] mb-2" />
                  <span className="font-semibold text-neutral-200 block">Muted Gray Text</span>
                  <span className="font-mono text-neutral-400 text-[10px]">#94a3b8</span>
                </div>
              </div>
            </div>

            {/* Reusable Buttons */}
            <div>
              <h4 className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-3">
                Button Component Variants
              </h4>
              <div className="flex flex-wrap items-center gap-3">
                <Button variant="primary" size="sm" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
                  Primary Action
                </Button>
                <Button variant="secondary" size="sm">
                  Secondary Action
                </Button>
                <Button variant="outline" size="sm">
                  Outline Variant
                </Button>
                <Button variant="ghost" size="sm">
                  Ghost Button
                </Button>
                <Button variant="primary" size="sm" disabled>
                  Disabled State
                </Button>
              </div>
            </div>

            {/* Reusable Badges */}
            <div>
              <h4 className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-3">
                Badge Component Variants
              </h4>
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="status" pulseDot>
                  Active Status
                </Badge>
                <Badge variant="accent">
                  Accent Tech
                </Badge>
                <Badge variant="default">
                  Default Token
                </Badge>
                <Badge variant="outline">
                  Outline Wireframe
                </Badge>
              </div>
            </div>

            {/* Reusable Cards & Socials */}
            <div>
              <h4 className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-3">
                GlassCard & SocialIconButton Components
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <GlassCard variant="default">
                  <span className="text-xs font-mono text-emerald-400 block mb-1">GlassCard (default)</span>
                  <p className="text-xs text-neutral-300">
                    Semi-transparent backdrop with 1px border-white/8 and dark elevation shadow.
                  </p>
                </GlassCard>
                <GlassCard variant="interactive" hoverGlow>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-mono text-emerald-400 block mb-1">GlassCard (interactive)</span>
                      <p className="text-xs text-neutral-300">Hover elevation and subtle emerald halo glow.</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <SocialIconButton href="#" icon={<Github className="w-4 h-4" />} label="Demo" />
                      <SocialIconButton href="#" icon={<Linkedin className="w-4 h-4" />} label="Demo" />
                      <SocialIconButton href="#" icon={<Mail className="w-4 h-4" />} label="Demo" />
                    </div>
                  </div>
                </GlassCard>
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};
