export const GroupHover = () => {
  return (
    <div className="container mx-auto p-5">
        <div className="group/patatipatata bg-gray-200  p-5 rounded-3xl m-10 hover:bg-green-800 active:bg-green-300 transition-colors">
            <p className="text-black text-2xl group-hover/patatipatata:text-white">Texto 1 </p>
            <p className="text-blue-600 text-md group-hover/patatipatata:text-white">Texto 2</p>
        </div>
    </div>
  );
};