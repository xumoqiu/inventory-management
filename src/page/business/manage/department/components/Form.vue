<template>
  <el-form :inline="true" :model="currentValue">
    <el-form-item label="部门名称">
      <el-input v-model="currentValue.name" placeholder="请输入部门名称"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="handleSubmit">保存</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import vModel from '@/mixins/v-model.js'
export default {
  mixins: [
    vModel
  ],
  props: {
    value: {
      type: Object,
      required: false,
      default: () => ({})
    },
    mode: {
      type: String,
      required: false,
      default: 'new'
    }
  },
  data () {
    return {
      currentValue: {}
    }
  },
  methods: {
    handleSubmit () {
      this.$emit('submit', this.currentValue)
    }
  }
}
</script>
