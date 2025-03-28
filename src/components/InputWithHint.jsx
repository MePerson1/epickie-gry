const InputWithHint = ({ fieldName, typeOf, example, hint, id }) => {
  return (
    <div className="text-left">
      <label htmlFor={id} className="">
        <span> {fieldName}</span>

        <input
          id={id}
          className="input validator"
          type={typeOf}
          required
          placeholder={example}
        />

        <div className="validator-hint">{hint}</div>
      </label>
    </div>
  );
};

export default InputWithHint;
