export const CenteredContent = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="flex flex-col items-center">{children}</div>
    </div>
  );
};
