import './Navbar.css'

function Navbar() {
    return (
        <>
        <nav>
          <a href='/' className='Site-title'>El Escarraman Music</a>
          <ul>
            <li>
                <a href='/' className='App-home'>Home</a>
            </li>
            <li>
                <a href='/bandas' className='App-bandas'>Bandas</a>
            </li>
            <li>
                <a href='/país' className='App-países'>País</a>
            </li>
          </ul>
        </nav>
        </>
    );
}

export default Navbar;