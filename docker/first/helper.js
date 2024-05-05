

export const connectToDatabase = () => new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log("Connected to Database");
        resolve()
    }, 2000);
})

