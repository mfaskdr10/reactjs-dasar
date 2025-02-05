import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex justify-center items-center min-h-screen flex-col">
      <h1 className="text-5xl font-bold mb-4 text-red-700">Opps!</h1>
      <p className="text-2xl font-semibold mb-4">
        Sorry, an unexpected error has occured
      </p>
      <p className="text-xl font-semibold">
        {error.statusText || error.message}
      </p>
    </div>
  );
};

export default ErrorPage;
