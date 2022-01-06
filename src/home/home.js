import './home.css';

function Home() {
    return(
        <body>
            <div className='first'>
                <img src='./IMG_0121.jpg' alt='This is definitely not me' style={{ maxWidth: '20em', maxHeight: '20em', borderRadius: '10%', margin: '2rem'}} />
                <div>
                    <h2>A little about myself</h2>
                    <p>Thank you for taking the time to check out my portfolio site.
                    I am a front end web developer, secondary digital media arts teacher, and 
                    Brazilian Jiu Jitsu brown belt. I enjoy training jiu jitsu, traveling,
                    an amazing story, and really good looking websites.</p>
                </div>
            </div>
        </body>
    )
}

export default Home;