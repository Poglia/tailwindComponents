const Card = () => {
  return (
    <div className="bg-white w-1/5 m-10  p-5 text-black rounded-md">
      <div className="flex flex-row">
        <div className="border border-black/10 rounded-full w-14 h-14 flex items-center justify-center text-5xl">
          😊
        </div>
        <div className="flex flex-col ml-4 gap-2">
          <h1 className="font-bold">Pedro Poglia</h1>
          <p className="text-black/30">Te mandou um convite!</p>
        </div>
      </div>
      <div className="flex mt-5 gap-3.5">
      <button className="bg-blue-700 py-1 px-5 text-white rounded-md cursor-pointer">Aceitar</button>
      <button className="py-1 px-5 rounded-md border border-gray-300 cursor-pointer">Negar</button>

      </div>
    </div>
  );
};

export default Card;