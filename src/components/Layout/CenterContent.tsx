export const CenteredContent = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="w-full h-full flex justify-center items-center bg-emerald-800	text-zinc-50 text-xl font-sans">
      <div className="flex flex-col items-center">{children}</div>
    </div>
  );
};
