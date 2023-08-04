export class WorkoutTracker {
  constructor(root) {
    this.root = root;
    this.root = insertAdjacentHTML("afterbegin", WorkoutTracker.html());
    this.entries = [];
    this.loadEntries();
    this.updateView();
  }

  static html() {
    return `<table class="tracker">
        <thead>
          <tr>
            <th>Date</th>
            <th>Workout</th>
            <th>Duration</th>
            <th></th>
          </tr>
        </thead>
        <tbody class="entries"></tbody>
          <tr class="tracker_row">
            <td><input type="date" class="tracker_date" /></td>
            <td>
              <select class="tracker_workout">
                <option value="running">Running</option>
                <option value="Outdoor-running">Outdoor Cycling</option>
                <option value="weight-lifting">Weight Lifting</option>
                <option value="cardio">Cardio</option>
                <option value="walking">Walking</option>
                <option value="yoga">Yoga</option>
              </select>
            </td>
            <td>
              <input type="number" class="tracker_duration" />
              <span class="tracker_text">minutes</span>
            </td>
            <td>
              <button type="button" class="tracker_button">&times;</button>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr class="tracker_row tracker_row-add">
            <td colspan="4">
              <button class="tracker_add">Add Entry &plus;</button>
            </td>
          </tr>
        </tbody>
      </table>`;
  }
  static rowhtml() {
    return `
          <tr class="tracker_row">
            <td><input type="date" class="tracker_date" /></td>
            <td>
              <select class="tracker_workout">
                <option value="running">Running</option>
                <option value="Outdoor-running">Outdoor Cycling</option>
                <option value="weight-lifting">Weight Lifting</option>
                <option value="cardio">Cardio</option>
                <option value="walking">Walking</option>
                <option value="yoga">Yoga</option>
              </select>
            </td>
            <td>
              <input type="number" class="tracker_duration" />
              <span class="tracker_text">minutes</span>
            </td>
            <td>
              <button type="button" class="tracker_button">&times;</button>
            </td>
          </tr>`;
  }

  loadEntries() {
    this.entries = JSON.parse(
      localStorage.getItem("workout-tracker-entries" || "[]")
    );
  }

  saveEntries() {
    localStorage.setItem(
      "workout-tracker-entries",
      JSON.stringify(this.entries)
    );
  }
  updateView() {
    const tableBody = this.roots.querySelector(".tracker-entries");
    const addRow = (data) => {
      const template = document.createElement("template");
      let row = null;

      template.innerHTML = WorkoutTracker.rowHTML().trim();
      row = template.content.firstElementChild;

      row.querySelector(".tracker_date").value = date.date;
      row.querySelector(".tracker_workout").value = date.workout;
      row.querySelector(".tracker_duration").value = date.duration;

      //   TODO add events for input changing
      //   TODO add events to delete row
      tableBody.appendChild(row);
    };

    tableBody.querySelectorAll(".tracker_row").forEach((row) => {
      row.delete;
    });

    this.entries.forEach(() => addRow(data));
  }
}
