import { useSocketContext } from "../../contexts/SocketContext";
import useConversation from "../../zustand/useConversation";

const Conversation = ({ conversation, emoji}) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);

  return (
    <>
      <div
        className={`flex gap-2 items-center bg-slate-50 shadow-md hover:bg-lime-50 rounded p-2 my-1 cursor-pointer
        ${isSelected ? "bg-cyan-200" : ""}
      `}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className={`avatar ${isOnline ? "online" : ""}`} >
          {" "}
          <div className="w-12 rounded-full">
            {" "}
            <img src={conversation.profilePic} alt="user avatar" />{" "}
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-500">{conversation.fullName}</p>
            <span className="text-xl">{emoji}</span>
          </div>
        </div>
      </div>

      {/* {!lastIndex && <div className="divider my-0 py-0 h-1" />} */}
    </>
  );
};

export default Conversation;
