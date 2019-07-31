<template>
  <div id="app">
    <h1>在线翻译</h1>
    <h5>简单 / 易用 / 便捷</h5>
    <translateForm @formSubmit="translateText"></translateForm>
    <translateOutput :translatedText="translatedText"></translateOutput>
  </div>
</template>

<script>
import translateForm from "./components/TranslateForm"
import translateOutput from "./components/TranslateOutput"
export default {
  data: function(){
    return{
      translatedText: ""
    }
  },
  components: {
    translateForm,
    translateOutput
  },
  methods:{
    translateText: function(text, language){
      // 使用vue-resource获取Yandex的 TranslateAPI
      this.$http.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190731T090615Z.b35740e8619ffd2e.03273e723387463832ae003f305c5fd15bc483e7&lang='+language+'&text='+text)
      .then((response)=>{
        // console.log(response)
        // 得到翻译的结果
        this.translatedText = response.body.text[0]
      })
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
