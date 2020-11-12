<template>
  <div id="app">
    <header id="app-header"></header>
    <main id="app-main" class="container">
      <section>
        <h1>
          Nice To meet you!<br />
          We are <span class="big-heading">Alley</span
          ><span class="period-mark">.</span>
        </h1>
        <p class="big-paragraph">
          고객에게 지역 빵집을 소개시켜주며, 빵이 나오기 전에 고객이 미리 예약을
          해 갓 구운 빵을 픽업할 수 있고, 영업시간 중 원하는 시간에 원하는 빵을
          포장 할 수 있으며 마감 시간이 가까워지면 빵 가격을 유동적으로 내려서
          판매 할 수 있는 서비스를 개발하고 있습니다.
        </p>
      </section>
      <section>
        <h2>4월 19일 출시 예정<span class="period-mark">.</span></h2>
      </section>
      <section>
        <h2>
          <a class="special-anchor" href="mailto:doyoung0205@naver.com"
            >doyoung0205@naver.com</a
          >
        </h2>
      </section>
    </main>
    <footer id="app-footer"></footer>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>

<style lang="scss">
body:before {
  position: fixed;
  z-index: 1;
  top: 0;
  display: block;
  content: "";
  width: 100%;
  height: 10px;
  background: #00d2ff;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#3a7bd5),
    to(#00d2ff)
  );
  background: linear-gradient(90deg, #3a7bd5, #00d2ff);
}
</style>
