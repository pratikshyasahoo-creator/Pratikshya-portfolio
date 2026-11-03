export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: { extend: {
    fontFamily: { sans: ['Poppins', 'sans-serif'] },
    keyframes: {
      float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
      blob: { '0%,100%': { transform: 'translate(0,0) scale(1)' }, '50%': { transform: 'translate(30px,-40px) scale(1.15)' } },
      fadeUp: { from: { opacity: 0, transform: 'translateY(24px)' }, to: { opacity: 1, transform: 'none' } },
      glow: { '0%,100%': { boxShadow: '0 0 20px #6366f1aa' }, '50%': { boxShadow: '0 0 45px #a855f7cc' } },
      shift: { '0%,100%': { backgroundPosition: '0% 50%' }, '50%': { backgroundPosition: '100% 50%' } },
      blink: { '50%': { opacity: 0 } },
    },
    animation: {
      float: 'float 4s ease-in-out infinite', blob: 'blob 9s ease-in-out infinite',
      fadeUp: 'fadeUp .6s ease both', glow: 'glow 3s ease-in-out infinite',
      shift: 'shift 4s ease infinite', blink: 'blink 1s step-end infinite',
    },
  } },
  plugins: [],
}
