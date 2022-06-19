import { createGlobalStyle } from "styled-components";
import COLORS from "./colors";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
    }
    #root{
        margin:0 auto;
        /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif; */
        font-weight: 400;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
		font-size: 16px;
    }

	body,
	html {
		margin: 0;
		padding: 0;
        font-family: 'Hind', sans-serif;
        font-family: 'Signika Negative', sans-serif;
		color: ${COLORS.black};
		font-size: 65%;
	}
    a{
        text-decoration: none ;
    }
    button{
        cursor: pointer;
    }
 `;
