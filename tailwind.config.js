/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      animation: {
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.6s ease-in',
        'bounce-in': 'bounceIn 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'shake': 'shake 0.5s ease-in-out',
        'pulse-error': 'pulseError 0.6s ease-in-out',
        'flip-x': 'flipX 0.6s ease-in-out',
        'glow': 'glow 1.5s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'slide-right': 'slideRight 0.5s ease-out',
        'password-focus': 'passwordFocus 0.3s ease-out',
      },
      keyframes: {
        slideUp: {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        bounceIn: {
          '0%': { opacity: '0', transform: 'scale(0.3)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
        scaleIn: {
          'from': { opacity: '0', transform: 'scale(0.95)' },
          'to': { opacity: '1', transform: 'scale(1)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px)' },
          '75%': { transform: 'translateX(5px)' },
        },
        pulseError: {
          '0%, 100%': { backgroundColor: 'rgba(255, 0, 0, 0.1)' },
          '50%': { backgroundColor: 'rgba(255, 0, 0, 0.2)' },
        },
        flipX: {
          '0%': { transform: 'rotateX(0deg)' },
          '50%': { transform: 'rotateX(90deg)' },
          '100%': { transform: 'rotateX(0deg)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(102, 126, 234, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(102, 126, 234, 0.8)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideRight: {
          'from': { opacity: '0', transform: 'translateX(-30px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        passwordFocus: {
          '0%': { boxShadow: '0 0 0px rgba(102, 126, 234, 0.5)' },
          '100%': { boxShadow: '0 0 15px rgba(102, 126, 234, 0.3)' },
        },
      },
    },
  },
  plugins: [],
}
