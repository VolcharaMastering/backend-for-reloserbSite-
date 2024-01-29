import { observer } from "mobx-react-lite";
import "./Blog.scss";
import PopupState from "../../stores/PopupState";

const Blog = observer(() => {
  const { opened, setClosed, setOpened } = PopupState;
  return (
    <div>
      <button onClick={setOpened}>Open</button>
      {opened && (
        <div>
          POPUP
          <button onClick={setClosed}>Close</button>
        </div>
      )}
    </div>
  );
});

export default Blog;
