export const PersonResponsiveCard = () => {
  return (
    <div className="container mx-auto">
      <div className="overflow-hidden p-6 bg-slate-800 rounded-2xl md:flex md:p-0">
        <div className="w-24 h-24 bg-cover bg-center rounded-full mx-auto md:w-48 md:h-auto md:rounded-none bg-[url('https://i.pravatar.cc/150?img=4')]"></div>
        <div className="grow ext-center pt-6 md:text-left md:p-8">
          <p className=" ">
            "Hoje eu consegui me limpar sozinho! Sem a ajuda da minha mãe. você
            está orgulhoso de mim papai?"
          </p>
          <h1 className="font-bold mt-5 text-blue-400">João Artur da Silva</h1>
          <h2 className="text-sm text-slate-500">Estudante, Carapicuiba </h2>
        </div>
      </div>
    </div>
  );
};
