export default function Nav() {
  return (
    <>
      <div className="flex items-center justify-start w-screen h-16 gap-10 pl-16 mb-16 font-bold text-white bg-black">
        <span className="cursor-pointer hover:underline hover:underline-offset-8">
          Home
        </span>
        <span className="cursor-pointer hover:underline hover:underline-offset-8">
          News
        </span>
        <span className="cursor-pointer hover:underline hover:underline-offset-8">
          Sports
        </span>
        <span className="cursor-pointer hover:underline hover:underline-offset-8">
          Local
        </span>
      </div>
    </>
  );
}
