export const formatDate = (dateString) => {
  const original = dateString.split("T")[0];
  //   const original = new Date(dateString);
  console.log(original);
  const year = original[0 - 4];
  const month = original[4 - 6];
  const day = original[6 - 8];
  return `${year}/${month}/${day}`;
};

export const predictRain = (probabilityofprecip, relativehumidity) => {
  if (probabilityofprecip > 60 || relativehumidity > 50) {
    return "Yes";
  } else {
    return "No";
  }
};
