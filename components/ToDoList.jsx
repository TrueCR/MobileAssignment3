import React from 'react';
import { ScrollView, View, Text, Pressable } from 'react-native';

function ToDoList({ tasks }) {
  return (
    <ScrollView>
      {tasks.map((task, index) => (
        <Pressable key={index}>
          <View style={styles.task}>
            <Text style={styles.taskText}>{task}</Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
}

export default ToDoList;
