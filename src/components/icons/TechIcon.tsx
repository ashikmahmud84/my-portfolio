import React from 'react';

export interface TechIconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
  size?: number | string;
  className?: string;
  colored?: boolean;
}

export interface BrandMeta {
  brandColor: string;
  bgGlow: string;
  borderColor: string;
}

export const getBrandMeta = (name: string): BrandMeta => {
  const n = name.toLowerCase().trim();

  if (n.includes('react')) {
    return {
      brandColor: '#61DAFB',
      bgGlow: 'rgba(97, 218, 251, 0.15)',
      borderColor: 'rgba(97, 218, 251, 0.35)'
    };
  }
  if (n.includes('next')) {
    return {
      brandColor: '#FFFFFF',
      bgGlow: 'rgba(255, 255, 255, 0.12)',
      borderColor: 'rgba(255, 255, 255, 0.3)'
    };
  }
  if (n.includes('javascript') || n === 'js') {
    return {
      brandColor: '#F7DF1E',
      bgGlow: 'rgba(247, 223, 30, 0.15)',
      borderColor: 'rgba(247, 223, 30, 0.35)'
    };
  }
  if (n.includes('typescript') || n === 'ts') {
    return {
      brandColor: '#3178C6',
      bgGlow: 'rgba(49, 120, 198, 0.15)',
      borderColor: 'rgba(49, 120, 198, 0.35)'
    };
  }
  if (n.includes('node')) {
    return {
      brandColor: '#68A063',
      bgGlow: 'rgba(104, 160, 99, 0.15)',
      borderColor: 'rgba(104, 160, 99, 0.35)'
    };
  }
  if (n.includes('express')) {
    return {
      brandColor: '#F3F4F6',
      bgGlow: 'rgba(243, 244, 246, 0.12)',
      borderColor: 'rgba(243, 244, 246, 0.3)'
    };
  }
  if (n.includes('mongo')) {
    return {
      brandColor: '#47A248',
      bgGlow: 'rgba(71, 162, 72, 0.15)',
      borderColor: 'rgba(71, 162, 72, 0.35)'
    };
  }
  if (n.includes('firebase')) {
    return {
      brandColor: '#FFA000',
      bgGlow: 'rgba(255, 160, 0, 0.15)',
      borderColor: 'rgba(255, 160, 0, 0.35)'
    };
  }
  if (n.includes('tailwind')) {
    return {
      brandColor: '#38BDF8',
      bgGlow: 'rgba(56, 189, 248, 0.15)',
      borderColor: 'rgba(56, 189, 248, 0.35)'
    };
  }
  if (n === 'git') {
    return {
      brandColor: '#F05032',
      bgGlow: 'rgba(240, 80, 50, 0.15)',
      borderColor: 'rgba(240, 80, 50, 0.35)'
    };
  }
  if (n.includes('github')) {
    return {
      brandColor: '#FFFFFF',
      bgGlow: 'rgba(255, 255, 255, 0.12)',
      borderColor: 'rgba(255, 255, 255, 0.3)'
    };
  }
  if (n.includes('html')) {
    return {
      brandColor: '#E34F26',
      bgGlow: 'rgba(227, 79, 38, 0.15)',
      borderColor: 'rgba(227, 79, 38, 0.35)'
    };
  }
  if (n.includes('css')) {
    return {
      brandColor: '#1572B6',
      bgGlow: 'rgba(21, 114, 182, 0.15)',
      borderColor: 'rgba(21, 114, 182, 0.35)'
    };
  }
  if (n.includes('postman')) {
    return {
      brandColor: '#FF6C37',
      bgGlow: 'rgba(255, 108, 55, 0.15)',
      borderColor: 'rgba(255, 108, 55, 0.35)'
    };
  }
  if (n.includes('code') || n.includes('vscode')) {
    return {
      brandColor: '#007ACC',
      bgGlow: 'rgba(0, 122, 204, 0.15)',
      borderColor: 'rgba(0, 122, 204, 0.35)'
    };
  }
  if (n.includes('vercel')) {
    return {
      brandColor: '#FFFFFF',
      bgGlow: 'rgba(255, 255, 255, 0.12)',
      borderColor: 'rgba(255, 255, 255, 0.3)'
    };
  }
  if (n.includes('daisy')) {
    return {
      brandColor: '#1AD1A5',
      bgGlow: 'rgba(26, 209, 165, 0.15)',
      borderColor: 'rgba(26, 209, 165, 0.35)'
    };
  }
  if (n.includes('api') || n.includes('rest')) {
    return {
      brandColor: '#10B981',
      bgGlow: 'rgba(16, 185, 129, 0.15)',
      borderColor: 'rgba(16, 185, 129, 0.35)'
    };
  }

  return {
    brandColor: '#10B981',
    bgGlow: 'rgba(16, 185, 129, 0.1)',
    borderColor: 'rgba(16, 185, 129, 0.25)'
  };
};

