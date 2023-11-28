import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      'white'         : '#FFFFFF',
			'black'					: '#1C1C1C',
			'text-black'		: '#333333',
			'text-subtle'		: '#767676',
			'coral' 				: '#DC8C71',
			'coral-xlight' 	: '#FFE6E2',
			'romantic' 			: '#FFD1C1',
			'pacific-blue' 	: '#549FB8',
			'opal' 					: '#99C7CC',
			'magic-mint' 		: '#A1E3CB',
			'dark-white'		: "#F1F1F1",
			'grey'					:	"#F8F8F8",
			'bggrey'				: "#F9F9F9",
			'pippin'				: "#F7DDD1",
			'cream-brulee'	: "#ABD8DD",
			'bg-dark-grey'	: "#EEEEEE",
		},
  },
  plugins: [],
}
export default config
