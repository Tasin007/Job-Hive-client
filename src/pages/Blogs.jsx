import BlogHero from "../components/BlogHero";

const Blogs = () => {
  const codeString = `
function authenticateUser(email, password) {
  const user = { id: 1, email };
  const accessToken = jwt.sign({ userId: user.id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
  const refreshToken = jwt.sign({ userId: user.id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' });
  return { accessToken, refreshToken };
}`;

  return (
    <div>
      <BlogHero></BlogHero>

      <section className="bg-gray-100 text-gray-800">
        <div className="container max-w-5xl px-4 py-12 mx-auto">
          <div className="grid gap-4 mx-4 sm:grid-cols-12">
            <div className="col-span-12 sm:col-span-3">
              <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-indigo-600">
                <h3 className="text-3xl font-semibold">Blog</h3>
                <span className="text-sm font-bold tracking-wide uppercase text-gray-600">
                  Insights and Updates
                </span>
              </div>
            </div>
            <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
              <div className="space-y-12 relative px-4 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-300">
                {/* Blog Post 1 */}
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-indigo-600">
                  <h3 className="text-xl font-semibold tracking-wide">
                    What is an access token and refresh token? How do they work
                    and where should we store them on the client-side?
                  </h3>
                  <time className="text-xs tracking-wide uppercase text-gray-600">
                    Jan 2023
                  </time>
                  <p className="mt-3">
                    An access token is a short-lived token that grants temporary
                    authorization to access a resource. It is used in API
                    requests to ensure that the client has been authenticated
                    and has permission to access the requested resource. A
                    refresh token, on the other hand, is a long-lived token that
                    is used to generate new access tokens. This is useful when
                    the access token expires, as it allows the client to obtain
                    a new access token without the user needing to manually
                    re-authenticate. Access tokens should be stored in a way
                    that minimizes the risk of interception or unauthorized
                    access. In a web application, they are typically stored in
                    memory, or in some cases, in an HTTP-only cookie to protect
                    against cross-site scripting (XSS) attacks. Refresh tokens
                    require even more protection because they have a longer
                    lifespan; they are often stored securely on the server or in
                    a secure, HTTP-only cookie if they must be stored on the
                    client-side.
                  </p>
                </div>
                {/* Blog Post 2 */}
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-indigo-600">
                  <h3 className="text-xl font-semibold tracking-wide">
                    What is express js? What is Nest JS?
                  </h3>
                  <time className="text-xs tracking-wide uppercase text-gray-600">
                    Feb 2023
                  </time>
                  <p className="mt-3">
                    Express.js is a minimal, open-source server-side web
                    application framework for Node.js, designed for building web
                    applications and APIs. It is known for its simplicity,
                    flexibility, and scalability. Express provides a thin layer
                    of fundamental web application features, without obscuring
                    Node.js features, which are highly appreciated by developers
                    for creating server-side logic. NestJS is a framework for
                    building efficient, reliable, and scalable server-side
                    applications. While it is built with and fully supports
                    TypeScript (yet still enables developers to code in pure
                    JavaScript), it combines elements of Object-Oriented
                    Programming, Functional Programming, and Functional Reactive
                    Programming. NestJS leverages the robust HTTP Server
                    frameworks like Express.js (the default) or Fastify. NestJS
                    provides an out-of-the-box application architecture which
                    allows developers and teams to create highly testable,
                    scalable, loosely coupled, and easily maintainable
                    applications.
                  </p>
                </div>
                {/* Blog Post 3 */}
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-indigo-600">
                  <h3 className="text-xl font-semibold tracking-wide">
                    Explain your code.
                  </h3>
                  <time className="text-xs tracking-wide uppercase text-gray-600">
                    Mar 2023
                  </time>
                  <p className="mt-3">
                    <pre>{codeString}</pre>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
