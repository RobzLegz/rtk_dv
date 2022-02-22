import connectDB from "../../../src/utils/connectDB";
import valid from "../../../src/utils/valid";
import bcrypt from "bcrypt";
import Users from "../../../src/models/userModel";

connectDB();

export default async (req: any, res: any) => {
    switch(req.method){
        case "POST":
            await register(req, res)
            break;
    }
}

const register = async (req: any, res: any) => {
    try{
        const { username, name, course, rtk_id, email, password, cf_password } = req.body;

        const errMsg = valid(username, name, email, course, rtk_id, password, cf_password);
        if(errMsg){
            return res.status(400).json({err: errMsg});
        }

        const id_check = await Users.findOne({ rtk_id: rtk_id });
        if(id_check){
            return res.status(400).json({err: "A user with this RTK id already exists."});
        }

        const username_check = await Users.findOne({ username: username });
        if(username_check){
            return res.status(400).json({err: "A user with this username already exists."});
        }

        const email_check = await Users.findOne({ email: email });
        if(email_check){
            return res.status(400).json({err: "A user with this email already exists."});
        }

        const passwordHash = await bcrypt.hash(password, 12);

        const newUser = new Users({
            username, email, password: passwordHash
        });

        await newUser.save();
        res.json({msg: "Register Success!"});
    }catch(err: any){
        return res.status(500).json({err: err.message});
    }
}