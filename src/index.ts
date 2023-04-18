export const chunk = (arr: Array<any>, size: number) => {
  console.log("esto es una prueba");
  return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );
};
