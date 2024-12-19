import { useState,useRef } from "react";
const FlipCard = () => {
  const cards = [
    {
      id: "solution1",
      solution: "Social Media Management",
      title: "Finding the Perfect Balance Between Your Brand's Purpose and Social Media Presence",
      description:
        "Social media is like a party, and your brand needs to be the life of it—not the awkward one in the corner. With our strategies, you'll charm the crowd, start meaningful conversations, and leave everyone wanting more. All powered by some serious research and trend magic!",
        image: "https://media.licdn.com/dms/image/C4E12AQEewYeoQlcUWA/article-cover_image-shrink_600_2000/0/1627198487357?e=2147483647&v=beta&t=GkhDhML28sg27hBGNbo-mLtzG2LRcReTGtLtFv8YeFM",
        bgColor: "bg-yellow-200",
    },
    {
      id: "solution2",
      solution: "Search Engine Optimization",
      title: "Boosting Your Online Visibility to Help Your Brand Shine",
      description:
        "Think of us as your brand’s personal trainer, but for search engines. We’ll whip your online presence into shape, get you climbing those rankings, and have your audience saying, ‘How did we not see this sooner?’",
        image: "https://media.licdn.com/dms/image/C4E12AQEewYeoQlcUWA/article-cover_image-shrink_600_2000/0/1627198487357?e=2147483647&v=beta&t=GkhDhML28sg27hBGNbo-mLtzG2LRcReTGtLtFv8YeFM",
        bgColor: "bg-blue-200",
    },
    {
      id: "solution3",
      solution: "Performance Marketing",
      title: "Marketing Strategies That Help You Stay Ahead of the Competition",
      description:
        "Marketing is a race, and we’re here to make sure you’re not the one tripping over your shoelaces. Our data-driven approach will keep you ahead of the pack, converting browsers into buyers faster than you can say ‘ROI.’",
      image: "https://media.licdn.com/dms/image/C4E12AQEewYeoQlcUWA/article-cover_image-shrink_600_2000/0/1627198487357?e=2147483647&v=beta&t=GkhDhML28sg27hBGNbo-mLtzG2LRcReTGtLtFv8YeFM",
      bgColor: "bg-purple-200",
    }
  ];
  
  
  


  const [flippedStates, setFlippedStates] = useState<boolean[]>(
    Array(cards.length).fill(false)
  );

  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});

  const handleFlip = (index: number) => {
    const updatedStates = [...flippedStates];
    updatedStates[index] = !updatedStates[index];
    setFlippedStates(updatedStates);
  };


  return (
    <>
    <h1 className="text-center text-3xl font-bold my-10">Animation 4</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-11/12 mx-auto pt-4 mb-10 md:mb-12">
        
        {cards.map((card, index) => (
          <div
            key={card.id}
            ref={(el) => (sectionsRef.current[card.id] = el)}
            id={card.id}
            className="group w-full sm:w-full md:w-96 h-[500px] perspective"
          >
            <div
              className={`relative w-full h-full rounded-lg transform-style-preserve-3d transition-transform duration-500 ${
                flippedStates[index] ? "rotate-y-180" : ""
              }`}
            >
              <div
                className={`absolute w-full h-full backface-hidden rounded-2xl overflow-hidden ${card.bgColor}`}
              >
                <div className="border-2 border-black absolute top-8 left-6 bg-white px-6 py-3 rounded-full text-sm font-semibold">
                  {card.solution}
                </div>
                <div className="absolute top-8 right-6 rounded-full text-sm font-semibold">
                  <img
                    src="https://cdn.prod.website-files.com/66bbc417df501b935e5152c6/66cdb85d740ac1a54de3fdc1_icon-grid.svg"
                    alt=""
                    className="w-10"
                  />
                </div>
  
                <div className="p-4 h-1/3 flex flex-col items-center justify-center mt-20">
                  <h3 className="text-lg md:text-2xl font-bold">{card.title}</h3>
                </div>
  
                <div className="relative h-1/2">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => handleFlip(index)}
                    className="absolute bottom-4 right-4 px-5 py-5 border-2 border-black bg-white rounded-full shadow-md hover:bg-gray-100 transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
  
              <div
                className={`absolute w-full h-full backface-hidden rotate-y-180 rounded-lg flex flex-col items-center justify-center p-6 ${card.bgColor}`}
              >
                <div className="border-2 border-black absolute top-8 left-6 bg-white px-6 py-3 rounded-full text-sm font-semibold">
                  Solution
                </div>
                <div className="absolute top-8 right-6 rounded-full text-sm font-semibold">
                  <img
                    src="https://cdn.prod.website-files.com/66bbc417df501b935e5152c6/66cdb85d740ac1a54de3fdc1_icon-grid.svg"
                    alt=""
                    className="w-10"
                  />
                </div>
                <p className="text-justify text-md md:text-xl">
                  {card.description}
                </p>
                <button
                  onClick={() => handleFlip(index)}
                  className="px-5 py-4 border-2 border-black absolute bottom-4 right-4 bg-white rounded-full shadow-md hover:bg-gray-100 transition font-bold text-2xl"
                >
                  —
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>

  );
};

export default FlipCard;