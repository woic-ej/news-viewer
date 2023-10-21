import { Route, Routes } from 'react-router-dom';
import Newspage from './pages/Newspage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Newspage />}></Route>
      <Route path="/:category" element={<Newspage />} />
    </Routes>
  );
};
export default App;
