const mongoose = require("mongoose");

const minecraftSchema = new mongoose.Schema(
  {
    teamName: {
      type: String,
      required: true,
    },
    inGameName1: {
      type: String,
      required: true,
    },
    name1: {
      type: String,
      required: true,
    },
    email1: {
      type: String,
      required: true,
    },
    phone1: {
      type: Number,
      required: true,
    },
    discord1: {
      type: String,
      required: true,
    },

    inGameName2: {
      type: String,
      required: true,
    },
    name2: {
      type: String,
      required: true,
    },
    email2: {
      type: String,
      required: true,
    },
    phone2: {
      type: Number,
      required: true,
    },
    discord2: {
      type: String,
      required: true,
    },

    inGameName3: {
      type: String,
      required: true,
    },
    name3: {
      type: String,
      required: true,
    },
    email3: {
      type: String,
      required: true,
    },
    phone3: {
      type: Number,
      required: true,
    },
    discord3: {
      type: String,
      required: true,
    },

    inGameName4: {
      type: String,
      required: true,
    },
    name4: {
      type: String,
      required: true,
    },
    email4: {
      type: String,
      required: true,
    },
    phone4: {
      type: Number,
      required: true,
    },

    discord4: {
      type: String,
      required: true,
    },

    inGameName5: {
      type: String,
      required: true,
    },
    name5: {
      type: String,
      required: true,
    },
    email5: {
      type: String,
      required: true,
    },
    phone5: {
      type: Number,
      required: true,
    },
    discord5: {
      type: String,
      required: true,
    },

    image: {
      data: Buffer,
      contentType: String,
    },
  },
  { timestamps: true }
);

// export default mongoose.model("Minecraft", minecraftSchema);

const minecraftModel = mongoose.model(
  "minecraft-registration",
  minecraftSchema
);
module.exports = minecraftModel;
