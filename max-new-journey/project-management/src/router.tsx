import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from 'react-router-dom';
import MainLayout from './pages/mainLayout.tsx';
import Home from './pages/home/home.tsx';
import CreateProject from './pages/create-project/create-project.tsx';
import Details from './components/Details.tsx';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index={true} element={<Home />} />
      <Route path="/create-project" element={<CreateProject />} />
      <Route path="projects">
        <Route index={true} element={<Navigate to="/" />} />
        <Route path=":id" element={<Details />} />
      </Route>
    </Route>,
  ),
);
