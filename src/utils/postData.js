export const postRound1Questions = async (payload, teamName) => {
    try {
        //put your api here to post 
        const response = await fetch('https://byte-0dmt.onrender.com/api/answers',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ payload, teamName }),
            });
        return await response.json(); // Handle response data
    } catch (error) {
        throw new Error('Failed to post round 1 questions');
    }
};
