export const ResponsiveTable = () => {
  return (
    <div className="container mx-auto p-5 text-black">
      <table className="w-full mx-2">
        <thead>
          <tr className="border-b-1 border-gray-500 text-left text-sm">
            <th className="py-2">Nome</th>
            <th className="hidden md:table-cell">Titulo</th>
            <th className="hidden md:table-cell">Email</th>
            <th>Função</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b text-left text-sm text-gray-400 border-gray-400">
            <td className="py-2">
                <p className="font-bold text-black">Ana Costa</p>
                <p className="block md:hidden">Analista de Dados</p>
                <p className="block md:hidden">Ig7iA@example.com</p>
                </td>
            <td className="hidden md:table-cell">Analista de Dados</td>
            <td className="hidden md:table-cell">Ig7iA@example.com</td>
            <td>Usuário</td>
            <td>
              <a href="">Editar</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
