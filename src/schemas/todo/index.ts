import mongoose, { Schema } from "mongoose";

const TodoSchema: Schema = new Schema(
  {
    description: { type: String, required: true },
    owner: { type: String, required: true },
    endTodo: { type: Date, required: false },
    status: { type: String, required: false }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("TodoSchema", TodoSchema);