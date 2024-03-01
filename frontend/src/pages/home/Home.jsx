import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";

const Home = () => {
  return (
    <div className="flex flex-col sm:flex-row h-[90%] gap-3">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;
