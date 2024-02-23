import "./App.css";

function App() {
  return (
    <>
      <div id="top_nav">
        <div id="greeting_conatiner">
          Hello Sebastian, today is <strong>Feb 23, 2024</strong>
        </div>
        <div id="user_container">
          <img
            id="menu"
            src="https://cdn.icon-icons.com/icons2/1875/PNG/512/hamburgermenu_120234.png"
          />
          <img
            src="https://static.vecteezy.com/system/resources/previews/019/879/186/large_2x/user-icon-on-transparent-background-free-png.png"
            alt=""
            id="user_img"
          />
        </div>
      </div>

      <div id="main_dashboard"></div>

      <div id="daily_tasks"></div>

      <div id="other_widgets"></div>
      <div id="projects_container"></div>
    </>
  );
}

export default App;
