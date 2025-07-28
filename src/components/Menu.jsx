import { Link, useLocation } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';

function Menu() {
    const location = useLocation();

    return (
        <div className='row menu-bar'>
            <div className='col-4'>
                <ListGroup.Item active={location.pathname === '/'}>
                    <Link to="/">Characters</Link>
                </ListGroup.Item>
            </div>
            <div className='col-4'>
                <ListGroup.Item active={location.pathname === '/locations'}>
                    <Link to="/locations">Locations</Link>
                </ListGroup.Item>
            </div>
            <div className='col-4'>
                <ListGroup.Item active={location.pathname === '/episodes'}>
                    <Link to="/episodes">Episodes</Link>
                </ListGroup.Item>
            </div>
        </div>
    );
}
export default Menu