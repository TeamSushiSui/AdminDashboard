import EduverseClient from "./scripts/smc_interaction"
const Private_key = '<sui_private_key>'
const eduverseClient = new EduverseClient(Private_key);


const test = ()  => {
    console.log( eduverseClient.getUserDetails('0x94b203ed341992a60d3089ba98280c5aa2154e84b40d1aae7ac670c8619c13d7'));
}


export const addGame = (data: {
    name: string,
    description: string,
    address: string
}) => {
    console.log(eduverseClient.addGame(data.name, data.description, data.address))
}

export const addCourse = (data: {
    name: string,
    description: string,
    address: string
}) => {
    console.log(eduverseClient.addCourse(data.name, data.description, data.address))
}
export const getAllCourse = () => {
    console.log(eduverseClient.get_all_courses_addresses())
}