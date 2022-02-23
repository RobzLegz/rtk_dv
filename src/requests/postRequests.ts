import axios from "axios";
import uploadImage from "./uploadImage";
import {PostInterface} from "../interfaces/postInterface";
import { publishPost } from "../redux/slices/postSlice";

const createPost = async (
    e: any, 
    text: string, 
    file: any, 
    token: string,
    dispatch: any, 
    loading: boolean, 
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setError: React.Dispatch<React.SetStateAction<string>>
) => {
    e.preventDefault();

    if(loading){
        return
    }

    if(!text && !file){
        setError("Cant create an empty post");
        setLoading(false);
        return;
    }

    setLoading(true);

    const media = await uploadImage(file);

    const headers = {
        headers: {
            Authorization: token
        }
    }

    const data = {
        text: text,
        media: media
    };

    axios.post("/api/posts", data, headers)
        .then((res: any) => {
            const newPost: PostInterface = res.data;
            dispatch(publishPost(newPost));
            setLoading(false);
        }).catch((err: any) => {
            const message: string = err.response.data.err;
            setError(message);
            setLoading(false);
        });
}

export {
    createPost
};