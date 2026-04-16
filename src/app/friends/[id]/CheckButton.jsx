"use client";

import { useContext } from "react";
import { TimeLineContext } from "../../context/TimelineContext";
import { toast } from "react-toastify";
import { BiPhoneCall } from "react-icons/bi";
import { RiMessage2Line } from "react-icons/ri";
import { MdOutlineVideocam } from "react-icons/md";

const CheckButton = ({ friendName }) => {
    const { addTimeline } = useContext(TimeLineContext);

    const handleCheckIn = (type, text, emoji, label) => {
        addTimeline(`${label} with ${friendName}`, type);
        toast.success(`${label} with ${friendName} logged!`);
    };

    return (
        <div className="grid grid-cols-3 gap-4">
            <button onClick={() => handleCheckIn("call", `Call with ${friendName}`, "📞", "Call")} className="flex flex-col items-center gap-2 py-5 border border-gray-300 rounded-2xl hover:bg-gray-50 transition hover:shadow-lg cursor-pointer">
                <BiPhoneCall size={25}/>
                <span className="text-sm text-gray-600">Call</span>
            </button>
            <button onClick={() => handleCheckIn("text", `Text with ${friendName}`, "💬", "Text")} className="flex flex-col items-center gap-2 py-5 border border-gray-300 rounded-2xl hover:bg-gray-50 transition hover:shadow-lg cursor-pointer">
                <RiMessage2Line size={25} />
                <span className="text-sm text-gray-600">Text</span>
            </button>
            <button onClick={() => handleCheckIn("video", `Video with ${friendName}`, "🎥", "Video")} className="flex flex-col items-center gap-2 py-5 border border-gray-300 rounded-2xl hover:bg-gray-50 transition hover:shadow-lg cursor-pointer">
                <MdOutlineVideocam size={25} />
                <span className="text-sm text-gray-600">Video</span>
            </button>
        </div>
    );
};

export default CheckButton;