export const TechIcon: React.FC<TechIconProps> = ({
  name,
  size = 28,
  className = '',
  colored = true,
  ...props
}) => {
  const n = name.toLowerCase().trim();

  // 1. React
  if (n.includes('react')) {
    return (
      <svg
        viewBox="-11.5 -10.23174 23 20.46348"
        width={size}
        height={size}
        className={className}
        fill="none"
        aria-label="React logo"
        role="img"
        {...props}
      >
        <circle cx="0" cy="0" r="2.05" fill={colored ? '#61DAFB' : 'currentColor'} />
        <g stroke={colored ? '#61DAFB' : 'currentColor'} strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    );
  }

  // 2. Next.js
  if (n.includes('next')) {
    return (
      <svg
        viewBox="0 0 180 180"
        width={size}
        height={size}
        className={className}
        fill="none"
        aria-label="Next.js logo"
        role="img"
        {...props}
      >
        <circle cx="90" cy="90" r="86" fill="#000000" stroke="#333333" strokeWidth="4" />
        <path
          d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
          fill="url(#next_grad_fill)"
        />
        <rect x="115" y="54" width="12" height="72" fill="url(#next_grad_bar)" />
        <defs>
          <linearGradient id="next_grad_fill" x1="109.5" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="next_grad_bar" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  // 3. JavaScript
  if (n.includes('javascript') || n === 'js') {
    return (
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={className}
        aria-label="JavaScript logo"
        role="img"
        {...props}
      >
        <rect width="24" height="24" rx="3.5" fill={colored ? '#F7DF1E' : '#333333'} />
        <path
          fill="#000000"
          d="M22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.221.24 1.05-.645 1.486-1.68 1.486-1.004-.03-1.62-.48-2.146-1.32l-1.801 1.035c.346.735.795 1.275 1.396 1.636 1.154.675 2.895.705 3.944.15 1.305-.675 1.83-1.936 1.47-3.42Zm-8.487-6.223h-2.16v6.237c0 1.29-.075 2.115-.495 2.58-.42.45-1.035.615-1.846.54-.764-.09-1.289-.42-1.664-.885l-.166-.225-1.5 1.11.196.285c.675.93 1.634 1.455 2.894 1.545 1.605.12 3.015-.465 3.75-1.455.51-.705.675-1.68.675-3.495V12.053h-.844Z"
        />
      </svg>
    );
  }

  // 4. TypeScript
  if (n.includes('typescript') || n === 'ts') {
    return (
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={className}
        aria-label="TypeScript logo"
        role="img"
        {...props}
      >
        <rect width="24" height="24" rx="3.5" fill={colored ? '#3178C6' : '#2563EB'} />
        <path
          fill="#FFFFFF"
          d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125Zm10.02 15.352c.24.495.585.87.975 1.14.39.27.84.405 1.35.405.675 0 1.215-.21 1.62-.63.405-.42.607-1 .607-1.74v-7.89h2.348v7.875c0 1.365-.435 2.445-1.305 3.24-.87.795-2.01 1.185-3.42 1.185-1.38 0-2.52-.42-3.42-1.26-.9-.84-1.35-1.92-1.35-3.24V6.637h2.595v8.715Zm-6.525-6.69H7.68v9.915H5.085V8.662H2.22V6.637h5.4v2.025Z"
        />
      </svg>
    );
  }

  // 5. Node.js
  if (n.includes('node')) {
    return (
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={className}
        fill={colored ? '#68A063' : 'currentColor'}
        aria-label="Node.js logo"
        role="img"
        {...props}
      >
        <path d="M12 10.764l3.056-1.765v3.529L12 14.293l-3.056-1.765V9l3.056 1.764zm9.89 1.196L12.025.025.26 6.818v10.364L12.025 24l9.865-5.696v-4.103l-2.072 1.196v2.907L12.025 21.6 2.332 16V8.04l9.693-5.596 9.865 5.696v3.82z" />
      </svg>
    );
  }

  // 6. Express.js
  if (n.includes('express')) {
    return (
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={className}
        fill={colored ? '#F3F4F6' : 'currentColor'}
        aria-label="Express.js logo"
        role="img"
        {...props}
      >
        <path d="M24 18.588l-5.698-5.787 5.66-5.75L22.25 5.34l-5.66 5.75-5.662-5.75-1.713 1.71 5.66 5.75-5.697 5.788 1.713 1.711 5.697-5.787 5.66 5.75 1.752-1.674zM8.077 15.228c-.287.414-.68.74-1.156.963-.475.224-1.026.34-1.624.34-.848 0-1.574-.23-2.14-.678-.567-.449-.949-1.084-1.127-1.875H13c.01-.22.016-.412.016-.566 0-1.284-.366-2.355-1.08-3.16-.714-.806-1.687-1.225-2.87-1.225-1.182 0-2.164.414-2.898 1.225-.734.81-1.124 1.886-1.15 3.18-.01.32.02.67.09 1.037.16.852.518 1.597 1.058 2.2.54.604 1.22.923 2.01 1.066.38.07.75.105 1.09.105 1.07 0 2-.31 2.74-.91.74-.6 1.24-1.42 1.48-2.42h-2.12c-.2.53-.55.97-.99 1.29zm-4.9-4.32c.15-.55.45-.98.89-1.28.44-.3.97-.46 1.57-.46.59 0 1.11.16 1.54.46.43.3.72.73.86 1.28H3.177z" />
      </svg>
    );
  }

  // 7. MongoDB
  if (n.includes('mongo')) {
    return (
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={className}
        fill="none"
        aria-label="MongoDB logo"
        role="img"
        {...props}
      >
        <path
          d="M17.193 9.555c-1.277-4.49-4.374-7.464-4.838-7.903a.573.573 0 0 0-.71 0C11.18 2.091 8.083 5.065 6.807 9.555c-1.385 4.873.344 8.793 2.52 11.233a7.487 7.487 0 0 0 2.298 1.696.53.53 0 0 0 .584-.083c.123-.111.455-.429.791-.871.93-1.226 2.05-3.32 1.493-6.906-.492-3.167-2.316-4.992-2.39-5.066a.375.375 0 0 1 .525-.532c.036.035 2.146 2.093 2.613 5.568.583 4.338-.85 6.945-1.897 8.358 1.458-.87 2.748-2.227 3.513-4.148 1.428-3.585.807-7.45-.664-9.304z"
          fill={colored ? '#47A248' : 'currentColor'}
        />
        <path
          d="M11.85 22.4c.03.02.06.03.09.03.05 0 .1-.02.14-.05.12-.11.45-.43.79-.87.93-1.23 2.05-3.32 1.49-6.91-.49-3.16-2.32-4.99-2.39-5.06a.375.375 0 0 1 .53-.53c.03.03 2.14 2.09 2.61 5.57.58 4.34-.85 6.94-1.9 8.36 1.46-.87 2.75-2.23 3.52-4.15 1.42-3.58.8-7.45-.67-9.3-1.28-4.49-4.37-7.47-4.84-7.91a.573.573 0 0 0-.36-.14v20.95z"
          fill={colored ? '#439944' : 'currentColor'}
          opacity="0.85"
        />
      </svg>
    );
  }

  // 8. Firebase
  if (n.includes('firebase')) {
    return (
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={className}
        fill="none"
        aria-label="Firebase logo"
        role="img"
        {...props}
      >
        <path
          d="M4.654 18.064l6.09-11.46a.754.754 0 0 1 1.347.103l2.25 5.518-9.687 5.839z"
          fill={colored ? '#FFA000' : '#E2E8F0'}
        />
        <path
          d="M19.346 18.064L16.27 6.425a.754.754 0 0 0-1.393-.18L4.654 18.064l7.086 4.025a1.264 1.264 0 0 0 1.26 0l6.346-4.025z"
          fill={colored ? '#F57C00' : '#94A3B8'}
        />
        <path
          d="M12.447 18.66l-3.388-6.44-4.405 5.844 6.786 3.854a1.264 1.264 0 0 0 1.007.037v-3.295z"
          fill={colored ? '#FFCA28' : '#CBD5E1'}
        />
      </svg>
    );
  }

  // 9. Tailwind CSS
  if (n.includes('tailwind')) {
    return (
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={className}
        fill={colored ? '#38BDF8' : 'currentColor'}
        aria-label="Tailwind CSS logo"
        role="img"
        {...props}
      >
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
      </svg>
    );
  }

  // 10. Git
  if (n === 'git') {
    return (
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={className}
        fill={colored ? '#F05032' : 'currentColor'}
        aria-label="Git logo"
        role="img"
        {...props}
      >
        <path d="M23.546 10.93L13.067.452a1.5 1.5 0 0 0-2.126 0L8.808 2.585l3.056 3.056a2.028 2.028 0 0 1 2.553 2.564l3.14 3.14a2.025 2.025 0 1 1-1.066 1.066l-2.92-2.92v4.887a2.025 2.025 0 1 1-1.508 0V9.45a2.026 2.026 0 0 1-1.077-2.656L7.87 3.678.455 11.092a1.5 1.5 0 0 0 0 2.126l10.478 10.478a1.5 1.5 0 0 0 2.126 0l10.487-10.64a1.5 1.5 0 0 0 0-2.126z" />
      </svg>
    );
  }

  // 11. GitHub
  if (n.includes('github')) {
    return (
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={className}
        fill={colored ? '#FFFFFF' : 'currentColor'}
        aria-label="GitHub logo"
        role="img"
        {...props}
      >
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    );
  }

  // 12. HTML5
  if (n.includes('html')) {
    return (
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={className}
        aria-label="HTML5 logo"
        role="img"
        {...props}
      >
        <path
          fill={colored ? '#E34F26' : 'currentColor'}
          d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0z"
        />
        <path
          fill={colored ? '#EF652A' : '#FFFFFF'}
          d="M12 22.036l7.085-2.016 1.637-18.47H12v20.486z"
        />
        <path
          fill="#FFFFFF"
          d="M12 9.75h4.156l-.326 3.426-3.83 1.057v2.664l6.096-1.688.435-5.459H12V9.75zm0-5.34h6.587l.233-2.628H12v2.628zm-3.469 5.34l-.232-2.718H12V4.41H5.412l.698 8.01H12v-2.67H8.531zm.188 2.086l.33 4.171L12 19.351v-2.656l-2.955-.81-.188-2.11z"
        />
      </svg>
    );
  }

  // 13. CSS3
  if (n.includes('css')) {
    return (
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={className}
        aria-label="CSS3 logo"
        role="img"
        {...props}
      >
        <path
          fill={colored ? '#1572B6' : 'currentColor'}
          d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0z"
        />
        <path
          fill={colored ? '#33A9DC' : '#FFFFFF'}
          d="M12 22.036l7.085-2.016 1.637-18.47H12v20.486z"
        />
        <path
          fill="#FFFFFF"
          d="M12 9.753h3.834l-.326 3.426-3.508.973v2.714l5.903-1.635.744-8.158H12v2.68zm0-5.34h6.587l.233-2.628H12v2.628zm-3.469 5.34H5.644l.233 2.625h2.884l.232 2.628H6.107l.43 4.848 5.463 1.512v-2.656l-3.23-.895-.232-2.625h3.462V9.753z"
        />
      </svg>
    );
  }

  // 14. VS Code
  if (n.includes('code') || n.includes('vscode')) {
    return (
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={className}
        fill={colored ? '#007ACC' : 'currentColor'}
        aria-label="VS Code logo"
        role="img"
        {...props}
      >
        <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.94-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" />
      </svg>
    );
  }

  // 15. Postman
  if (n.includes('postman')) {
    return (
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={className}
        fill={colored ? '#FF6C37' : 'currentColor'}
        aria-label="Postman logo"
        role="img"
        {...props}
      >
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm1.673 14.735c-.173.048-.352.073-.538.073a2.38 2.38 0 0 1-1.688-.702l-2.73-2.73a2.39 2.39 0 0 1-.7-.1.446.446 0 0 1-.309-.434c.006-.239.198-.43.438-.432h.01a3.292 3.292 0 0 0 .963.14c.88 0 1.72-.344 2.343-.967l2.73-2.73a3.315 3.315 0 0 0 .967-2.343c0-.327-.048-.65-.14-.963a.442.442 0 0 1 .432-.438c.24 0 .438.192.438.432 0 .193-.027.382-.078.566a4.2 4.2 0 0 1 1.236 2.993c0 1.123-.437 2.18-1.231 2.973l-2.73 2.73a4.195 4.195 0 0 1-2.992 1.233z" />
      </svg>
    );
  }

  // 16. Vercel
  if (n.includes('vercel')) {
    return (
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={className}
        fill={colored ? '#FFFFFF' : 'currentColor'}
        aria-label="Vercel logo"
        role="img"
        {...props}
      >
        <path d="M24 22.525H0l12-21.05 12 21.05z" />
      </svg>
    );
  }

  // 17. DaisyUI
  if (n.includes('daisy')) {
    return (
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={className}
        aria-label="DaisyUI logo"
        role="img"
        {...props}
      >
        <circle cx="12" cy="12" r="9" fill={colored ? '#1AD1A5' : 'currentColor'} />
        <circle cx="12" cy="12" r="3.5" fill={colored ? '#FFD166' : '#FFFFFF'} />
        <circle cx="12" cy="4.5" r="2.2" fill="#FFFFFF" opacity="0.8" />
        <circle cx="12" cy="19.5" r="2.2" fill="#FFFFFF" opacity="0.8" />
        <circle cx="4.5" cy="12" r="2.2" fill="#FFFFFF" opacity="0.8" />
        <circle cx="19.5" cy="12" r="2.2" fill="#FFFFFF" opacity="0.8" />
      </svg>
    );
  }

  // 18. REST API / Generic API
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="none"
      stroke={colored ? '#10B981' : 'currentColor'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-label="REST API icon"
      role="img"
      {...props}
    >
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" strokeWidth="3" />
      <line x1="6" y1="18" x2="6.01" y2="18" strokeWidth="3" />
      <path d="M14 6h4" />
      <path d="M14 18h4" />
    </svg>
  );
};
