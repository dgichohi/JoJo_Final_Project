import "../css/BackgroundLayout.css";

function BackgroundLayout({ image, children }) {
  return (
    <div
      className="background-layout"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="background-content">
        {children}
      </div>
    </div>
  );
}

export default BackgroundLayout;
