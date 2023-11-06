

export default function formatTimeDifference(createdAtString) {
    const createdAt = new Date(createdAtString);
    const currentDate = new Date();
    const timeDifference = currentDate - createdAt;
    const minutesDifference = Math.floor(timeDifference / (1000 * 60));
    
    return `${minutesDifference} min`;
  }
  
  // Example usage:
  const createdAtString = "2023-11-04T06:08:42.074Z";
  const formattedTime = formatTimeDifference(createdAtString);
  console.log(formattedTime); // Output: "26 min"