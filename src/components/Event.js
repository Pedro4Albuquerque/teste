const Event = () => {
    const handleMeyEvent =(e)=>{
        console.log(e)
        console.log("Ativou o evento")
    }
    const handleMeyEvent2 =(e)=>{
        console.log(e)
        console.log("Agora eu Robei suas informação")
    }
    return(
        <div>
        <div>
            <button onClick={handleMeyEvent}>Clique Aqui</button>
        </div>
        <div>
            <button onClick= {handleMeyEvent2}>Clique Aqui para aceitar esses termos</button>
        </div>
        </div>
    );
};
export default Event;