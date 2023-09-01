<template>
  <view class="delete">
    <u-modal
        :show="showDialog"
        :showCancelButton="true"
        :content="content"
        title="提醒"
        @cancel="cancel"
        @confirm="ok"
    ></u-modal>
  </view>
</template>

<script lang="ts" setup>
const props = defineProps<{
  content: string
}>()

const showDialog = ref(false)
const clickType = ref<'ok' | 'cancel' | 'default'>('default')
const emit = defineEmits(['ok','cancel'])

function toggle(visible: boolean) {
  showDialog.value = visible
}

function ok() {
  clickType.value = 'ok'
  emit('ok')
  toggle(false)
}

function cancel() {
  clickType.value = 'cancel'
  emit('cancel')
  toggle(false)
}

defineExpose({
  toggle,
  showDialog,
  clickType
})
</script>

<style lang="scss" scoped>
.delete {
  ::v-deep .u-modal {
    .u-modal__content {
      .u-modal__content__text {
        text-align: center;
      }
    }
  }
}
</style>
