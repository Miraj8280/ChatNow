import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../contexts/AuthContext";

const MessageContainer = () => {
  const {selectedConversation, setSelectedConversation} = useConversation();
  useEffect(() => {
    return () => setSelectedConversation(null)
  }, [setSelectedConversation])
  return (
    <div className="md:min-w-[450px] flex flex-col shadow-xl rounded-2xl bg-white">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className="px-4 mt-2">
            <span className="text-gray-500 font-bold"> {selectedConversation.fullName}</span>
            <div className="divider px-3"></div>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  const {authUser} = useAuthContext();

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-slate-500 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 {authUser.fullName} 🚀</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
