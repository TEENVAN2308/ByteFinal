export const postRound1Questions = async (payload) => {
    try {
        //put your api here to post 
        const response = await fetch('/api/round1/submit',
             {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });
        return await response.json(); // Handle response data
    } catch (error) {
        throw new Error('Failed to post round 1 questions');
    }
};
