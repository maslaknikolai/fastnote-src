<template functional>
    <div
      class="empty"
    >
      You have no any notes yet. Click "+" button to create your first note.
    </div>
</template>

<script>
    export default {}
</script>

<style lang="scss" scoped>
.empty {
  height: calc(100vh - 200px);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  text-align: center;
  opacity: 0.6;
}
</style>
