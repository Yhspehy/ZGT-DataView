<script setup lang="ts">
import BorderBox1 from '@/components/BorderBox/BorderBox1.vue'
import BorderBox2 from '@/components/BorderBox/BorderBox2.vue'

import LeftChart1 from './Charts/LeftChart1.vue'
import LeftChart2 from './Charts/LeftChart2.vue'
import LeftChart3 from './Charts/LeftChart3.vue'

import CenterChart from './Charts/CenterChart.vue'

import RightChart1 from './Charts/RightChart1.vue'
import RightChart2 from './Charts/RightChart2.vue'

import BottomChart from './Charts/BottomChart.vue'
</script>

<template>
  <div id="data-view">
    <div class="main-header">
      <div class="mh-left">技术支持</div>
      <div class="mh-middle">机电设备电子档案</div>
      <div class="mh-right">
        <div>综合管理台</div>
      </div>
    </div>

    <div class="main-container">
      <border-box-1>
        <div class="main-container-content">
          <div class="left-chart-container">
            <border-box-2>
              <left-chart-1 />
              <left-chart-2 />
              <left-chart-3 />
            </border-box-2>
          </div>

          <div class="right-main-container">
            <div class="rmc-top-container">
              <div class="rmctc-left-container">
                <border-box-2>
                  <center-chart />
                </border-box-2>
              </div>

              <div class="rmctc-right-container">
                <border-box-2 style="margin-bottom: 1%">
                  <right-chart-1 />
                </border-box-2>

                <border-box-2>
                  <right-chart-2 />
                </border-box-2>
              </div>
            </div>

            <div class="rmc-bottom-container">
              <border-box-2>
                <bottom-chart />
              </border-box-2>
            </div>
          </div>
        </div>
      </border-box-1>
    </div>
  </div>
</template>

<style lang="scss">
#data-view {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  #dv-full-screen-container {
    background-image: url('./img/bg.png');
    background-size: 100% 100%;
    box-shadow: 0 0 3px blue;
    display: flex;
    flex-direction: column;
  }
  .main-header {
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    .mh-left {
      font-size: 20px;
      color: rgb(1, 134, 187);
      a:visited {
        color: rgb(1, 134, 187);
      }
    }
    .mh-middle {
      font-size: 30px;
    }
    .mh-left,
    .mh-right {
      width: 450px;
    }
  }
  .main-container {
    width: 100%;
    height: calc(100% - 80px);

    .main-container-content {
      display: flex;
      height: 100%;
      width: 100%;
      padding: 20px;
      box-sizing: border-box;
    }
  }
  .left-chart-container {
    width: 22%;
    height: 100%;
  }
  .right-main-container {
    width: 77%;
    margin-left: 10px;
    padding-left: 5px;
    box-sizing: border-box;

    .rmc-top-container {
      height: 65%;
      display: flex;
    }

    .rmctc-left-container {
      width: 64%;
      margin-right: 1%;
    }

    .rmctc-right-container {
      width: 35%;
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    .rmc-bottom-container {
      margin-top: 2%;
      height: 30%;
    }

    .rmctc-chart-1,
    .rmctc-chart-2 {
      height: 50%;
    }
  }
}
</style>
