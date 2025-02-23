import LoginForm from "@/components/login/LoginForm";

const LoginPage = () => {
  return (
    <div className="w-full h-[100vh] mt-[25vh]">
      <div className="flex-col center gap-[54px]">
        <img src="/assets/logo.svg" alt="서울우유협동조합" width={"315px"}/>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
