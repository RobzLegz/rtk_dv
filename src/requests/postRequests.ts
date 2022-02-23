import axios from "axios";
import uploadImage from "./uploadImage";

const createPost = async (
    e: any, 
    text: string, 
    file: any, 
    token: string,
    dispatch: any, 
    router: any, 
    loading: boolean, 
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setError: React.Dispatch<React.SetStateAction<string>>
) => {
    e.preventDefault();

    if(loading){
        return
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
            setLoading(false);
        }).catch((err: any) => {
            const message: string = err.response.data.err;
            setLoading(false);
            setError(message);
        });
}

export {
    createPost
};