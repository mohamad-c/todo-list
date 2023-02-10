import React from "react";
import { Group, Card, Badge, ActionIcon } from "@mantine/core";
import { FiTrash } from "react-icons/fi";

const TaskCard = () => {
  return (
    <Card shadow="md">
      <Group position="apart" spacing={60}>
        <p className="font-sans text-gray-200">hi mom</p>
        <Badge>Done</Badge>
      </Group>
    </Card>
  );
};

export default TaskCard;
