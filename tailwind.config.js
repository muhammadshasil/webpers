module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./js/**/*.js",
    "./components/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary - Purple Neon Signature
        primary: {
          DEFAULT: "#a855f7", // purple-500
          50: "#faf5ff", // purple-50
          100: "#f3e8ff", // purple-100
          200: "#e9d5ff", // purple-200
          300: "#d8b4fe", // purple-300
          400: "#c084fc", // purple-400
          500: "#a855f7", // purple-500
          600: "#9333ea", // purple-600
          700: "#7e22ce", // purple-700
          800: "#6b21a8", // purple-800
          900: "#581c87", // purple-900
        },
        // Secondary - Cool Blue Technical
        secondary: {
          DEFAULT: "#3b82f6", // blue-500
          50: "#eff6ff", // blue-50
          100: "#dbeafe", // blue-100
          200: "#bfdbfe", // blue-200
          300: "#93c5fd", // blue-300
          400: "#60a5fa", // blue-400
          500: "#3b82f6", // blue-500
          600: "#2563eb", // blue-600
          700: "#1d4ed8", // blue-700
          800: "#1e40af", // blue-800
          900: "#1e3a8a", // blue-900
        },
        // Accent - Success Green
        accent: {
          DEFAULT: "#10b981", // emerald-500
          50: "#ecfdf5", // emerald-50
          100: "#d1fae5", // emerald-100
          200: "#a7f3d0", // emerald-200
          300: "#6ee7b7", // emerald-300
          400: "#34d399", // emerald-400
          500: "#10b981", // emerald-500
          600: "#059669", // emerald-600
          700: "#047857", // emerald-700
          800: "#065f46", // emerald-800
          900: "#064e3b", // emerald-900
        },
        // Background Colors
        background: "#000000", // black
        surface: {
          DEFAULT: "#111827", // gray-900
          light: "#1f2937", // gray-800
          lighter: "#374151", // gray-700
        },
        // Text Colors
        text: {
          primary: "#e5e7eb", // gray-200
          secondary: "#9ca3af", // gray-400
          tertiary: "#6b7280", // gray-500
          inverse: "#111827", // gray-900
        },
        // Status Colors
        success: {
          DEFAULT: "#22c55e", // green-500
          light: "#86efac", // green-300
          dark: "#16a34a", // green-600
        },
        warning: {
          DEFAULT: "#f59e0b", // amber-500
          light: "#fcd34d", // amber-300
          dark: "#d97706", // amber-600
        },
        error: {
          DEFAULT: "#ef4444", // red-500
          light: "#fca5a5", // red-300
          dark: "#dc2626", // red-600
        },
      },
      fontFamily: {
        headline: ['JetBrains Mono', 'monospace'],
        body: ['Inter', 'sans-serif'],
        cta: ['Orbitron', 'sans-serif'],
        code: ['Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow-primary': '0 0 20px rgba(168, 85, 247, 0.3)',
        'glow-primary-strong': '0 0 30px rgba(168, 85, 247, 0.5)',
        'glow-secondary': '0 0 20px rgba(59, 130, 246, 0.3)',
        'glow-accent': '0 0 20px rgba(16, 185, 129, 0.3)',
        'border-glow-primary': '0 0 10px rgba(168, 85, 247, 0.5)',
        'border-glow-secondary': '0 0 10px rgba(59, 130, 246, 0.5)',
        'border-glow-accent': '0 0 10px rgba(16, 185, 129, 0.5)',
      },
      animation: {
        'fade-in': 'fadeIn 300ms ease-out',
        'slide-in-left': 'slideInLeft 300ms ease-out',
        'slide-in-right': 'slideInRight 300ms ease-out',
        'pulse-neon': 'pulseNeon 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulseNeon: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(168, 85, 247, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(168, 85, 247, 0.5)' },
        },
      },
      transitionDuration: {
        '300': '300ms',
      },
      transitionTimingFunction: {
        'out': 'ease-out',
      },
      backdropBlur: {
        'cyberpunk': '12px',
      },
    },
  },
  plugins: [],
}