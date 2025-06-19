import UserProfile from "./components/UserProfile";
const App = () => {
  return (
    <div>
      <UserProfile
        name="Kalaiselvi Palanisamy"
        email="kalaiselvi.palani02@gmail.com"
        location="India"
        about="Publishing and graphic design, Lorem ipsum is a placholder text commonly used to demonstrate the visual form."
      />
      <UserProfile
        name="Agnes"
        email="agens@gmail.com"
        location="India"
        about="Publishing and graphic design, Lorem ipsum is a placholder text commonly used to demonstrate the visual form."
      />
    </div>
  );
};

export default App;
