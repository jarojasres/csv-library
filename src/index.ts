export const chunk = (arr: Array<any>, size: number) => {
  console.log("esto es una prueba");
  console.log("esto es una prueba 2");
  return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );
};
