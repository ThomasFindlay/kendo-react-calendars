import "@progress/kendo-theme-default/dist/all.css";
import "./App.css";
import PickDateOfBirth from "./components/calendar/PickDateOfBirth";
import BookDrivingSlot from "./components/calendar/BookDrivingSlot";
import RoomScheduler from "./components/scheduler/RoomScheduler";
function App() {
  return (
    <div className="App">
      <PickDateOfBirth />
      <hr className="k-my-8" />
      <BookDrivingSlot />
      <hr className="k-my-8" />
      <RoomScheduler />
    </div>
  );
}

export default App;
