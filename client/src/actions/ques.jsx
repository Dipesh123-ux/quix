

export const getQuestions = async ()=>{
    let url = "/api/questions"
   const res =  await fetch(url,{
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type" : "application/json"
        }
    })

    const result = await res.json()

    return result;

}