<template functional>
  <div class="logo">
    <img src="@/assets/logo.png" class="logo__img" />
    <span class="logo__text">FASTNOTE</span>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.logo {
  position: relative;
	font: 800 1.5rem var(--default-font);
	&__img {
    width: 40px;
		margin-right: 10px;
		position: relative;
		top: 3px;
  }
	&__text {
		user-select: none;
  }
}
</style>
