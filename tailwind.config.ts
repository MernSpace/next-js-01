import type { Config } from 'tailwindcss'
const {
    default:flattenColorPalette
} = require('tailwindcss/lib/util/flattenColorPalette')
function addVariablesForColors({addBase,theme}:any){
    const allColors = flattenColorPalette(theme('color'));
    const newVars =Object.fromEntries(
        Object.entries(allColors).map(([key,value]) => [`--${key}`,value])
    )
    addBase({
        ':root':newVars
    })

}


const config: Config = {

    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './app/**/*.{js,ts,jsx,tsx}', // For app directory (Next.js 13+)
    ],
    theme: {
        extend: {
            colors: {
                primary: '#1e40af',
                secondary: '#facc15',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            keyframes:{
                spotlight:{
                    "0%":{
                        opacity:'0',
                        transform:"translate(-728, 628) Scale(0.5)"
                    },
                    '100%':{
                        opacity:
                            '1',
                        transform:
                            "translate(-50%, -40%) scale(1)"
                    }
                }
            }
        },
    },
    plugins: [addVariablesForColors],
}

export default config
