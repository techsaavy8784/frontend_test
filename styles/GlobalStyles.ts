import { Cinzel, Inter } from 'next/font/google';
import { DefaultTheme, createGlobalStyle } from 'styled-components';

export const cinzel = Cinzel({ weight: '700', subsets: ['latin'] });
export const interRegular = Inter({ weight: '400', subsets: ['latin'] });
export const interBold = Inter({ weight: '700', subsets: ['latin'] });

// background-color: ${({ theme }) => theme.colors.black};
const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`
	//========================================================================================================
	// GENERAL
	//========================================================================================================
	* {
		box-sizing: border-box;
	}
	*::before {
		box-sizing: border-box;
	}
	*::after {
		box-sizing: border-box;
	}

	body {
		background-image: url(${({ theme }) => theme.backgroundImage});
		background-repeat: no-repeat;
		background-size: cover;
		width:100%;
		height:100vh;
		margin:0;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	button {
		font-family: ${cinzel.style.fontFamily};
		font-weight: ${cinzel.style.fontWeight};
	}

	b {
		font-weight: 700;
	}

	p,
	span,
	input,
	textarea {
		font-family: ${interRegular.style.fontFamily};
		font-weight: ${interRegular.style.fontWeight};
	}
`;

export default GlobalStyle;
