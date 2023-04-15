const Loader = () => {
  return (
    <div className="w-full h-[100vh] fixed top-0 left-0 bg-white flex justify-center items-center z-[100]">
      <div className="md:w-1/3 w-[80%] text-[1.2rem] md:text-[2rem] font-bold p-[25px] md:py-[20px] rounded-2xl flex flex-col gap-4 justify-center items-center">
        <div className="w-[60px] md:w-[80px] h-[60px] md:h-[80px] bg-gradient-to-b from-[#fdc901] to-[#006701] rounded-full relative rotate">
          {/* <div className="w-1/3 h-full bg-white"></div> */}
          <div className="w-2/3 h-2/3 bg-white rounded-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></div>
        </div>
        {/* <h1 className="sm:text-[1.4rem]">Loading...</h1> */}
      </div>
    </div>
  );
};

export default Loader;
