import friends from "../../../public/friends.json";
import Link from "next/link";
import Image from "next/image";

const getStatusStyle = (status = "") => {
    const s = status.toLowerCase().trim();
    if (s === "overdue") return { badge: "bg-red-100 text-red-700", dot: "bg-red-400" };
    if (s === "almost due") return { badge: "bg-amber-100 text-amber-800", dot: "bg-amber-400" };
    return { badge: "bg-green-100 text-green-800", dot: "bg-green-500" };
};

const Friends = () => {
    return (
        <>
            {friends.map((friend) => {
                const { badge, dot } = getStatusStyle(friend.status);
                return (
                    <Link
                        href={`/friends/${friend.id}`}
                        key={friend.id}
                        className="bg-white border border-gray-100 rounded-2xl p-5 flex flex-col items-center text-center gap-3 hover:scale-105 transition-transform"
                    >
                        <Image
                            width={100}
                            height={100}
                            src={friend.picture}
                            alt={friend.name}
                            className="w-20 h-20 rounded-full object-cover mb-4 transition-transform duration-300 group-hover:rotate-3"
                        />
                        <div>
                            <h3 className="font-bold text-gray-900 text-lg leading-tight">
                                {friend.name}
                            </h3>
                            <p className="text-xs text-gray-400 mt-0.5">
                                {friend.days_since_contact} days ago
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-1 justify-center">
                            {friend.tags?.map((tag) => (
                                <span
                                    key={tag}
                                    className="text-xs font-semibold bg-green-50 text-green-800 px-2 py-0.5 rounded-full"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <span className={`flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full font-medium ${badge}`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />
                            {friend.status}
                        </span>
                    </Link>
                );
            })}
        </>
    );
};

export default Friends;