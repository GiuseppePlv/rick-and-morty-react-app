import {
    BrowserRouter, Routes, Route, Link
} from 'react-router-dom'
import Characters from '../components/Characters';
import Menu from '../components/Menu';
import Locations from '../components/Locations';
import Episodes from '../components/Episodes';
export default function AppRouter() {
    return (

        <BrowserRouter>
            <>
                <Menu />
                <div>
                    <Routes>
                        <Route path="/" element={<Characters />} />
                        <Route path="/locations" element={<Locations />} />
                        <Route path="/episodes" element={<Episodes />} />
                    </Routes>
                </div>
            </>
        </BrowserRouter >
    );
}