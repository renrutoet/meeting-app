export const removeFromArr = <T>(arr: T[]) => {
  return (targetIndex: number): T[] => {
    const temp = [...arr];
    temp.splice(targetIndex, 1);
    return temp;
  };
};
