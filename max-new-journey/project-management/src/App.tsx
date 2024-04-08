import ProjectsSidebar from "./components/ProjectsSidebar.tsx";
import NewProject from "./components/NewProject.tsx";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar />

      <NewProject />
    </main>
  );
}

export default App;
