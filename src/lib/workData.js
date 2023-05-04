import work1 from '../../public/work1.png';
import work2 from '../../public/work2.png';

const workData = [
    {
        id: 1,
        img: work1,
        alt: 'Text to image generator cover image.',
        title: 'Text to Image Generator',
        desc: 'A text to image generator using the OpenAI DALL·E API.',
        stack: ['React', 'Vite', 'Express', 'OpenAI', 'Heroku'],
        github: 'https://github.com/piarenivar/text-to-image',
        url: 'https://text-to-image.herokuapp.com/',
    },
    {
        id: 2,
        img: work2,
        alt: 'Valencia Estructuristas cover image.',
        title: 'Valencia Estructuristas',
        desc: 'Engineering firm company website built on React, deployed on a Linux server.',
        stack: ['React', 'Express', 'Axios', 'Nodemailer', 'NGINX', 'Linux'],
        github: 'https://github.com/piarenivar/ve-react',
        url: 'https://valenciaestructuristas.com/',
    },
]

export default workData;


//     {
//         id: 3,
//         img: '',
//         alt: ' cover image.',
//         title: '',
//         desc: '',
//         stack: ['', ''],
//         github: '',
//         url: '',
//     },
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