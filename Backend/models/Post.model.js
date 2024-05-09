import mongoose from "mongoose";

const { Schema } = mongoose;

const PostSchema = new Schema({
    Postimg:{
        type:String, //cloudinary url
        required:true,
    },
    title:{
        type:String, 
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    Nooflike:{
        type:Number,
        default:0,
    },
    NoofComment:{
        type:Number,
        default:0,
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId ,
        ref: "User", 
        required:true,
    }
},{
    timestamps:true,
});

const Post = mongoose.model("Post", PostSchema);

export default Post;
