import { Schema, model, models } from "mongoose";

export interface IEvent extends Document {
  _id: string
  title: string;
  description: string;
  loc: string;
  createdAt: Date;
  startDateTime: Date;
  endDateTime: Date;
  price?: string;
  isFree: boolean;
  url?: string;
  imageUrl: string;
  category?: { _id: string, name: string }
  organizer?: { _id: string, firstname: string, lastname: string }
}

const EventSchema = new Schema({
  title: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  },

  loc: {
    type: String,
  },

  createdAt: {
    type: Date,
    default: Date.now
  },

  startDateTime: {
    type: Date,
    default: Date.now
  },

  endDateTime: {
    type: Date,
    default: Date.now
  },

  price: {
    type: String,
  },

  isFree: {
    type: Boolean,
    default: false
  },

  url: {
    type: String,
  },

  imageUrl: {
    type: String,
    required: true
  },

  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },

  organizer: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
})

const Event = models.Event || model("Event", EventSchema)

export default Event