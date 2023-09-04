<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view class="text-area bg-blue-500 px-30">
      <text class="px-52 bg-blue-500">{{ title }}</text>
    </view>
    <view class="bg-amber-100 w-50 h-20 text-3xl font-bold underline">你好</view>
    <view class="container bg-red-400 h-[50px]"> </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: 'Hello'
    }
  },
  onLoad() {},
  methods: {}
}
</script>

<style></style>
