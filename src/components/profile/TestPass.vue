<template>
  <el-form
    ref="ruleFormRef"
    :model="p"
    status-icon
    :rules="rules"
    label-width="120px"
    class="demo-ruleForm"
  >
    <el-form-item label="Password" prop="newPassword">
      <el-input v-model="p.newPassword" type="password" autocomplete="off" />
    </el-form-item>
    <el-form-item label="Confirm" prop="checkPassword">
      <el-input v-model="p.checkPassword" type="password" autocomplete="off" />
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { FormInstance } from "element-plus";
import { useStore } from "../../store/index";
import { onMounted, computed } from "vue";

const store = useStore();
onMounted(() => {
  store.dispatch("setProfile");
});
const p = computed(() => store.getters.getProfile);
const ruleFormRef = ref<FormInstance>();

const validatePass = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please input the password"));
  } else {
    if (p.value.checkPassword !== "") {
      if (!ruleFormRef.value) return;
      ruleFormRef.value.validateField("checkPassword", () => null);
    }
    callback();
  }
};
const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please input the password again"));
  } else if (value !== p.value.newPassword) {
    callback(new Error("Two inputs don't match!"));
  } else {
    callback();
  }
};

// const ruleForm = reactive({
//   pass: "",
//   checkPass: "",
//   age: "",
// });

const rules = reactive({
  newPassword: [{ validator: validatePass, trigger: "blur" }],
  checkPassword: [{ validator: validatePass2, trigger: "blur" }],
});
</script>
