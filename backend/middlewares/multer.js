import multer from 'multer'
import fs from 'fs'

  // const images = './public/images'
  // if(!fs.existsSync(images)){
  //   fs.mkdirSync(images, {recursive: true})
  // }

  // const storage = multer.diskStorage({
  //   destination: function (req, file, cb) {
  //     cb(null, images)
  //   },
  //   filename: function (req, file, cb) {
  //     cb(null, `${Date.now()}- ${file.originalname}`)
  //   }
  // })
  const storage = multer.memoryStorage()

  const upload = multer({
    storage,
    limits: {
      fileSize: 5*1024*1024
    },
    fileFilter:(req,file,cb) => {
      if(file.mimetype.startsWith('image/')){
        cb(null, true)
      }
      else{
        cb(new Error("only Images Files are allowed"),false)
      }
    }
  })

  export default upload