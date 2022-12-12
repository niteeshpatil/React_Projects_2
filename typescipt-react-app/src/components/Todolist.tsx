import classes from "./TodoItem.module.css";

const Todolist: React.FC<{ text: string; remove: () => void }> = (props) => {
  const removeHadler = () => {
    props.remove();
  };

  return (
    <li className={classes.item} onClick={removeHadler}>
      {props.text}
    </li>
  );
};

export default Todolist;
