import { useRouteError, isRouteErrorResponse } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();

  console.log('error', error);

  if (isRouteErrorResponse(error)) {
    return (
      <div id='error-page'>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred!!!.</p>
        <p>
          <i>{error.statusText}</i>
        </p>
      </div>
    );
  } else {
    return <h1>Bosh qa error: </h1>;
  }
}
