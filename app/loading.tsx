import { HeartHandshake } from "lucide-react";

export default function Loading() {
  return (
    <div className="grid min-h-screen place-items-center bg-footer text-white">
      <div className="text-center">
        <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary">
          <HeartHandshake className="h-9 w-9" />
        </span>
        <p className="mt-5 text-[24px] font-extrabold tracking-[-0.04em]">
          Giveon<span className="text-primary">.</span>
        </p>
      </div>
    </div>
  );
}
