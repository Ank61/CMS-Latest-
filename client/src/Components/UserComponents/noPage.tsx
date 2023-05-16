import "./CSS/noPage.css"
import { Link } from 'react-router-dom';
function NoPage() {
    return (
        <div id="notfound">
            <div className="notfound">
                <div className="notfound-404">
                    <h1>404</h1>
                </div>
                <h2>Oops! Nothing was found</h2>
                <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable. <Link to="/">Return to homepage</Link></p>
                <div className="notfound-social">
                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-pinterest"></i></a>
                    <a href="#"><i className="fa fa-google-plus"></i></a>
                </div>
            </div>
        </div>
    )
}
export default NoPage;