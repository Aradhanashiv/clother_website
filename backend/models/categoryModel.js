import { model, Model, Schema } from "mongoose";


const categorySchema = new Schema({
    categoryName: {
        type: String,
        enum: ['Women' , 'Men' , 'Kids'],
        required: true,
    },
     image: {
        type:[String]
     } ,
     isActive: {
        type: Boolean,
        default: true
     },
}, {timestamps: true}     
)

const Category = model('Category', categorySchema)

export default Category