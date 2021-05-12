export const removeObjectProperty = (
  object: Record<string, any>,
  property: string
): boolean => {
  if (!object) return false;
  if (!property) return false;

  const objectKeys = Object.keys(object);
  const hasProperty = objectKeys.includes(property);

  if (!hasProperty) return false;

  delete object[property];
  console.log(object);

  return true;
};
