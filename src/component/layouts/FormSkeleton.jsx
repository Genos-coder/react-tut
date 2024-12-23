function FormSkeleton({ height = "auto", width = "auto" }) {
  return (
    <form className="form-class" style={{ height, width }}>
      <h3 className="heading">Join Us!</h3>
      <div className="form-container">
        <div className="form-group">
          <label className="label" htmlFor="name">
            Name
          </label>
          <input className="input" type="text" name="name" id="name" />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="email">
            Email
          </label>
          <input className="input" type="text" name="email" id="email" />
        </div>
      </div>
      <button className="button" type="submit">
        I want to be a part of it
      </button>
    </form>
  );
}

export default FormSkeleton;
