"use client";

interface Props {
  error: Error;
  reset: () => void;
}

// this page catches errors in all files except layout.tsx (global-error.tsx)
function ErrorPage({ error, reset }: Props) {
  // console.log("ERROR: ", error);

  return (
    <>
      <div>An unexpected error has occurred!</div>
      <button className="btn" onClick={() => reset()}>
        Retry
      </button>
    </>
  );
}

export default ErrorPage;
