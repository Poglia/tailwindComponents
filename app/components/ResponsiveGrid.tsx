export const ResponsiveGrid = () => {
  return (
    <div className="container mx-auto bg-gray-300 p-5">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        <div className="h-60 col-span-2 md:h-full w-full bg-cover bg-center md:row-span-2 bg-[url('https://media.homify.com/tr:w-,h-700,angle-,c-maintain_ratio,q-auto,f-auto,bl-/p/photo/projects/e5cf41c1-c242-4ea2-8bb6-61b46e57de83.png')]"></div>
        <div className="h-32 w-full bg-cover bg-center md:h-60 bg-[url('https://media.homify.com/tr:w-,h-700,angle-,c-maintain_ratio,q-auto,f-auto,bl-/p/photo/projects/0124a3db-4a38-44a9-afa4-7016844e1232.png')]"></div>
        <div className="h-32 w-full bg-cover bg-center md:h-60 bg-[url('https://media.homify.com/tr:w-,h-700,angle-,c-maintain_ratio,q-auto,f-auto,bl-/p/photo/projects/30d93f5f-c05c-4ea9-a963-3fc002a057cd.png')]"></div>
      </div>
      <div>
        <h1 className="font-bold text-3xl py-5 text-black">Titulo Da Casa</h1>
        <ul className="flex gap-3 text-white">
          <li className="bg-green-800 px-3 py-1 rounded-2xl">Campo</li>
          <li className="bg-green-800 px-3 py-1 rounded-2xl">Moderno</li>
          <li className="bg-green-800 px-3 py-1 rounded-2xl">Piscina</li>
        </ul>
      </div>
    </div>
  );
};
