import InputWithHint from "../components/InputWithHint";

const LoginRegisterPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="flex flex-col md:flex-row items-center gap-8  p-5 rounded-2xl ">
        
        <div className="bg-base-200 border border-primary rounded-2xl p-6 w-80 text-center shadow-lg">
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
          <div className="p-2">
            <a className="link link-hover text-sm text-info">
              Nie pamiętasz hasła?
            </a>
          </div>
          
          <button className="btn btn-accent w-full mt-3">Zaloguj</button>
        </div>

        <div className="text-xl font-bold text-gray-500">Lub</div>

        <div className="bg-base-200 border border-primary rounded-2xl p-6 w-80 text-center shadow-lg">
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
          <button className="btn btn-accent w-full">Zarejestruj</button>
        </div>
      </div>
    </div>
  );
};

export default LoginRegisterPage;
