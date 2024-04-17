import { Outlet } from 'react-router-dom';
import ProjectsSidebar from '../components/ProjectsSidebar.tsx';

function MainLayout() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar />
      <Outlet />
    </main>
  );
}

export default MainLayout;
