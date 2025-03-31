import './About.css'
import pic from '../assets/PassportPic_akhil.jpeg';
function About(){
    return (
        <div className='Card'>
            <h1 className='title-line'>A little bit about me</h1>
            <img src={pic} className='pp'></img>
            <p className='AboutP'>
            I am currently a IVth Year Engineering Grad pursuing my Bachelors in Computer Scince Enfineering with a specialization in Artificial Intellegence and Machine learning 
            who is currently working with Deloitte as an Analyst Intern. I am fascinated by the recent developements in the GenAI technology and am working on understanig it.
            I love watching anime, going over market trends etc.
        </p>
        </div>
    )
}

export default About;