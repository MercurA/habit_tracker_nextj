import Button from "./components/button/Button";
import Calendar from "./components/calendar/Calendar";
import Dropdown from "./components/dropdown/Dropdown";
import Form from "./components/form/Form";
import TextArea from "./components/input/TextArea";
import NavMenu from "./components/navmenu/NavMenu";

const MENU_ITEMS: Record<string, string>[] = [
  { name: 'Cravigs', color: '#ef476f' },
  { name: 'Takeouts', color: '#06d6a0' },
  { name: 'Sport', color: '#26547c' },
  { name: 'Gaming', color: '#ffd166' },
  { name: 'Gamedev', color: '#f26419' }
]

export default function Home() {
  return (
    <div>
      {'Welcoming page'}
    </div>
  );
}
