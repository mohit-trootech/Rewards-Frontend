/**NavBar Theme Options */
import { THEMES } from "../utils/Constants";

function Options() {
  /**Daisy UI Themes */
  return (
    <>
      {THEMES.map((themeOption) => (
        <option key={themeOption} value={themeOption}>
          {themeOption}
        </option>
      ))}
    </>
  );
}

export default Options;
