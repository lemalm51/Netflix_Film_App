import "./footer.css"
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import photo from "../images/photo.png"
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import TelegramIcon from '@mui/icons-material/Telegram';

const Footer = () => {
    return <div className="footer_outer_container">
               <div className="footer_inner_container">
                    <div className="footer_icons">
                        <FacebookOutlinedIcon />
                        <InstagramIcon />
                        <YouTubeIcon />


                    </div>
                    <div className="footer_data">
                        <div>
                            <ul>
                                <li>Audio Description </li>
                                <li>Investor Relations</li>
                                <li>Legal Notice</li>

                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>Help Center</li>
                                <li>Jobs</li>
                                <li>Cookies Preferences</li>
                        
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>Gift Cards</li>
                                <li>Terms of Use</li>
                                <li>Corporate Information </li>
                            </ul>
                        </div>
                         <div>
                            <ul>
                                <li>Media Center</li>
                                <li>Privacy</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>

                    </div>
                    <div className="copy_write">
                            &copy;1997-2024 Netflix,Inc.

                        </div>  
                        <div className="developer">
                            <img src={photo}/>
                            <h2>Full-Stack Developer:Lemma K.</h2>
                            <h2>Contact Me:</h2>
                            <li>Phone:<AddIcCallIcon/>+251951029930</li>
                            <li>Portifolio:<a href="https://lemmakechinu.netlify.app">https://lemmakechinu.netlify.app</a></li>
                            <li>Other My Experience:<a href="https://endlessfreindswebsite.netlify.app">https://endlessfreindswebsite.netlify.app</a></li>
                            <li>Telegram:<TelegramIcon/><a href="t.me/LmK_951">t.me/LmK_951</a></li>



                        </div>
                              

                </div>

            </div>;
}

export default Footer;