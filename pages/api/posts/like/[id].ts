import connectDB from "../../../../src/utils/connectDB";
import Posts from "../../../../src/models/postModel";
import auth from "../../../../src/middleware/auth";

connectDB();

export default async (req: any, res: any) => {
    switch(req.method){
        case "PUT":
            await likePost(req, res);
            break;
    }
}

const likePost = async (req: any, res: any) => {
    try{
        const {id} = req.query;

        const user = await auth(req, res);
        if(!user){
            return res.status(400).json({err: "Unauthorized"}); 
        }

        const reqUserId = user._id;

        const post = await Posts.findById({_id: id});
        if(!post){
            return res.status(400).json({err: "Couldn't find the post"}); 
        }

        let likes = post.likes;

        if(likes.includes(reqUserId)){
            likes.filter((id: string) => id !== reqUserId);
        }else{
            likes.push(reqUserId);
        }

        res.json("Updated successfuly");
    }catch(err: any){
        return res.status(500).json({err: err.message});
    }
}