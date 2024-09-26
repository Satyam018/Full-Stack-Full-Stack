import React from "react";
import { useAuthContext } from "../context/authcontext";
import useConversation from "../zustang/useConversation";
import { getTime } from "../../utils/extracttime";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();

  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? "chat-end" : "chat-start";
	const bubbleBgColor = fromMe ? "bg-[#301934]" : "";

  const shakeClass = message.shouldShake ? "shake" : "";
  return (
<div className={`chat ${chatClassName} mx-2`}>
			<div className='chat-image avatar'>
				<div className='w-10 rounded-full'>
					<img alt='Tailwind CSS chat bubble component' src={"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} />
				</div>
			</div>
			<div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass}  pb-2`}>{message.message}</div>
			<div className='chat-footer opacity-50 text-s flex gap-1 items-center text-white'>{getTime(message.createdAt)}</div>
		</div>

  );
};

export default Message;
