export const getQuestions = async()=>{
    // https://raw.githubusercontent.com/itmmckernan/triviaJSON/master/world.json
        const response = await fetch('https://byte-0dmt.onrender.com/api/questions',{
            method:"GET",
        })
        return response;
}

