import mongoose from 'mongoose'
import moment from "moment"
const Schema = mongoose.Schema;

const Project = new Schema({
  id:{
    type:String,
    required:true
  },
  name:{
    type:String,
    required:true
  },
  collectionCount:{
    type:Number,
    required:true
  },
  blockchainType:{
    type:String,
    required:true
  },
  saleStatusType:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:true
  },
  hasPresale:{
    type:Boolean,
    required:true
  },
  presale:{
    price:{
      type:Number,
      default:0
    },
    date:{
      type:Date,
      required:false
    },
    time:{
      type:String,
      required:false
    }
  },
  publicsale:{
    price:{
      type:Number,
      required:true
    },
    date:{
      type:Date,
      required:true
    },
    time:{
      type:String,
      required:true
    }
  },
  imageUrl:{
    type:String
  },
  imageName:{
    type:String
  },
  imageId:{
    type:String
  },
  socialInformation:{
    twitterUrl:{
      type:String,
      required:false
    },
    discordUrl:{
      type:String,
      required:false
    },
    twitterFollowerCount:{
      type:Number,
      default:0
    },
    discordFollowerCount:{
      type:Number,
      default:0
    },
    email:{
      type:String,
      required:true
    },
    website:{
      type:String,
      required:false
    },
  },
  services:{
    featureRequested:{
      type:Boolean,
      required:true
    },
    featureRequestedStartDate:{
      type:Date,
      required:false
    },
    featureRequestedEndDate:{
      type:Date,
      required:false
    },
    twitterShoutout:{
      type:String,
      required:false
    },
    discordShoutout:{
      type:String,
      required:false
    },
    frontPageRequested:{
      type:Boolean,
      required:true
    },
    frontPageRequestedStartDate:{
      type:Date,
      required:false
    },
    frontPageRequestedEndDate:{
      type:Date,
      required:false
    },
    growthInterest:{
      type:Boolean,
      required:true
    },
    discordContact:{
      type:String,
      required:false
    }

  },
  dateCreated:{
    type:Date,
    default:moment()
  },
  paymentComplete:{
    type:Boolean,
    default:false
  },
  approved:{
    type:Boolean,
    default:false
  }
  

})

module.exports = mongoose.models.Project || mongoose.model("Project", Project);
