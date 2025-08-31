import { useRouteError } from 'react-router-dom';

function ErrorPage() {
  const errorObj = useRouteError();

  return (
    <div id={'error-page'} className="page">
      <h1>Error page Example</h1>
      <p>
        <i>{errorObj.statusText || errorObj.message}</i>
      </p>
    </div>
  );
}

export default ErrorPage;
