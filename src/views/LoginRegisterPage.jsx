import InputWithHint from "../components/InputWithHint";

const LoginRegisterPage = () => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-2 gap-3">
        <div className="border">
          {" "}
          <InputWithHint
            fieldName="Email"
            typeOf="email"
            example="email@site.com"
            hint="Podano nie poprawny email!"
          />
        </div>
        <div className="border">Register</div>
      </div>
    </div>
  );
};

export default LoginRegisterPage;
