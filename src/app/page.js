
import Banner from "@/components/banner";
import FriendCard from "./friend/page";


export default function Home() {
  return (
    <div>
      <div className="bg-gray-100 py-16">
        <Banner />
        <FriendCard />
      </div>
    </div>


  );
}
