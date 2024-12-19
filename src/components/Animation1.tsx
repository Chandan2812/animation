import React from "react";

const Animation1: React.FC = () => {
  const images = [
    "https://cdn.prod.website-files.com/66bbc417df501b935e5152c6/66d1e01b42c938feacfa2514_header-1.webp",
    "https://cdn.prod.website-files.com/66bbc417df501b935e5152c6/66d1e00f309c532bd8417776_header-2.webp",
    "https://cdn.prod.website-files.com/66bbc417df501b935e5152c6/66d0c0ddfe34079809b6cf6e_header-3.webp",
  ];

  return (
    <div
      id="top"
      className="flex flex-col items-center justify-center bg-white mt-5"
    >
        <h1 className="text-center text-3xl font-bold mb-5">Animation 1</h1>

      {/* Rotating Cards */}
      <div className="relative md:w-80 w-52 h-96">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute md:w-80 w-52 h-[400px] rounded-lg transition-transform duration-500 ease-in-out
              ${index === 0 ? "z-20" : "z-10"}
              card-${index}`}
          >
            <img
              src={src}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>

      {/* Animation Style */}
      <style>
        {`
          @keyframes rotateCards {
            0% {
              transform: translateX(0%) scale(1);
              z-index: 20;
            }
            33% {
              transform: translateX(-50%) scale(0.8);
              z-index: 10;
            }
            66% {
              transform: translateX(50%) scale(0.8);
              z-index: 10;
            }
            100% {
              transform: translateX(0%) scale(1);
              z-index: 20;
            }
          }

          .card-0 {
            animation: rotateCards 6s infinite ease-in-out;
          }

          .card-1 {
            animation: rotateCards 6s infinite ease-in-out;
            animation-delay: 2s;
          }

          .card-2 {
            animation: rotateCards 6s infinite ease-in-out;
            animation-delay: 4s;
          }
        `}
              
      </style>
    </div>
  );
};

export default Animation1;