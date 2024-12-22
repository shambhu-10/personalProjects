

const signUp = async (req, res) => {

    try {
        console.log(req.body)

        res.status(201).send("user data received")
    } catch (error) {
        console.log("error occurred while doing signUp")
        res.status(401).send(error)
    }

}


const signIn = async (req, res) => {
    try {
        console.log("signIn successful")
        res.status(201).send("signIn done")
    } catch (error) {
        console.log("error occurred while signIn")
        res.status(401).send(err)
    }


}
export { signUp, signIn }




