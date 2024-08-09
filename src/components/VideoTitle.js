const VideoTitle = (props) => {
  const { title, overview } = props;
  return (
    <div className="w-screen aspect-video pt-[15%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-5xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
      <div className="">
        <button className="bg-white my-2 md:m-0 rounded-md text-black py-1 px-3 md:py-4 md:px-16 md:text-xl font-bold hover:bg-opacity-75">
          ▷ Play
        </button>
        <button className="hidden md:inline-block bg-gray-500 bg-opacity-50 rounded-md text-white p-4 px-12 mx-2 text-xl font-bold hover:bg-opacity-30">
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
