export const postTeam = async (teamName) => {
    try {
        // console.log("teamName in postTeam function", teamName)
        //put your api here to post 
        const response = await fetch('https://byte-0dmt.onrender.com/api/teams',
             {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({teamName:teamName}),
        });
        return await response.json(); // Handle response data
    } catch (error) {
        throw new Error('Failed to post round 1 questions');
    }
};
