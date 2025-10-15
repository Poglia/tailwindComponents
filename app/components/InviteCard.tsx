import Image from "next/image";

export const InviteCard = () => {
  return (
    <div className="bg-white m-10 p-5 text-black rounded-md w-96">
      <div className="flex flex-row items-center">
          <Image src="https://i.pravatar.cc/150?img=3" alt="avatar"  width={100} height={100} className="border border-black/10 rounded-full w-16 h-16" />
        <div className="flex flex-col ml-4 gap-1">
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

;