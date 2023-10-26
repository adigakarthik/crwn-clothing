import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };

  // let text = process.env.REACT_APP_FIREBASE_CONFIG;
  // console.log(JSON.parse(text));
  return (
    <div>
      <h1>Hello this is sign-in</h1>
      <button onClick={logGoogleUser}>Sign in with Google popup</button>
    </div>
  );
};

export default SignIn;
