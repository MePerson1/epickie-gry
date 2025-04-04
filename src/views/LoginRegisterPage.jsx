import InputWithHint from "../components/InputWithHint";

const LoginRegisterPage = () => {
  return (
    <div className="grid place-content-center min-h-screen bg-primary">
      <div className="flex flex-col md:flex-row items-center gap-8 rounded-2xl w-max ">
        <div className="grid bg-base-200 border border-primary rounded-2xl w-10/12 text-center shadow-lg  place-content-center p-20">
          <h2 className="text-2xl font-bold mb-4 pb-10">Zaloguj się</h2>
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

        <div className="text-xl font-bold ">Lub</div>

        <div className="grid bg-base-200 border border-primary rounded-2xl w-10/12 text-center shadow-lg  place-content-center p-20">
          <h2 className="text-2xl font-bold mb-4 pb-10">Zarejestruj się</h2>
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
