import LeftSidebar from "../components/LeftSidebar";
import MainFeed from "../components/MainFeed";
import RightSidebar from "../components/RightSidebar";

function Home() {
  return (
    <div className="flex justify-center gap-4">
      <LeftSidebar />
      <MainFeed />
      <RightSidebar />
    </div>
  );
}

export default Home;
