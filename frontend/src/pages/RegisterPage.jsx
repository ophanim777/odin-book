function RegisterPage() {

  return (
    <div className="container mt-5">

      <div className="card p-4">

        <h2>Register</h2>

        <form>

          <input
            className="form-control mb-3"
            placeholder="First Name"
          />

          <input
            className="form-control mb-3"
            placeholder="Last Name"
          />

          <input
            className="form-control mb-3"
            placeholder="Email"
          />

          <input
            className="form-control mb-3"
            type="password"
            placeholder="Password"
          />

          <button className="btn btn-success">
            Register
          </button>

        </form>

      </div>

    </div>
  );
}

export default RegisterPage;