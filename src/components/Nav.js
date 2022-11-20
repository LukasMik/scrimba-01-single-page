import '../styles/Nav.scss';
import logo from '../images/logo.svg'

function Nav() {
    return (
        <div className="flex justify-between items-center py-6">
            <img className='w-32 h-auto relative -left-6' src={logo} alt=""/>
            <ul className="flex justify-end items-center">
                <li>
                    <a href="127.0.0.1:3000"
                       className="mx-4 text-blue-400 font-bold text-xl hover:text-blue-200">Pricing
                    </a>
                </li>
                <li>
                    <a href="127.0.0.1:3000"
                       className="mx-4 text-blue-400 font-bold text-xl hover:text-blue-200">About
                    </a>
                </li>
                <li>
                    <a href="127.0.0.1:3000"
                       className="mx-4 text-blue-400 font-bold text-xl hover:text-blue-200">Contact
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Nav;
