export const getQuestions = async()=>{
        const response = await fetch('https://raw.githubusercontent.com/itmmckernan/triviaJSON/master/world.json',{
            method:"GET",
        })
        return response;
}

