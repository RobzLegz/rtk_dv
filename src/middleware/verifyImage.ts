const verifyImage = (file: any) => {
    if(!file){
        return"No files were uploaded."
    }

    if(file.size > 1024 * 1024){
        return"Size too large."
    }

    if(file.mimetype !== "image/jpeg" && file.mimetype !== "image/png"){
        return "File format is incorrect.";
    }
}

export default verifyImage;