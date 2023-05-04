import textToImage from '../../public/text-to-image.png';
import ve from '../../public/ve.png';
import notera from '../../public/notera.png';

const workData = [
    {
        id: 1,
        img: textToImage,
        alt: 'Text to image generator cover image.',
        title: 'Text to Image Generator',
        desc: 'A text to image generator using the OpenAI DALL·E API.',
        stack: ['React', 'Vite', 'Express', 'OpenAI', 'Heroku'],
        github: 'https://github.com/piarenivar/text-to-image',
        url: 'https://text-to-image.herokuapp.com/',
    },
    {
        id: 2,
        img: ve,
        alt: 'Valencia Estructuristas cover image.',
        title: 'Valencia Estructuristas',
        desc: 'Engineering firm company website built on React, deployed on a Linux server.',
        stack: ['React', 'Express', 'Axios', 'Nodemailer', 'NGINX', 'Linux'],
        github: 'https://github.com/piarenivar/ve-react',
        url: 'https://valenciaestructuristas.com/',
    },
    {
        id: 3,
        img: notera,
        alt: 'Notera project cover image.',
        title: 'Notera',
        desc: 'A front-end landing page built on HTML, CSS, JS and Bootstrap for a notes and productivity app concept.',
        stack: ['HTML', 'CSS', 'js', 'Bootstrap', 'Github'],
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