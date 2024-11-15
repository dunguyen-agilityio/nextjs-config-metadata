import { signIn } from "@/auth.config";
import { ROUTES } from "@/constants/route";

const SignPage = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google", { redirectTo: ROUTES.HOME });
      }}
    >
      <button type="submit">Login with Google</button>
    </form>
  );
};

export default SignPage;
