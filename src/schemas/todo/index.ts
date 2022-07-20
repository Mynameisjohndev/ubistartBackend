import mongoose, { Schema } from "mongoose";

const TodoSchema: Schema = new Schema(
  {
    description: { type: String, required: true },
    owner: { type: String, required: true },
    endTodo: { type: Date, required: true }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("TodoSchema", TodoSchema);