/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#FFFFFF',
                onPrimary: '#000000',
                primaryVariant: '#FFFFFF',
                secondary: {
                    DEFAULT: '#FD5523',
                    50: '#F8E8E7',
                    100: '#FDCABA',
                    200: '#FBA88F',
                    300: '#FD8965',
                    400: '#FC6C42',
                    500: '#FD5523',
                    600: '#F14E1E',
                    700: '#E4491B',
                    800: '#D44115',
                    900: '#BD350D',
                },
                onSecondary: '#FFFFFF',
                secondaryVariant: {
                    DEFAULT: '#FFD6B0',
                    50: '#FFE5DD',
                    100: '#FFDDD1',
                    200: '#FFD1C2',
                    300: '#FFC2AE',
                    400: '#FFAE92',
                    500: '#FFD6B0',
                    600: '#EB724B',
                    700: '#DD562B',
                    800: '#B94A27',
                    900: '#974128'
                },
                background: '#FFFFFF',
                surface: '#FFFFFF',
                onSurface: '#000000',
                surfaceVariant: '#F3F3F3',
                error: '#CA0D0D',
            }
        },
    },
    plugins: [],
}
