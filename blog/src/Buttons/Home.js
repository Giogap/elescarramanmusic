import Slide from '../Slide/Slide';
import metallica from './Metallica-logo.jpg';
import './Home.css';

function Home() {
    return (
        <>
        <div>
            <Slide />
            <h2>Más escuchados</h2>
            <div className='images'>
                <div className='img-container'>
                    <a href='/Metallica' >
                        <img className='circular-img' src={metallica} alt=''></img>
                    </a>
                    <p className='band-name'>Metallica</p>
                </div>
                <div className='img-container'>
                    <a href='/BMTH'>
                        <img className='circular-img' src={metallica} alt=''></img>
                    </a>
                    <p className='band-name'>BMTH</p>
                </div>
                <div className='img-container'>
                    <a href='/Ekos'>
                        <img className='circular-img' src={metallica} alt=''></img>
                    </a>
                    <p className='band-name'>Ekos</p>
                </div>
                <div className='img-container'>
                    <a href='/Sleeptoken'>
                        <img className='circular-img' src={metallica} alt=''></img>
                    </a>
                    <p className='band-name'>Sleep Token</p>
                </div>
                <div className='img-container'>
                    <a href='/ACDC'>
                        <img className='circular-img' src={metallica} alt=''></img>
                    </a>
                    <p className='band-name'>ACDC</p>
                </div>
                <div className='img-container'>
                    <a href='/Halestorm'>
                        <img className='circular-img' src={metallica} alt=''></img>
                    </a>
                    <p className='band-name'>Halestorm</p>
                </div>
                <div className='img-container'>
                    <a href='/Nirvana'>
                        <img className='circular-img' src={metallica} alt=''></img>
                    </a>
                    <p className='band-name'>Nirvana</p>
                </div>
            </div>
        </div>
        </>
    );
}

export default Home;