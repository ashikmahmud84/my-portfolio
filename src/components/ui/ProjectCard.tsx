import React, { useState } from 'react';
import {
  Github,
  ExternalLink,
  CheckCircle2,
  Lock,
  Sparkles,
  Layers,
  Code2
} from 'lucide-react';
import { Project } from '../../data/projects';
import { Badge } from './Badge';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [imageError, setImageError] = useState(false);

  const hasGithub = Boolean(project.githubUrl && project.githubUrl.trim().length > 0);
  const hasLive = Boolean(project.liveUrl && project.liveUrl.trim().length > 0);

  return (
    <article className="group relative rounded-2xl bg-[#0d1018]/90 backdrop-blur-md border border-white/[0.08] hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_36px_-6px_rgba(16,185,129,0.12)] flex flex-col h-full overflow-hidden">
      {/* Featured Accent Gradient Glow */}
      {project.featured && (
        <div
          className="absolute -top-12 -right-12 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"
          aria-hidden="true"
        />
      )}

      {/* Top Browser Header Bar */}
      <div className="px-4 py-2.5 bg-[#0b0e16] border-b border-white/[0.06] flex items-center justify-between select-none">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70 border border-rose-500/30" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70 border border-amber-500/30" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70 border border-emerald-500/30" />
        </div>

        <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-0.5 rounded-md bg-black/40 border border-white/[0.06] text-[10px] font-mono text-neutral-400 max-w-[130px] sm:max-w-[220px] truncate">
          <Lock className="w-2.5 h-2.5 text-neutral-500 shrink-0" />
          <span className="truncate">{project.mockUrl || `${project.id}.dev`}</span>
        </div>

        {project.featured ? (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono text-emerald-400 font-medium">
            <Sparkles className="w-2.5 h-2.5 text-emerald-400" />
            Featured
          </span>
        ) : (
          <div className="w-12" />
        )}
      </div>

      {/* Project Image Container with Consistent Aspect Ratio */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#07090e] border-b border-white/[0.06]">
        {!imageError && project.image ? (
          <img
            src={project.image}
            alt={`${project.title} preview`}
            loading="lazy"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
        ) : (
          /* Graceful Fallback if image path is not yet populated */
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-[#0e1320] to-[#080b12]">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-3">
              <Layers className="w-6 h-6 text-emerald-400" />
            </div>
            <p className="text-sm font-semibold text-neutral-200">{project.title}</p>
            <p className="text-xs font-mono text-neutral-500 mt-1">/src/assets/projects/{project.id}.svg</p>
          </div>
        )}

        {/* Ambient Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1018] via-transparent to-transparent opacity-40 pointer-events-none" />
      </div>

      {/* Project Details Content Area */}
      <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
        <div>
          {/* Category Badge & Architecture Label */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <Badge
              variant={project.category === 'Full Stack' ? 'accent' : 'default'}
              size="sm"
              className="font-mono text-[11px]"
            >
              {project.category}
            </Badge>

            <span className="text-[11px] font-mono text-neutral-500 flex items-center gap-1">
              <Code2 className="w-3 h-3 text-neutral-500" />
              Verified Project
            </span>
          </div>

          {/* Project Title */}
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-100 group-hover:text-emerald-400 transition-colors mb-2.5">
            {project.title}
          </h3>

          {/* Short Description */}
          <p className="text-sm text-neutral-300 leading-relaxed font-normal mb-5">
            {project.shortDescription || project.description}
          </p>

          {/* Feature Highlights */}
          {project.features && project.features.length > 0 && (
            <div className="mb-6 space-y-2">
              <p className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 font-semibold">
                Key Highlights:
              </p>
              <ul className="space-y-1.5" aria-label="Feature highlights">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Technologies and Action Buttons */}
        <div>
          {/* Technology Badges */}
          <div className="pt-4 pb-5 border-t border-white/[0.08] flex flex-wrap gap-1.5" aria-label="Technologies used">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md bg-[#121622] border border-white/[0.08] text-[11px] font-mono text-neutral-300 group-hover:border-white/20 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Conditional Action Buttons: Render ONLY when URLs are available */}
          {(hasGithub || hasLive) && (
            <div className={`grid gap-3 pt-2 ${hasGithub && hasLive ? 'grid-cols-2' : 'grid-cols-1'}`}>
              {hasGithub && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 hover:border-emerald-500/40 text-xs font-medium text-neutral-200 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090d]"
                  aria-label={`View ${project.title} GitHub repository in a new tab`}
                >
                  <Github className="w-4 h-4 text-neutral-300" aria-hidden="true" />
                  <span>GitHub</span>
                </a>
              )}

              {hasLive && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 hover:border-emerald-400 text-xs font-medium text-emerald-300 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090d]"
                  aria-label={`Open ${project.title} live demo in a new tab`}
                >
                  <ExternalLink className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
};
