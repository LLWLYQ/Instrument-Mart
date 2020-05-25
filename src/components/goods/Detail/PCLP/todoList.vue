<template>
  <div class="PclpChild">
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <!-- {{todo}} -->
        <slot :todo="todo">
        </slot>
      </li>
    </ul>
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
      todos: {
      type: Array
    }
  },
  data() {
    return {
       
    }
  },
  methods: {
    
  },
  components: {

  },
  created(){
    // console.log(this.todos)
  },
  
}
</script>

<style lang="scss" scoped>

</style>
