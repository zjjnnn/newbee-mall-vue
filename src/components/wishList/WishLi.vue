<template>
  <div id="app">
    <table>
      <tr>
        <th>
          <input type="checkbox" v-model="allSelected" @change="selectAll" />
        </th>
        <th align="left">select all</th>
      </tr>
      <tr v-for="user of users" :key="user.id">
        <td>
          <input type="checkbox" v-model="selected" :value="user.id" />
        </td>
        <td>{{ user.name }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      users: [
        { id: "1", name: "jane smith", email: "jane.smith@yahoo.com" },
        { id: "2", name: "john doe", email: "jdoe@yahoo.com" },
        { id: "3", name: "dave jones", email: "davejones@hotmail.com" },
        { id: "4", name: "alex smith", email: "alex@leannon.com" },
      ],
      selected: [],
      allSelected: false,
    };
  },
  methods: {
    selectAll() {
      if (this.allSelected) {
        const selected = this.users.map((u) => u.id);
        this.selected = selected;
      } else {
        this.selected = [];
      }
    },
  },
};
</script>
