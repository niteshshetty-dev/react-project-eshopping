import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="https://videos.pexels.com/video-files/9771682/9771682-uhd_2732_1440_25fps.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-white text-4xl sm:text-5xl font-bold mb-6">
            Redefine Your Look
          </h1>
          <p className="text-white text-lg mb-8">
            Where fashion meets functionality. New arrivals weekly.
          </p>
          <Link
            to="/products"
            className="inline-block bg-white text-black px-6 py-3 rounded hover:bg-gray-200 transition text-sm font-medium"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
