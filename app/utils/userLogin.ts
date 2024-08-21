

// const url = '/api/login'
// export const userLogin = async({
//     username,
//     password,
// }:{
//     username:string;
//     password:string;
// })=>{
//     try{
//         const response = await fetch(url,{
//             method:'POST',
//             headers:{
//                 'Content-Type':'application/json'
//             },
//             body:JSON.stringify({username,password}),
//         });
//         return response.json();
//     }catch (error){
//         return error
//     }
// }

interface LoginDetails {
    username: string;
    password: string;
}

export const userLogin = async ({ username, password }: LoginDetails) => {
    const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
        throw new Error('Login failed');
    }

    return response.json();
};