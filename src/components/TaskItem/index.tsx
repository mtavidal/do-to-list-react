import { Item } from "./styles";

interface TaskItemProps {
  titulo: string;
  done?: boolean;
  concluirTarefa: () => void;
  deletarTarefa: () => void;
}

export default function TaskItem(props: TaskItemProps) {
  return (
    <Item done={props.done}>
      <span onClick={props.deletarTarefa}>❌</span>
      <p>{props.titulo}</p>
      <span onClick={props.concluirTarefa}>✔️</span>
    </Item>
  );
}
