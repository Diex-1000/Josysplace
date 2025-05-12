import { FaSnowflake, FaWifi, FaSwimmer, FaConciergeBell, FaCoffee, FaUtensils, FaHotTub, FaDumbbell, FaTv, FaFan, FaBaby, FaParking, FaShower } from "react-icons/fa";
import { MdOutlineBalcony, MdOutlineKitchen, MdOutlineMicrowave, MdIron } from "react-icons/md";

export default function AmenitiesSection() {
  const amenities = [
    { icon: <FaSnowflake className="text-2xl text-gray-900" />, title: "Air conditioning", desc: "Split type ductless system." },
    { icon: <FaSwimmer className="text-2xl text-gray-900" />, title: "Beach access", desc: "Guests can enjoy a nearby beach." },
    { icon: <FaCoffee className="text-2xl text-gray-900" />, title: "Coffee maker", desc: "Available in the kitchen." },
    { icon: <FaUtensils className="text-2xl text-gray-900" />, title: "Cooking basics", desc: "Pots, pans, oil, salt & pepper." },
    { icon: <FaBaby className="text-2xl text-gray-900" />, title: "Crib", desc: "Guests must request it." },
    { icon: <FaTv className="text-2xl text-gray-900" />, title: "TV", desc: "HD." },
    { icon: <MdOutlineBalcony className="text-2xl text-gray-900" />, title: "Patio or balcony", desc: "Private." },
    { icon: <FaWifi className="text-2xl text-gray-900" />, title: "Wifi", desc: "Available throughout the listing." },
    { icon: <MdOutlineKitchen className="text-2xl text-gray-900" />, title: "Kitchen", desc: "Space where guests can cook." },
    { icon: <MdOutlineMicrowave className="text-2xl text-gray-900" />, title: "Microwave", desc: "Included in kitchen." },
    { icon: <FaConciergeBell className="text-2xl text-gray-900" />, title: "Concierge", desc: "Available at check-in." },
    { icon: <FaHotTub className="text-2xl text-gray-900" />, title: "Hot tub", desc: "Public or shared." },
    { icon: <FaDumbbell className="text-2xl text-gray-900" />, title: "Gym", desc: "Public or shared in building." },
    { icon: <MdIron className="text-2xl text-gray-900" />, title: "Iron", desc: "Included." },
    { icon: <FaParking className="text-2xl text-gray-900" />, title: "Free parking", desc: "On premises." },
    { icon: <FaShower className="text-2xl text-gray-900" />, title: "Hot water", desc: "Available in bathroom." },
  ];

  return (
    <section className="bg-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-8 text-center">Amenities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {amenities.map((item, idx) => (
            <div key={idx} className="flex items-start gap-4 bg-white p-4 rounded-lg shadow">
              <div>{item.icon}</div>
              <div>
                <p className="font-semibold text-gray-800 leading-tight">{item.title}</p>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
