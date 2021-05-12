export const removeObjectProperty = (
  object: Record<string, any>,
  property: string
): Record<string, any> | boolean => {
  if (!object) return false;
  if (!property) return false;

  const objectKeys = Object.keys(object);
  const hasProperty = objectKeys.includes(property);

  if (!hasProperty) return false;

  delete object[property];

  return object;
};
