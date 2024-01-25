import "../../../src/TotalCss/totalcss.css";

const Banner = () => {
  return (
      <div>
        <div className="text-center items-center my-24">
        <h1 className="mb-10 text-4xl font-bold">I Grow By Helping People In Need</h1>
        <div>
        <input type="text" className="border h-10  border-[#DEDEDE] rounded-l "/>
        <button className="px-5 text-white font-semibold py-2 rounded-r bg-[#FF444A]">Search</button>
        </div>
        </div>
      </div>
    
  );
};

export default Banner;
