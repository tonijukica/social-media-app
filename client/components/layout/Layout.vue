<template>
 <div>
  <appbar/>
  <router-view class="pad"/>
  <custom-footer/>
 </div>
</template>

<script>
import Appbar from './Bar';
import CustomFooter from './Footer';
export default {
  components: {
    Appbar,
    CustomFooter
  }
}
</script>

<style>
.pad{
  padding-bottom: 60px;
}
</style>
