export const LoginScreen = () => {
  return (
    <div className="w-screen h-screen p-5 bg-gray-900 text-white">
      <div className="mt-5">
        <h1 className="text-3xl font-bold text-center">Sistema de Login</h1>

        <div className="my-6">
          <label className="block text-lg mb-2">Endereço de Email</label>
          <input
            type="email"
            className="w-full p-2 rounded-md text-lg bg-gray-800 border border-gray-700 
                      focus:outline-2 focus:outline-yellow-500"
          />
        </div>

        <div className="my-6">
          <label className="block text-lg mb-2">Senha</label>
          <input
            type="password"
            className="w-full p-2 rounded-md text-lg bg-gray-800 border border-gray-700 
                      focus:outline-2 focus:outline-yellow-500"
          />
        </div>

        <div className="my-6">
          <button className="w-full bg-yellow-500 text-white font-bold py-2 rounded-md hover:bg-yellow-600 transition cursor-pointer">
            Entrar
          </button>
        </div>
      </div>

      <div className="my-6 text-center">
        <p>
          Não é membro?{" "}
          <a className="text-yellow-500 font-bold hover:underline" href="#">
            Faça seu cadastro agora
          </a>
        </p>
      </div>
    </div>
  );
};
