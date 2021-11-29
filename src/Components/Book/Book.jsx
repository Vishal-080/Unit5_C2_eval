import "./book.css";

export default function Book() {
  return (
    <div id="book">
      <div id="bookmenu">
        <h2>Ticket</h2>
        <select>
          <option value="Movies">Superman</option>
          <option value="Movies">Spider-man</option>
          <option value="Movies">Batman</option>
          <option value="Movies">Iron man</option>
          <option value="Movies">Ant-man</option>
          <option value="Movies">Aqua-man</option>
          <option value="Movies">Wonder-men</option>
        </select>
        <input type="datetime-local" />
        <br />
        <br />
        <button>Book</button>
      </div>
    </div>
  );
}
