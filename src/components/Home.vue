<template>
  <div id="app">
    <main id="app-main" class="container">
      <section>
        <h1>
          안녕하세요!<br />
          저희는 <span class="big-heading">빵긋</span>입니다<span
            class="period-mark"
            >.</span
          >
        </h1>
        <p class="big-paragraph">
          고객에게 지역 빵집을 소개시켜주며, 빵이 나오기 전에 고객이 미리 예약을
          해 갓 구운 빵을 픽업할 수 있고, 영업시간 중 원하는 시간에 원하는 빵을
          포장 할 수 있으며 마감 시간이 가까워지면 빵 가격을 유동적으로 내려서
          판매 할 수 있는 서비스를 개발하고 있습니다.
        </p>
      </section>
      <section>
        <h2>곧 출시될 예정입니다<span class="period-mark">.</span></h2>
      </section>
      <section>
        <h2>
          <a class="special-anchor" href="mailto:doyoung0205@naver.com"
            >관심이 있으신 분은 이메일 보내주세요.</a
          >
        </h2>
      </section>
      <a href="/hello">태그매니저 테스트</a>
    </main>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>

<style lang="scss">
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
</style>
