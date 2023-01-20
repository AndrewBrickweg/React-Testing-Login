const Login = () => {
  return (
    <div>
      <form>
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <button disabled="true">Login</button>
        <span data-testid="error">Something went wrong!</span>
      </form>
    </div>
  );
};

export default Login;
