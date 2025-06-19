import "./UserProfile.css";
import style from "./UserProfile.module.css";
//Traditional === html page., but in react  Component
const App = () => {
  //Inline style object for the conatiner
  const containerStyle = {
    textAlign: "center",
    margin: "20px",
  };
  return (
    <div style={containerStyle}>
      <img
        src="https://media.istockphoto.com/id/2181735944/photo/natural-mountains-landscapes.jpg?s=1024x1024&w=is&k=20&c=OXwSsyYxIaOa3Y_Q2kGKNssH1frc0FLoRuQl4Xj3fnU="
        alt="Nature"
        //apply style for image inline style
        style={{
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />
      <h2 className="name">Kalaiselvi Palanisamy</h2>
      <p className="bio">Full Stack Developer</p>
      <ul className={style.hobbies}>
        <li className={style.hobby}>Coding</li>
        <li className={style.hobby}>Singing</li>
      </ul>
    </div>
  );
};

export default App;
