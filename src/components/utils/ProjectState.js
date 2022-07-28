import pdt1 from '../../images/project-details-top-1.jpeg';
import pdt2 from '../../images/project-details-top-2.jpeg';
import pdt3 from '../../images/project-details-top-3.jpeg';
import pdt4 from '../../images/project-details-top-4.jpeg';
import pdb1 from '../../images/project-details-bottom-1.jpeg';
import pdb2 from '../../images/project-details-bottom-2.jpeg';
import pdb3 from '../../images/project-details-bottom-3.jpeg';
import pdb4 from '../../images/project-details-bottom-4.jpeg';

const ProjectState = [
    {
        info: 'Graphic Design',
        title: 'Design for one of the major figures of fashion',
        id: '0',
        url: '/project-detail/project-1',
        imgTop: pdt1,
        imgBottom: pdb1,
        liveSite: 'https://www.google.com',
        code: '',
        about: <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam cum optio autem non rem quo aliquam, velit repellendus consequuntur expedita vero modi, error, animi iusto provident reprehenderit rerum fugiat aspernatur.</p>,
        techs: <p>React Js, Sass, Tailwind, Sanity, Typescript</p>,
        functions:
            <ul>
                <li>Lorem ipsum dolor sit.</li>
                <li>Lorem ipsum dolor sit amet consectetur.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                <li>Lorem ipsum dolor sit amet.</li>
            </ul>,
        conclution: <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aliquid totam dolore facilis qui magni explicabo, assumenda a alias in illo sed libero vitae sapiente sunt molestias et numquam minima.</p>
    },
    {
        info: 'Advertising',
        title: 'Visual concepts for improving the user experience',
        id: '1',
        url: '/project-detail/project-2',
        imgTop: pdt2,
        imgBottom: pdb2,
        liveSite: '',
        code: '',
        about: <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam cum optio autem non rem quo aliquam, velit repellendus consequuntur expedita vero modi, error, animi iusto provident reprehenderit rerum fugiat aspernatur.</p>,
        techs: <p>React Js, Sass, Tailwind, Sanity, Typescript</p>,
        functions:
            <ul className='functionality'>
                <li>Lorem ipsum dolor sit.</li>
                <li>Lorem ipsum dolor sit amet consectetur.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                <li>Lorem ipsum dolor sit amet.</li>
            </ul>,
        conclution: <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aliquid totam dolore facilis qui magni explicabo, assumenda a alias in illo sed libero vitae sapiente sunt molestias et numquam minima.</p>
    },
    {
        info: 'Visual Identity',
        title: 'A new brand for a new strategy',
        id: '2',
        url: '/project-detail/project-3',
        imgTop: pdt3,
        imgBottom: pdb3,
        liveSite: '',
        code: '',
        about: <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam cum optio autem non rem quo aliquam, velit repellendus consequuntur expedita vero modi, error, animi iusto provident reprehenderit rerum fugiat aspernatur.</p>,
        techs: <p>React Js, Sass, Tailwind, Sanity, Typescript</p>,
        functions:
            <ul>
                <li>Lorem ipsum dolor sit.</li>
                <li>Lorem ipsum dolor sit amet consectetur.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                <li>Lorem ipsum dolor sit amet.</li>
            </ul>,
        conclution: <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aliquid totam dolore facilis qui magni explicabo, assumenda a alias in illo sed libero vitae sapiente sunt molestias et numquam minima.</p>
    },
    {
        info: 'Brand Digital',
        title: 'Designing a website for innovative projects',
        id: '3',
        url: '/project-detail/project-4',
        imgTop: pdt4,
        imgBottom: pdb4,
        liveSite: '',
        code: '',
        about: <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam cum optio autem non rem quo aliquam, velit repellendus consequuntur expedita vero modi, error, animi iusto provident reprehenderit rerum fugiat aspernatur.</p>,
        techs: <p>React Js, Sass, Tailwind, Sanity, Typescript</p>,
        functions:
            <ul className='functionality'>
                <li>Lorem ipsum dolor sit.</li>
                <li>Lorem ipsum dolor sit amet consectetur.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                <li>Lorem ipsum dolor sit amet.</li>
            </ul>,
        conclution: <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aliquid totam dolore facilis qui magni explicabo, assumenda a alias in illo sed libero vitae sapiente sunt molestias et numquam minima.</p>
    }
]

export default ProjectState;