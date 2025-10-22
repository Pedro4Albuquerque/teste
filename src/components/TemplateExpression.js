const TemplateExpression = () =>{
    const nome = "Igor Henrique";
    const data = {
        age: 20 ,
        job: "garoto de progama"
    };
    return(
        <div>
            <h1>Olá, {nome}, seja Bem vindo</h1>
            <p> Você  atua com: {data.job}</p>
            <p> preço R$ {(16+8)}, 00</p>
            <p>{console.log("JSX react")}</p>
        </div>
    );
};
export default TemplateExpression;