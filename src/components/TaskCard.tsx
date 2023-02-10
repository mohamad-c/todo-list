import { Group, Card, Badge, ActionIcon } from "@mantine/core";
import { FiTrash, FiEdit2, FiCheck } from "react-icons/fi";
import { Task } from "../helpers/interfaces";

interface TaskProps {
  items: Task[];
}

const TaskCard = ({ items }: TaskProps) => {
  return (
    <>
      {items.map((val) => (
        <Card shadow="md" key={val.id}>
          <Group position="apart" spacing={60}>
            <p className="font-sans text-gray-200">{val.title}</p>
            <Group>
              <ActionIcon color="red">
                <FiTrash />
              </ActionIcon>
              <ActionIcon color="yellow">
                <FiEdit2 />
              </ActionIcon>
              <ActionIcon color="teal">
                <FiCheck />
              </ActionIcon>
            </Group>
            <Badge>{val.status}</Badge>
          </Group>
        </Card>
      ))}
    </>
  );
};

export default TaskCard;
