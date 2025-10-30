type GymLogoProps = {
  className?: string;
  highlight?: string;
  accent?: string;
  idPrefix?: string;
};

export function GymLogo({ className, highlight = "#f97316", accent = "#22d3ee", idPrefix = "forgefit" }: GymLogoProps) {
  const gradientId = `${idPrefix}-gradient`;
  const glowId = `${idPrefix}-glow`;

  return (
    <svg
      className={className}
      viewBox="0 0 360 360"
      role="img"
      aria-labelledby={`${idPrefix}-logo-title ${idPrefix}-logo-desc`}
    >
      <title id={`${idPrefix}-logo-title`}>ForgeFit Gym Logo</title>
      <desc id={`${idPrefix}-logo-desc`}>
        A modern shield-shaped emblem featuring stylised letters F and barbell elements representing strength and motion.
      </desc>
      <defs>
        <radialGradient id={gradientId} cx="50%" cy="30%" r="80%">
          <stop offset="0%" stopColor={highlight} stopOpacity="0.95" />
          <stop offset="65%" stopColor={highlight} stopOpacity="0.6" />
          <stop offset="100%" stopColor="#111827" stopOpacity="0.9" />
        </radialGradient>
        <filter id={glowId} x="-50%" y="-50%" width="200%" height="200%" colorInterpolationFilters="sRGB">
          <feGaussianBlur stdDeviation="12" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g filter={`url(#${glowId})`}>
        <path
          d="M180 28c-10.6 0-20.7 4.6-27.6 12.6L72.2 138.5a44 44 0 0 0-10.4 28L64 252c1 54.9 48.2 94 116 94s115-39.1 116-94l2.2-85.5a44 44 0 0 0-10.4-28L207.6 40.6C200.7 32.6 190.6 28 180 28Z"
          fill={`url(#${gradientId})`}
          stroke={accent}
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M126 226h108l-7.2 30.4a18 18 0 0 1-17.5 13.6h-58.6A18 18 0 0 1 133.2 256L126 226Z"
          fill="#0f172a"
          stroke={accent}
          strokeWidth="4"
        />
        <path
          d="M122 112h52c30.4 0 56 25.6 56 56s-25.6 56-56 56h-52V112Z"
          fill="#0f172a"
          stroke={accent}
          strokeWidth="6"
        />
        <path
          d="M146 136h28c16.6 0 30 13.4 30 30s-13.4 30-30 30h-28v-18h25a12 12 0 0 0 0-24h-25v-18Z"
          fill={highlight}
        />
        <g fill={accent}>
          <rect x="74" y="166" width="36" height="28" rx="10" />
          <rect x="250" y="166" width="36" height="28" rx="10" />
          <rect x="106" y="174" width="148" height="12" rx="6" />
        </g>
        <path
          d="M180 74c-5.7 0-11.1 2.5-14.8 6.8l-54.3 61.3 21.1 18.7L180 111l48 49.8 21.1-18.7-54.3-61.3A20 20 0 0 0 180 74Z"
          fill={accent}
          opacity="0.35"
        />
      </g>
    </svg>
  );
}
