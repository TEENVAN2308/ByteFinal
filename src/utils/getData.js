export const getQuestions = async()=>{
    // https://raw.githubusercontent.com/itmmckernan/triviaJSON/master/world.json
        const response = await fetch('http://localhost:5000/api/questions',{
            method:"GET",
        })
        return response;
}

