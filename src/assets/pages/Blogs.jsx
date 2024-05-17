const Blogs = () => {
  return (
    <div className="p-4 lg:p-12">
      <div className="container mx-auto px-4 py-8 bg-red-300 text-gray-700">
        <div className="text-4xl font-bold text-blue-600 py-8">
          What is an access token and refresh token? How do they work and where
          should we store them on the client side?
        </div>
        <h1 className="text-3xl font-bold mb-4">
          Access Token and Refresh Token
        </h1>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Access Token</h2>
          <p>
            An access token is a credential used by a client to access protected
            resources on behalf of a user. It's usually short-lived, typically
            lasting from a few minutes to a few hours. The token contains
            information about the permissions granted to the client and the user
            it represents.
          </p>
          <p>
            When a client makes a request to access a protected resource (like
            an API endpoint), it includes the access token in the request
            headers. The server validates this token to determine if the client
            has the necessary permissions.
          </p>
          <p>
            Access tokens are meant to be lightweight and are not typically used
            for long-term authentication.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Refresh Token</h2>
          <p>
            A refresh token is a credential used to obtain a new access token
            after the current access token expires. It's usually long-lived,
            lasting from days to months. Refresh tokens are securely stored by
            the client and are only exchanged with the authorization server to
            get a new access token.
          </p>
          <p>
            Unlike access tokens, refresh tokens are typically not included in
            requests to protected resources. They are used behind the scenes by
            the client to maintain continuous access without requiring the user
            to log in again.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">Where to Store Tokens</h2>
          <ul className="list-disc ml-6">
            <li className="mb-2">
              <strong>Access Tokens:</strong> Store in memory on the client
              side, typically in a variable.
            </li>
            <li className="mb-2">
              <strong>Refresh Tokens:</strong> Store securely, such as in
              HTTP-only cookies or secure storage mechanisms provided by the
              platform (e.g., Keychain on iOS, Keystore on Android).
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className="container mx-auto px-4 py-8 bg-red-300 my-6 text-gray-700">
          <div className="text-4xl font-bold text-blue-600 py-8">
            What is express js?
          </div>
          <h1 className="text-3xl font-bold mb-4">Express.js</h1>

          <p className="mb-4">
            Express.js is a minimalist web application framework for Node.js,
            designed for building web applications and APIs. It provides a
            robust set of features for web and mobile applications, simplifying
            tasks such as handling HTTP requests and responses, routing,
            middleware integration, and more. With Express.js, developers can
            quickly create scalable and maintainable web applications,
            leveraging the power of Node.js and its asynchronous, event-driven
            architecture. It is widely used in the industry and has a large
            ecosystem of third-party middleware and extensions, making it a
            popular choice for building modern web applications.
          </p>
        </div>

        <div>
          <div className="container mx-auto px-4 py-8 bg-red-300 my-6 text-gray-700">
            <div className="text-4xl font-bold text-blue-600 py-8">
              What is NEST Js?
            </div>
            <h1 className="text-3xl font-bold mb-4">Nest.js</h1>

            <p className="mb-4">
              Nest.js is a progressive Node.js framework for building efficient,
              reliable, and scalable server-side applications. It is heavily
              inspired by Angular and uses TypeScript, providing a similar
              architecture and design principles. Nest.js emphasizes modularity,
              allowing developers to organize their code into reusable modules
              and components. It promotes best practices such as dependency
              injection, modularization, and declarative programming, making it
              easy to write clean and maintainable code. Nest.js comes with
              built-in support for features like middleware, routing,
              validation, and more, enabling developers to build powerful APIs
              and web applications with ease.
            </p>
          </div>
        </div>

        <div>
          <div className="container mx-auto px-4 py-8 bg-red-300 my-6 text-gray-700">
            <div className="text-4xl font-bold text-blue-600 py-8">
              Explaining My Project
            </div>
            <h1 className="text-3xl font-bold mb-4">CAREER PATH</h1>

            <p className="mb-4">
              Career Path is a Full-Stack Website build on React Js. Following
              Technologies used in this project:
              <ol>
                <li>React Router Dom</li>
                <li>Tailwind CSS, Fancy Tailwind css, Daisy UI</li>
                <li>Framer Motion</li>
                <li>Firebase Authentication</li>
                <li>Express Js</li>
                <li>MongoDb</li>
                <li>
                  Secured 2 api (Applied Jobs and My Jobs) through JWT Token
                </li>
              </ol>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
