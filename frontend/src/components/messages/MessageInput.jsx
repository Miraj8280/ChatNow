import { useState } from "react";
import { IoSend } from "react-icons/io5";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!message) return;

    sendMessage(message);

    setMessage("");
  };
  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input
          type="text"
          className="text-sm rounded-lg block w-full p-2.5 outline-none shadow-md bg-slate-200"
          placeholder="Send a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3"
        >
          {loading ? (
            <div className="loading loading-spinner"></div>
          ) : (
            <IoSend className="w-5 h-5 text-slate-500" />
          )}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
