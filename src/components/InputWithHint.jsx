const InputWithHint = ({ fieldName, typeOf, example, hint }) => {
  return (
    <div>
      <fieldset class="fieldset">
        <legend class="fieldset-legend font-bold">{fieldName}</legend>
        <input
          class="input validator"
          type={typeOf}
          required
          placeholder={example}
        />
        <div class="validator-hint">{hint}</div>
      </fieldset>
    </div>
  );
};

export default InputWithHint;
