export default async (time) => {
  await new Promise((resolve) => setTimeout(resolve, time));
};
