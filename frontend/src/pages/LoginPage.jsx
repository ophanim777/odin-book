function LoginPage() {

  return (
    <div className="container mt-5">

      <div className="card p-4">

        <h2>Login</h2>

        <form>

          <input
            className="form-control mb-3"
            placeholder="Email"
          />

          <input
            className="form-control mb-3"
            type="password"
            placeholder="Password"
          />

          <button className="btn btn-primary">
            Login
          </button>

        </form>

      </div>

    </div>
  );
}

export default LoginPage;