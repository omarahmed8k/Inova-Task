import "./LoadingSpinner.scss";
export default function LoadingSpinner() {
  return (
    <div className="overlay-backdrop">
      <div className="overlay-spinner">
        <div className="spinner">
          <i className="fas fa-spinner fa-spin"></i>
        </div>
      </div>
    </div>
  );
}
