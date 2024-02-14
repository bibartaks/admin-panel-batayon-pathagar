"use client";

import { useFormState, useFormStatus } from "react-dom";
import SubmitButton from "../SubmitButton";
import { createFormData } from "./higher_math_2";

export default function HigherMath_1() {
  const initialState = {
    teacher: "",
    video_playlist: "",
    batch: "",
    chapter: "",
  };

  const [state, formAction] = useFormState(createFormData, initialState);
  console.log(state);
  const { pending } = useFormStatus();

  return (
    <main className="py-10">
      <div className="container">
        <h1 className="text-2xl mb-5 font-medium">
          Add Higher Math 2 Paper contents
        </h1>
        <form
          action={formAction}
          className="flex flex-col  w-[100%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%] space-y-8 border border-ring px-2 py-5"
        >
          <input
            type="text"
            name="teacher_name"
            id="teacher_name"
            placeholder="Enter the teacher name"
            className={`  py-2 px-1 bg-transparent border-2 focus:outline-none focus:border-primary text-black placeholder-gray-400 caret-[#e815b7]   focus:shadow-2xl	`}
            required
          />
          <input
            type="text"
            name="playlist"
            id="playlist"
            placeholder="Enter the video playlist"
            className={`  py-2 px-1 bg-transparent border-2 focus:outline-none focus:border-primary text-black placeholder-gray-400 caret-[#e815b7]   focus:shadow-2xl	`}
            required
          />
          <input
            type="text"
            name="batch"
            id="batch"
            placeholder="Enter the batch"
            className={`  py-2 px-1 bg-transparent border-2 focus:outline-none focus:border-primary text-black placeholder-gray-400 caret-[#e815b7]   focus:shadow-2xl	`}
            required
          />
          <input
            type="chapter_number"
            name="chapter_number"
            id="chapter_number"
            placeholder="Enter the chapter number"
            className={`  py-2 px-1 bg-transparent border-2 focus:outline-none focus:border-primary text-black placeholder-gray-400 caret-[#e815b7]   focus:shadow-2xl	`}
            required
          />
          {/* <textarea
            name="fuck"
            placeholder="batch"
            cols={30}
            id="messages"
            rows={7}
            required
            className={`  py-2 px-1 bg-transparent border-b-2 focus:outline-none focus:border-[#e815b7] text-white placeholder-gray-400 caret-[#e815b7]	`}
          ></textarea> */}

          <SubmitButton />
          <p className="text-black opacity-90">{state?.message} </p>
        </form>
      </div>
    </main>
  );
}
