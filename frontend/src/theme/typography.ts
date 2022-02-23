const titleFontFamily = `font-family: Arial, sans-serif;`;
const fontFamily = `font-family: Arial, sans-serif;`;

const colors = {
  black: '#222222',
  white: 'white',
};

const variant: object = {
  h1: `
    ${titleFontFamily}
    font-size: 4rem;
    line-height: 4.8rem;
    font-weight: 900;
    text-decoration: none;    
    color: ${colors.black};
    `,
  h2: `
    ${titleFontFamily}
    font-size: 3.2rem;
    line-height: 4rem;
    font-weight: 800;
    text-decoration: none;
    color: ${colors.black};
`,
  h3: `
    ${titleFontFamily}
    font-size: 2.4rem;
    line-height: 3.2rem;
    font-weight: 700;
    text-decoration: none;
    color: ${colors.black};
`,
  h4: `
    ${titleFontFamily}
    font-size: 2rem;
    line-height: 2.8rem;
    font-weight: 600;
    text-decoration: none;
    color: ${colors.black};
`,
  p: `
    ${fontFamily}
    font-size: 1.6rem;
    line-height: 2.4rem;
    font-weight: 400;
    text-decoration: none;
    color: ${colors.black};
`,
  button: `
    ${fontFamily}
    box-sizing: border-box;
    width: max-content;
    padding: 6px 8px;
    background-color: white;
    border: 2px solid #222222;
    border-radius: 3px;
    font-size: 1.6rem;
    line-height: 2.4rem;
    font-weight: 400;
    text-decoration: none;
    color: ${colors.black};
    cursor: pointer;
`,
};

export default variant;
