    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            sans: ['Cairo', 'sans-serif'],
            serif: ['Amiri', 'serif'],
            tajawal: ['Tajawal', 'sans-serif'],
            changa: ['Changa', 'sans-serif'],
            ibm: ['IBM Plex Sans Arabic', 'sans-serif'],
            mono: ['Fira Code', 'monospace']
          },
          colors: {
            brand: {
              50: '#ecfdf5',
              100: '#d1fae5',
              200: '#a7f3d0',
              500: '#10b981',
              600: '#059669',
              700: '#047857',
              800: '#065f46',
              900: '#064e3b',
              950: '#022c22'
            }
          },
          boxShadow: {
            'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
            'paper': '0 10px 35px -5px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.05)',
            'inner-soft': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.03)',
          }
        }
      }
    }
