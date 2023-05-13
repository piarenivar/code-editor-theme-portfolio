import notera from '../../public/notera.png';
import portfolio from '../../public/portfolio.png';
import textToImage from '../../public/text-to-image.png';
import theOpenColumn from '../../public/the-open-column.png';
import ve from '../../public/ve.png';

const workData = [
    {
        id: 1,
        img: theOpenColumn,
        alt: 'The Open Column.',
        title: 'The Open Column',
        type: 'Project (in progress)',
        desc: 'A full stack web application with CRUD functionalities.',
        stack: ['React', 'Tailwind', 'Next', 'Firebase', 'Vercel'],
        github: '/',
        url: '/',
    },
    {
        id: 2,
        img: portfolio,
        alt: 'Code editor themed web developer portfolio cover image.',
        title: 'Code Editor Themed Portfolio',
        type: 'Project',
        desc: 'A code editor themed web developer portfolio built on React and NextJS.',
        stack: ['React', 'NextJS', 'NGINX', 'Linux'],
        github: 'https://github.com/piarenivar/code-editor-theme-portfolio',
        url: '/',
    },
    {
        id: 3,
        img: textToImage,
        alt: 'Text to image generator cover image.',
        title: 'Text to Image Generator',
        type: 'Project',
        desc: 'A text to image generator using the OpenAI DALL·E API.',
        stack: ['React', 'Vite', 'Express', 'OpenAI', 'Heroku'],
        github: 'https://github.com/piarenivar/text-to-image',
        url: 'https://text-to-image.herokuapp.com/',
    },
    {
        id: 4,
        img: ve,
        alt: 'Valencia Estructuristas cover image.',
        title: 'Valencia Estructuristas',
        type: 'Work',
        desc: 'Engineering firm company website built on React, deployed on a Linux server.',
        stack: ['React', 'Express', 'Axios', 'Nodemailer', 'NGINX', 'Linux'],
        github: 'https://github.com/piarenivar/ve-react',
        url: 'https://valenciaestructuristas.com/',
    },
    {
        id: 5,
        img: notera,
        alt: 'Notera project cover image.',
        title: 'Notera',
        type: 'Project',
        desc: 'A front-end landing page built on HTML, CSS, JS and Bootstrap for a notes and productivity app concept.',
        stack: ['HTML', 'CSS', 'JS', 'Bootstrap', 'Github'],
        github: 'https://github.com/piarenivar/notera',
        url: 'https://piarenivar.github.io/notera/',
    },
]

export default workData;

//     {
//         id: 4,
//         img: ' cover image.',
//         alt: '',
//         title: '',
//         desc: '',
//         stack: ['', ''],
//         github: '',
//         url: '',
//     }