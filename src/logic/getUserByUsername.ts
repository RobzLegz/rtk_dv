import { UserInterface } from "../interfaces/userInterface";

const getUserById = (users: UserInterface[] | null, username: string) => {
    if(!users){
        return null;
    }

    const user = users.find(u => u.username === username);

    if(!user){
        return null;
    }

    return user;
}

export default getUserById;