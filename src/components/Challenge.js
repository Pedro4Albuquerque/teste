const Challenge = () => {
  const i = 10;
  const x = 40;

  const handleMyEvent = () => {
    console.log("i:", i);
    console.log("x:", x);
    console.log("Soma =", i + x);
    alert(`Os valores de i e x são: ${i} e ${x}.\nA soma é: ${i + x}`);
  };

  return (
    <div>
      <h3>Desafio concluído!</h3>
      <p>Os valores de i e x são: {i} e {x}</p>
      <div>
        <button onClick={handleMyEvent}>Clique aqui para somar os valores</button>
      </div>
    </div>
  );
};

export default Challenge;
