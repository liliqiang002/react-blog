import { BrowserRouter , Routes, Route, Navigate} from 'react-router-dom'
import Layout from './component/layout/index';
import Home from './views/home'
import Documentation from './views/documentation';
import Course from './views/course';
import Community from './views/community';
import Resource from './views/resource';
import Publish from './views/publish';
import NoMatch from './views/nomatch';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="home" element={<Home />}></Route>
          <Route path="doc" element={<Documentation />}></Route>
          <Route path="course" element={<Course />}></Route>
          <Route path="community" element={<Community />}></Route>
          <Route path="resource" element={<Resource />}></Route>
        </Route>
        <Route path="/publish" element={<Publish />}>
        </Route>
        <Route path='/' element={<Navigate replace={true} to='/home' />}></Route>
        <Route path='*' element={<NoMatch />}></Route>
      </Routes>   
    </BrowserRouter>
  );
}

export default App;
