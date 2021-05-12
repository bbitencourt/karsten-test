import { differenceInMilliseconds } from "date-fns";

const waitALittle = () => {
  return new Promise<void>((r) => {
    setTimeout(() => r(), 1500);
  });
};

const waitABit = (timeout: number) => {
  return new Promise<void>((z) => {
    setTimeout(() => z(), timeout);
  });
};

export const processAfterWait = async () => {
  const startProcess = new Date();
  await Promise.all([waitALittle(), waitABit(2000)]);
  const endProcess = new Date();

  const diff = differenceInMilliseconds(endProcess, startProcess);
  localStorage.setItem("processTime", diff.toString());

  const processTime = localStorage.getItem("processTime");
  console.log(processTime);

  return processTime;
};
