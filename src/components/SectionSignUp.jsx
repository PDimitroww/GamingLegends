import LoginModal from "./modals/LoginModal";

export const SectionSignUp = () => {
  return (
    <div className="signUp">
      <h4>Don't miss any offers and promotions!</h4>

      <LoginModal />

      <p>
        If you already have an account, just{" "}
        <a className="loginLink" href="#">
          login
        </a>
        .
      </p>
    </div>
  );
};
