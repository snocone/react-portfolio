import { useRef } from 'react';
import emailjs from 'emailjs-com';
import './resume.css';

function Resume() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'contact_form', form.current, 'user_4S8BwjUlHtKnN7GW4I5lJ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            form.current.reset()
    }
    return (
        <div>
            <div className="lang">
                <h2>Languages</h2>
                <p>HTML, CSS, JavaScript</p>
            </div>
            <div className="frame">
                <h2>Frameworks/Libraries</h2>
                <p>Bootstrap, Vue, Angular, React, ExpressJS, NodeJS</p>
            </div>
            <div className="tools">
                <h2>Tools</h2>
                <p>Photoshop, Git/Github, Atom, Visual Studio Code, MongoDB, Firebase, Postman</p>
            </div>


            <hr />
            <h1>Experience</h1>
            <div className='second'>
                <img src='./soda.jpg' alt='School of Dreams Academy Logo' style={{ minWidth: '15em', maxHeight: '15em', borderRadius: '10%', margin: '2rem' }} />
                <div className='sec-text'>
                    <h3>School of Dreams Academy</h3>
                    <h5>Digital Media Arts Instructor</h5>

                    <p>April 2017 - Present | Los Lunas, NM</p>
                    <p>
                        At School of Dreams Academy I ensure my students are well
                        crafted digital media artists who know color theory, the
                        elements of design, the principles of animation, how to navigate
                        Adobe programs such as Photoshop, Illustrator, Animate, and Premiere.
                        I currently teach grades 6 - 12. I teach a range of subjects from Digital
                        Media Arts Foundations, to College level courses for Digital Arts,
                        Photography, Film, and Video Game Design. I also felt compelled
                        to start a Jiu Jitsu club at my school, and host that every
                        Monday and Wednesday where I teach self defense and
                        competition Jiu Jitsu to students.
                    </p>
                </div>
            </div>

            <div className='second'>
                <div className='sec-alt-text'>
                    <h3>Better Life Pet Foods</h3>
                    <h5>Front End Developer</h5>

                    <p>January 2021 - Present | Remote</p>
                    <p>
                        Better Life Pet Foods hired me to do several odds and ends
                        on their retail website which uses lightspeed online POS before
                        approaching me to do a full website for their pet grooming salon.
                        I was able to produce a framework within a month complete with photos, descriptions, links, and printable pdfs.
                        I am currently in the middle of a redesign, working closely with a graphic designer, and am responsible for
                        creating their scheduling app using React and Node.
                    </p>
                </div>
                <img src='./BL.jpg' alt='' style={{ minWidth: '15em', maxHeight: '15em', borderRadius: '10%', margin: '2rem' }} />
            </div>

            <div className='second'>
                <img src='./cw.jpg' alt='' style={{ minWidth: '15em', maxHeight: '15em', borderRadius: '10%', margin: '2rem' }} />
                <div className='sec-text'>
                    <h3>Corporate Warriors</h3>
                    <h5>Wordpress Developer | Graphic Designer</h5>

                    <p>November 2019 - October 2020</p>
                    <p>
                        My duties at corporate warriors include turning high level clientele
                        resumes from paper to website using bluehost domain services and
                        wordpress Divi 4. This includes design, layout, graphics, and
                        font as well as installing elegant themes Divi4 to our clients
                        wordpress, and publishing. I am also responsible for taking
                        campaign drafts from management and producing email campaigns to
                        send to hundreds of client emails offering specials, promos,
                        and services. This includes choice of font, layout, color theme, and presentation.
                    </p>
                </div>
            </div>

            <hr />

            <h1>Projects</h1>

            <div className='projects'>
                <div className='project'>
                    <img src='./code.jpg' alt='' style={{ borderRadius: '1em' }} />
                    <h3>Carbon Even</h3>
                    <h5>Front End Developer</h5>
                    <h5>December 2019 - June 2020</h5>
                    <p>I am part of a team for this project, and it requires constant
                        communication via remote locations to ensure that we get the
                        ball rolling. I am responsible for the front end portion. This project is
                        my way of contributing to the ongoing efforts to help with global warming.
                        It is a way for businesses and users alike to purchase carbon offsets to
                        curb CO2 emissions. It’s also a way for users to see just how much carbon they
                        aren't contributing to the atmosphere. </p>
                </div>
                <div className='project'>
                    <img src='./code.jpg' alt='' style={{ borderRadius: '1em' }} />
                    <h3>Southwest Jiu Jitsu</h3>
                    <h5>Full Stack Web Developer</h5>
                    <h5>December 2018 - March 2020</h5>
                    <p>This is a site dedicated to jiu jtisu competitors
                        in the state of New Mexico who are looking to compete
                        more often. I handled everything. From the original
                        HTML/CSS code as a rough draft, to recreating in Angular.
                        This project is close and personal to me.
                        It enables me to grow in web development and experiment with
                        different ways of coding while contributing to the jiu jitsu
                        community.
                    </p>
                </div>
                <div className='project'>
                    <img src='./code.jpg' alt='' style={{ borderRadius: '1em' }} />
                    <h3>Recipe Book</h3>
                    <h5>Full Stack Web Developer</h5>
                    <h5>May 2019 - Aug 2019</h5>
                    <p>A class project that showcases what I've learned and
                        accomplished in Angular. This is a project where I was able
                        to explore everything Angular has to offer. I had quite a few days
                        of problem solving my own code, which I believe helped me become
                        a better developer.
                    </p>
                </div>
            </div>
            <h1>Drop a line</h1>
            <form ref={form} onSubmit={sendEmail}>
                <input
                 type="text" 
                 name="user_name" 
                 className='input' 
                 placeholder='Your Name' 
                 style={{
                      color: 'black', 
                      backgroundColor: 'rgba(128, 128, 128, 0.308)' 
                    }} />
                <input
                 type="email" 
                 name="user_email" 
                 className='input' 
                 placeholder='Your Email' 
                 style={{
                      color: 'black', 
                      backgroundColor: 'rgba(128, 128, 128, 0.308)' 
                    }} />
                <textarea
                 name="message" 
                 placeholder='Say your piece here' 
                 style={{
                     borderStyle: 'none',
                     backgroundColor: 'rgba(128, 128, 128, 0.308)',
                     maxWidth: '20em',
                     borderRadius: '.5em',
                     marginTop: '.5em',
                     marginLeft: '3em',
                     padding:'2em'
                 }}
                />
                <input
                 type="submit" 
                 value="Send"
                 style={{
                     margin: '1em',
                     borderStyle: 'none',
                     borderRadius: '.5em',
                     width: '10em',
                     padding: '2em'

                 }}
                />
            </form>

        </div>
    );
};

export default Resume;