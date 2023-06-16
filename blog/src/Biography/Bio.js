import './Bio.css';
import img from './music-notes-colored.jpg';
import Buttons from './Buttons';

function Bio() {
    return (
        <>
        <div className='bio-div'>
            <img className='perfil-img' src={img} alt=''></img>
        </div>
        <div className='bio-list'>
            <ul className='bio-points'>
                <li>Name</li>
                <li>Country </li>
                <li>Genre</li>
            </ul>
        </div>
        <div className='buttons-div'>
            <Buttons />
        </div>
        </>
    )
}

export default Bio;