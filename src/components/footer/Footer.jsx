import "./footer.css";

export default function Footer() {
  const years = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="f-lists">
        <ul className="f-list">
          <li className="f-list-item">Countries</li>
          <li className="f-list-item">Regions</li>
          <li className="f-list-item">Cities</li>
          <li className="f-list-item">Districts</li>
          <li className="f-list-item">Airports</li>
          <li className="f-list-item">Hotels</li>
        </ul>
        <ul className="f-list">
          <li className="f-list-item">Countries</li>
          <li className="f-list-item">Regions</li>
          <li className="f-list-item">Cities</li>
          <li className="f-list-item">Districts</li>
          <li className="f-list-item">Airports</li>
          <li className="f-list-item">Hotels</li>
        </ul>
        <ul className="f-list">
          <li className="f-list-item">Countries</li>
          <li className="f-list-item">Regions</li>
          <li className="f-list-item">Cities</li>
          <li className="f-list-item">Districts</li>
          <li className="f-list-item">Airports</li>
          <li className="f-list-item">Hotels</li>
        </ul>
        <ul className="f-list">
          <li className="f-list-item">Countries</li>
          <li className="f-list-item">Regions</li>
          <li className="f-list-item">Cities</li>
          <li className="f-list-item">Districts</li>
          <li className="f-list-item">Airports</li>
          <li className="f-list-item">Hotels</li>
        </ul>
        <ul className="f-list">
          <li className="f-list-item">Countries</li>
          <li className="f-list-item">Regions</li>
          <li className="f-list-item">Cities</li>
          <li className="f-list-item">Districts</li>
          <li className="f-list-item">Airports</li>
          <li className="f-list-item">Hotels</li>
        </ul>
      </div>
      <small>Copyright &copy; {years} B100DYbooking</small>
    </div>
  );
}
