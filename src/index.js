import { createRoot } from "react-dom/client";
import { BookItem } from './components/BookItem';

const App = () => {
 return (
    <div>
      <h1>This is my Base</h1>
      <BookItem />
    </div>
  )
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);
