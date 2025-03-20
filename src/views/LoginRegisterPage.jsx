import InputWithHint from "../components/InputWithHint";

const LoginRegisterPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="flex flex-col md:flex-row items-center gap-8  p-8 shadow-lg rounded-2xl">
        
        {/* Login Form */}
        <div className="bg-base-200 border border-primary rounded-2xl p-6 w-80 text-center">
          <h2 className="text-2xl font-bold mb-4">Zaloguj się</h2>
          <InputWithHint
            fieldName="Login / Email"
            typeOf="text"
            example=""
            hint="Podano nie poprawny login lub email!"
          />
          <InputWithHint
            fieldName="Hasło"
            typeOf="password"
            example=""
            hint="Haslo nie moze byc puste!"
          />
          <label className="flex items-center justify-center gap-2 text-sm mt-2">
            <input type="checkbox" className="checkbox" />
            Zapamiętaj mnie
          </label>
          <div className="text-sm text-blue-500 mt-2 cursor-pointer">
            Nie pamiętasz hasła?
          </div>
          <button className="mt-4 w-full py-2 bg-primary text-white rounded-lg">Zaloguj</button>
        </div>

        {/* OR Divider */}
        <div className="text-xl font-bold text-gray-500">Lub</div>

        {/* Register Form */}
        <div className="bg-base-200 border border-primary rounded-2xl p-6 w-80 text-center">
          <h2 className="text-2xl font-bold mb-4">Zarejestruj się</h2>
          <InputWithHint
            fieldName="Email"
            typeOf="email"
            example="kowalski@email.com"
            hint="Podano nie poprawny email!"
          />
          <InputWithHint
            fieldName="Nazwa użytkownika"
            typeOf="text"
            example="Marian123"
            hint="Nazwa użytkownika nie moze byc pusta!"
          />
          <InputWithHint
            fieldName="Hasło"
            typeOf="password"
            example=""
            hint="Haslo nie moze byc puste!"
          />
          <InputWithHint
            fieldName="Powtórz hasło"
            typeOf="password"
            example=""
            hint="Haslo nie moze byc puste!"
          />
          <button className="mt-4 w-full py-2 bg-primary text-white rounded-lg">Zarejestruj</button>
        </div>
      </div>
    </div>
  );
};

export default LoginRegisterPage;
