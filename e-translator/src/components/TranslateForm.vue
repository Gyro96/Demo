<template>
  <div id="translateForm">
    <form v-on:submit="formSubmit">
      <input
        class="border_bottom"
        type="text"
        placeholder="输入需要翻译的内容"
        v-model="textToTranslate"
      >
      <select
        class="border_bottom"
        v-model="language"
      >
        <option value="en">English</option>
        <option value="zh">Chinese</option>
        <option value="ja">Japanese</option>
        <option value="ko">Korean</option>
        <option value="ru">Russian</option>
      </select>
      <input
        class="button"
        type="submit"
        value="翻译"
      >
    </form>
  </div>
</template>

<script>

export default {
    data: function(){
        return{
            textToTranslate: "",
            language:"en"
        }
    },
    methods: {
      formSubmit: function(e){
        //   alert(this.textToTranslate)
        // 取消默认事件
          e.preventDefault();
          this.$emit("formSubmit",this.textToTranslate,this.language)
      }
  }
}
</script>

<style scoped>
form {
  display: flex;
  width: 60%;
  max-width: 800px;
  height: 6rem;
  justify-content: space-around;
  margin: 0 auto;
  padding: 30px 60px;
  background: #eaf1f1;
  border: 1px solid #dee5e5;
  border-radius: 5px;
}
.border_bottom {
  background: inherit;
  border: none;
  outline: none;
  border-bottom: 1px solid #dee5e5;
}
.border_bottom:focus {
  border-bottom-color: #1588e3;
}
.button {
  color: #f2ffff;
  background: #37a0f4;
  outline: none;
  border: none;
  border-radius: 5px;
}
.button:hover {
  background: #1588e3;
}
</style>
