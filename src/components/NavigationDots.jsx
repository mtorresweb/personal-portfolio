/* eslint-disable react/prop-types */
const NavigationDots = ({ active }) => (
  <div className="app__navigation">
    {["home", "about", "skills", "projects", "certificates", "contact"].map(
      (item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className="app__navigation-dot"
          style={
            active === item ? { backgroundColor: "rgb(125, 99, 218)" } : {}
          }
        />
      )
    )}
  </div>
);

export default NavigationDots;
