import './Sidebar.css';
import './Navbar.css';

export default function Sidebar(props){
    return(
        <div className='sidebar'>
            <div id='sidebar-header'>
                <h1 id='logo'>News Feed</h1>
                <p>Freshest, Latest, Fastest.</p>
                <div className='social-links'>
                    <img src='https://cdn-icons-png.flaticon.com/512/25/25231.png' className='social-icon'></img>
                    <img src='https://www.iconpacks.net/icons/2/free-twitter-logo-icon-2429-thumb.png' className='social-icon'></img>
                    <img src='https://cdn.iconscout.com/icon/free/png-256/instagram-1946323-1646407.png' className='social-icon'></img>
                    <img src='https://cdn-icons-png.flaticon.com/512/145/145807.png' className='social-icon'></img>
                </div>
            </div>
        </div>
    )
}