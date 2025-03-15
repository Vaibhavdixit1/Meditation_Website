import { useRouter } from "next/router"; // Use next/router for page-based routing
import React from "react";

const ProgramId = () => {
  const router = useRouter();
  const { id } = router.query; // Get the 'id' from the URL query parameters

  if (!id) {
    return <div>Loading...</div>; // Handle loading state until the query is available
  }

  return (
    <div>
      <h1>Program Detail for ID: {id}</h1>
    </div>
  );
};

export default ProgramId;
