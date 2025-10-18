export default function Home() {
  const carteira1 = [10, 20, 50, 70, 80, 100, 150];
  const carteira2 = [5, 25, 50, 100, 200];
  const carteira3 = [1, 2, 3, 147, 148, 149];
  const carteira4 = [75];
  const carteira5 = [150];
  const carteira6: number[] = [];

  function verificarCarteira(carteira: number[]) {
    if (carteira.length < 2)
      return "❌ O dono dessa carteira não possui notas suficientes para ser considerado ladrão.";

    const carteiraFiltrada = carteira.filter((num) => num < 150);
    const combinacoes: string[] = [];

    for (let i = 0; i < carteiraFiltrada.length; i++) {
      for (let j = i + 1; j < carteiraFiltrada.length; j++) {
        if (carteiraFiltrada[i] + carteiraFiltrada[j] === 150) {
          combinacoes.push(`${carteiraFiltrada[i]} + ${carteiraFiltrada[j]} = 150`);
        }
      }
    }

    if (combinacoes.length === 0) {
      return "✅ O dono dessa carteira pode ser o ladrão (nenhuma combinação encontrada).";
    }

    let suspeita = "";
    if (combinacoes.length === 1) suspeita = "⚠️ Chance moderada de ser o ladrão.";
    else if (combinacoes.length === 2) suspeita = "🔥 Alta chance de ser o ladrão!";
    else suspeita = "🚨 Quase certeza que é o ladrão!";

    return `${combinacoes.join(" | ")} → ${suspeita}`;
  }

  const carteiras = [
    { id: 1, valores: carteira1 },
    { id: 2, valores: carteira2 },
    { id: 3, valores: carteira3 },
    { id: 4, valores: carteira4 },
    { id: 5, valores: carteira5 },
    { id: 6, valores: carteira6 },
  ];

  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">
        💰 Verificador de Carteiras
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
        {carteiras.map((c) => (
          <div
            key={c.id}
            className="bg-white shadow-md rounded-2xl p-5 border border-gray-200 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Carteira {c.id}
            </h2>
            <p className="text-gray-500 mb-2">
              Notas: {c.valores.length ? c.valores.join(", ") : "vazia"}
            </p>
            <p
              className={`font-medium ${
                verificarCarteira(c.valores).includes("❌")
                  ? "text-red-600"
                  : verificarCarteira(c.valores).includes("🔥") ||
                    verificarCarteira(c.valores).includes("🚨")
                  ? "text-orange-600"
                  : "text-green-600"
              }`}
            >
              {verificarCarteira(c.valores)}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
